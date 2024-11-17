export interface User {
  username: string;
  isAuthenticated: boolean;
}

export interface Domain {
  id: string;
  name: string;
  expiryDate: string;
  status: 'active' | 'expired' | 'pending';
}

export interface HostingPlan {
  id: string;
  name: string;
  storage: string;
  bandwidth: string;
  status: 'active' | 'suspended';
  nextBillingDate: string;
}