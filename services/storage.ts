import { TransferData } from '../types';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get, child, remove } from 'firebase/database';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdy-_Mh4x2TbkkJONrDwsLvbH8n33b-D4",
  authDomain: "quicktransfer-af521.firebaseapp.com",
  databaseURL: "https://quicktransfer-af521-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "quicktransfer-af521",
  storageBucket: "quicktransfer-af521.firebasestorage.app",
  messagingSenderId: "677341634923",
  appId: "1:677341634923:web:28d7fbd1be8699ab7eac2e",
  measurementId: "G-HC2Q1XVX8B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

/**
 * Generates a cryptographically secure 6-digit code.
 * Uses Web Crypto API where available.
 */
export const generateCode = (): string => {
  if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    const code = 100000 + (array[0] % 900000);
    return code.toString();
  }
  return Math.floor(100000 + Math.random() * 900000).toString();
};

/**
 * Saves transfer data to Firebase RTDB with collision avoidance.
 */
export const saveData = async (data: TransferData): Promise<string> => {
  let targetCode = data.code;
  const dbRef = ref(database);

  // Check for collisions and regenerate code if active transfer exists
  let attempts = 0;
  while (attempts < 5) {
    const snapshot = await get(child(dbRef, 'transfers/' + targetCode));
    if (snapshot.exists()) {
      const existing = snapshot.val() as TransferData;
      if (existing.expiresAt > Date.now()) {
        targetCode = generateCode();
        attempts++;
        continue;
      }
    }
    break;
  }

  data.code = targetCode;
  const transferRef = ref(database, 'transfers/' + targetCode);
  await set(transferRef, data);
  return targetCode;
};

/**
 * Retrieves transfer data by 6-digit code.
 * Deletes expired records proactively to avoid stale storage retention.
 */
export const getDataByCode = async (code: string): Promise<{ data?: TransferData, error?: 'expired' | 'invalid' }> => {
  const dbRef = ref(database);
  const snapshot = await get(child(dbRef, 'transfers/' + code));

  if (snapshot.exists()) {
    const data = snapshot.val() as TransferData;
    const now = Date.now();
    if (data.expiresAt <= now) {
      try {
        await deleteTransfer(code);
      } catch (err) {
        console.warn('Failed to cleanup expired transfer:', err);
      }
      return { error: 'expired' };
    } else {
      return { data };
    }
  }
  return { error: 'invalid' };
};

/**
 * Delete transfer data after download or expiration.
 */
export const deleteTransfer = async (code: string): Promise<void> => {
  const transferRef = ref(database, 'transfers/' + code);
  await remove(transferRef);
};
