import React, { useState } from 'react';
import { LoginForm } from './components/LoginForm';
import { Dashboard } from './components/Dashboard';
import type { User, Domain, HostingPlan } from './types';

// Mock data
const mockDomains: Domain[] = [
  {
    id: '1',
    name: 'example.com',
    expiryDate: '2025-03-15',
    status: 'active',
  },
  {
    id: '2',
    name: 'test-site.net',
    expiryDate: '2024-12-01',
    status: 'pending',
  },
];

const mockHostingPlan: HostingPlan = {
  id: '1',
  name: 'Professional',
  storage: '100 GB',
  bandwidth: '500 GB',
  status: 'active',
  nextBillingDate: '2024-04-15',
};

function App() {
  const [user, setUser] = useState<User>({ username: '', isAuthenticated: false });

  const handleLogin = (username: string, password: string, domain: string) => {
    // In a real app, you would validate credentials here
    setUser({ username, isAuthenticated: true });
  };

  const handleLogout = () => {
    setUser({ username: '', isAuthenticated: false });
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {user.isAuthenticated ? (
        <Dashboard
          username={user.username}
          onLogout={handleLogout}
          domains={mockDomains}
          hostingPlan={mockHostingPlan}
        />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;