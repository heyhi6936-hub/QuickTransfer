# Privacy-Preserving Event Tracking & Conversion Funnel Specification

**Document Version:** 1.0.0  
**Date:** 19 November 2026  
**Reference:** Stage 6.2 & 6.3 of Full SEO & Growth Plan

---

## 1. Core Principles

1. **Zero Personal Data Exposure:** NEVER send transfer codes, file names, file contents, raw IP addresses, or user identifiers in analytics payloads.
2. **Aggregate Metric Focus:** Measure product adoption, task completion rates, and error occurrences without tracking individual visitors.

---

## 2. Event Taxonomy

| Event Name | Trigger Condition | Non-Sensitive Parameters |
| :--- | :--- | :--- |
| `homepage_view` | Initial page load on `/` | `device_type`, `referrer` |
| `upload_started` | User clicks Send with file(s) selected | `file_count`, `batch_size_mb_bucket` (e.g. `<10MB`, `10-50MB`, `50-100MB`) |
| `upload_succeeded` | File payload successfully stored in RTDB | `expiry_minutes` (5 or 10) |
| `upload_failed` | File reader or database error | `error_type` (`size_limit`, `read_error`, `network_error`) |
| `receive_started` | User submits 6-digit code | `code_length` (always 6) |
| `download_succeeded` | Recipient initiates download | `file_count` |
| `download_failed` | Invalid or expired code error | `error_reason` (`invalid`, `expired`, `network`) |
| `guide_viewed` | Visitor views an educational or landing guide | `page_slug` |

---

## 3. Product Conversion Funnel Definitions

```mermaid
flowchart LR
    A[Visitor Lands on Homepage] --> B[Upload Started]
    B --> C[Upload Succeeded]
    C --> D[Recipient Retrieves Code]
    D --> E[Download Succeeded]
```

### Key Funnel Formulas

1. **Sender Completion Rate:**
   $$\text{Sender Completion} = \frac{\text{upload\_succeeded}}{\text{upload\_started}} \times 100\%$$
2. **Recipient Download Success Rate:**
   $$\text{Download Success} = \frac{\text{download\_succeeded}}{\text{receive\_started}} \times 100\%$$
3. **End-to-End Transfer Ratio:**
   $$\text{Transfer Conversion} = \frac{\text{download\_succeeded}}{\text{upload\_succeeded}} \times 100\%$$
