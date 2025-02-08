

export interface Expenses {
    id:string,
    title: string,
    amount:number
}


// User Interface
export interface User {
    id: string;
    createdAt?: Date; // ISO date string
    updatedAt?: Date; // ISO date string
    name: string;
    email: string;
    role: number;
    shares?:number;
    balance: number;
    wallets?: Wallet[];
    transactions?: Transaction[];
    investments?: Investment[];
    notifications?: Notification[];
    analytics?: Analytics[];
  }
  
  // Wallet Interface
  export interface Wallet {
    id: string;
    userId: string;
    user?: User; // Optional to avoid circular dependencies
    address: string;
    currency: string;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
  }
  
  // Transaction Interface
  export interface Transaction {
    id: string;
    userId: string;
    user?: User; // Optional to avoid circular dependencies
    type: string;
    amount: number;
    currency: string;
    description?: string; // Optional field
    createdAt: string; // ISO date string
  }
  
  // Investment Interface
  export interface Investment {
    id: string;
    userId: string;
    user?: User; // Optional to avoid circular dependencies
    asset: string;
    amount: number;
    currency: string;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
  }
  
  // Notification Interface
  export interface Notification {
    id: string;
    userId: string;
    user?: User; // Optional to avoid circular dependencies
    type: string;
    message: string;
    isRead: boolean;
    createdAt: string; // ISO date string
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
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
  }
  