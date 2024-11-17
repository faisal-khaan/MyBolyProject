import React, { useState } from 'react';
import { KeyRound, User, Globe } from 'lucide-react';

interface LoginFormProps {
  onLogin: (username: string, password: string, domain: string) => void;
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [domain, setDomain] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password, domain);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-8 text-white">Hosting Dashboard</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Username</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-gray-700/50 border border-gray-600 text-white pl-10 pr-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter username"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
            <div className="relative">
              <KeyRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-700/50 border border-gray-600 text-white pl-10 pr-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter password"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Domain Name</label>
            <div className="relative">
              <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="bg-gray-700/50 border border-gray-600 text-white pl-10 pr-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="yourdomain.com"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}