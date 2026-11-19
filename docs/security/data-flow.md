# QuickTransfer Data Flow & Security Architecture Map

**Document Version:** 1.0.0  
**Date:** 19 November 2026  
**Reference:** Stage 1.1 of Full SEO & Product Trust Plan

---

## 1. System Overview

QuickTransfer is an ephemeral, web-based file sharing tool. It operates on a client-serverless architecture utilizing Next.js (App Router) on the frontend/hosting layer and Google Firebase Realtime Database (RTDB) for temporary storage and code-based retrieval.

```mermaid
flowchart TD
    subgraph Sender Browser
        A[User Selects File(s)] --> B[Client Validation: Total Size <= 100MB]
        B --> C[Read as Data URLs / Base64]
        C --> D[Cryptographic 6-Digit Code Generation]
        D --> E[Package Transfer Payload]
    end

    subgraph Transport Layer
        E -->|HTTPS / TLS 1.2+| F[Firebase RTDB API]
    end

    subgraph Firebase Cloud
        F --> G[(Realtime Database: /transfers/{code})]
        G --> H[Record has expiresAt timestamp]
    end

    subgraph Recipient Browser
        I[User enters 6-Digit Code] -->|HTTPS GET| F
        F --> J{Check Expiry: expiresAt > now?}
        J -->|No - Expired| K[Delete Record from RTDB & Return Expired Error]
        J -->|Yes - Valid| L[Return Transfer Payload]
        L --> M[Trigger Browser Download]
    end
```

---

## 2. Detailed Lifecycle Stages

| Stage | Component | Environment | Action & Security Controls |
| :--- | :--- | :--- | :--- |
| **1. File Selection** | `TransferCard.tsx` | Browser | User selects one or multiple files. |
| **2. Client Validation** | `TransferCard.tsx` | Browser | Validates total batch size does not exceed 100MB limit. Displays immediate error if violated. |
| **3. Content Preparation** | `HomeClient.tsx` | Browser | Files converted to Data URLs asynchronously via `FileReader`. Files grouped into a unified batch record. |
| **4. Code Generation** | `services/storage.ts` | Browser | Generated using Web Crypto `crypto.getRandomValues(new Uint32Array(1))` for cryptographically secure 6-digit generation (100000 - 999999). |
| **5. Data Storage** | `services/storage.ts` | HTTPS Transit → Firebase RTDB | Data stored under `/transfers/{code}` containing metadata, expiry timestamp (`Date.now() + expiryMs`), and file content. |
| **6. Retrieval** | `HomeClient.tsx` | Browser → Firebase RTDB | Recipient enters 6-digit code or accesses via URL param `?code=XXXXXX`. |
| **7. Expiry Enforcement** | `services/storage.ts` | Browser / RTDB | When queried, if `Date.now() >= expiresAt`, the server/client immediately purges the record via `remove(ref)` and rejects the download. |
| **8. Download** | `ResultView.tsx` | Browser | Decodes Data URL / Blob and initiates native browser download. Multi-file transfers provide individual or batch download. |

---

## 3. Truthful Security Model Disclosures

1. **Transit Security:** All client-to-cloud communications are encrypted in transit using standard HTTPS (TLS 1.2+).
2. **At-Rest Storage:** Data is stored temporarily in Firebase Realtime Database in Google Cloud data centers, protected by Firebase infrastructure encryption at rest.
3. **End-to-End Encryption Clarification:** Browser-side E2E encryption with zero-knowledge keys is **not** currently implemented; data is stored as transmitted data URLs in RTDB. Marketing statements must explicitly state "Encrypted in transit with HTTPS" and "Ephemeral storage with automatic expiry", rather than claiming zero-knowledge or client-side AES-256 E2E encryption.
4. **Retention:** Records are set to expire in 5 or 10 minutes. Expired records are deleted upon lookup, preventing retrieval after timeout.
