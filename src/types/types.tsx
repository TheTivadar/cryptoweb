import { BalancePotType } from "@prisma/client";


export interface Expenses {
  id: string,
  title: string,
  amount: number
}


// User Interface
export interface User {
  id: string;
  createdAt?: Date; // ISO date string
  updatedAt?: Date; // ISO date string
  name: string;
  email: string;
  role: number;
  balance: number;
  wallets?: Wallet[];
  transactions?: Transaction[];
  notifications?: Notification[];
  analytics?: Analytics[];
  userBalances?: UserBalance[];
}

export interface UserBalance {
  id: string,
  userId: string,
  user: User,
  type: BalanceType,
  amount: number,
  share: number,
  createdAt: Date, // ISO date string
  updatedAt: Date, // ISO date string
}

export interface BalancePot {
  id: string,
  type: BalancePotType,
  total: number,
  createdAt: Date, // ISO date string
  updatedAt: Date, // ISO date string
}

// Wallet Interface
export interface Wallet {
  id: string;
  userId: string;
  user?: User; // Optional to avoid circular dependencies
  address: string;
  createdAt: Date; // ISO date string
  updatedAt: Date; // ISO date string
}

// Transaction Interface
export interface Transaction {
  id: string;
  userId: string;
  user?: User; // Optional to avoid circular dependencies
  type: TransactionType;
  amount: number;
  sourceType?: BalanceType
  targetType?: BalanceType
  method: PaymentMethod
  reference?: string
  createdAt: Date
  completedAt?: Date
}



// Notification Interface
export interface Notification {
  id: string;
  userId: string;
  user: User; // Optional to avoid circular dependencies

  message: string;
  isRead: boolean;
  createdAt: Date; // ISO date string
}

// Analytics Interface
export interface Analytics {
  id: string;
  userId: string;
  user?: User; // Optional to avoid circular dependencies
  totalBalance: number;
  totalInvested: number;
  totalProfit: number;
  mostInvestedAsset: string;
  createdAt: Date; // ISO date string
  updatedAt: Date; // ISO date string
}

export type TransactionType =
  | 'INTERNAL_TRANSFER'  // Between user balances
  | 'DEPOSIT'           // External to balance
  | 'WITHDRAWAL';       // Balance to external

// Direction enum as union type
export type Direction =
  | 'INCOMING'
  | 'INSIDE'
  | 'OUTGOING';

// Payment method enum as union type
export type PaymentMethod =
  | 'BANK_TRANSFER'
  | 'CRYPTO'
  | 'MANUAL_ADJUSTMENT';

// Balance type enum as union type
export type BalanceType =
  | 'NORMAL'
  | 'SAFE'
  | 'RISKY';

  export type PotTypes = 
  | 'NORMAL'
  | 'SAFE';

