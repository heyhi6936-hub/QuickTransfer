export interface TransferFileItem {
  name: string;
  size: number;
  type: string;
  content: string;
}

export interface TransferData {
  id: string;
  code: string;
  name: string;
  size: number;
  type: string;
  content: string; // Base64 or Text
  files?: TransferFileItem[]; // Multi-file support
  createdAt: number;
  expiresAt: number;
}

export type AppState = 'IDLE' | 'SENDING' | 'RECEIVING' | 'COMPLETE';
