import React from 'react';
import { Server, Globe, HardDrive, Activity } from 'lucide-react';
import type { Domain, HostingPlan } from '../types';

interface DashboardProps {
  username: string;
  onLogout: () => void;
  domains: Domain[];
  hostingPlan: HostingPlan;
}

export function Dashboard({ username, onLogout, domains, hostingPlan }: DashboardProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <nav className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Server className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-bold text-white">Hosting Dashboard</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-300">Welcome, {username}</span>
            <button
              onClick={onLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
            <div className="flex items-center mb-4">
              <HardDrive className="h-6 w-6 text-blue-400 mr-2" />
              <h2 className="text-xl font-bold text-white">Hosting Plan</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Plan</span>
                <span className="text-white font-medium">{hostingPlan.name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Storage</span>
                <span className="text-white font-medium">{hostingPlan.storage}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Bandwidth</span>
                <span className="text-white font-medium">{hostingPlan.bandwidth}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Status</span>
                <span className={`font-medium ${
                  hostingPlan.status === 'active' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {hostingPlan.status.charAt(0).toUpperCase() + hostingPlan.status.slice(1)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Next Billing</span>
                <span className="text-white font-medium">{hostingPlan.nextBillingDate}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
            <div className="flex items-center mb-4">
              <Globe className="h-6 w-6 text-blue-400 mr-2" />
              <h2 className="text-xl font-bold text-white">Domains</h2>
            </div>
            <div className="space-y-4">
              {domains.map((domain) => (
                <div key={domain.id} className="flex justify-between items-center p-3 bg-gray-700/30 rounded-lg">
                  <div>
                    <p className="text-white font-medium">{domain.name}</p>
                    <p className="text-sm text-gray-400">Expires: {domain.expiryDate}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    domain.status === 'active' ? 'bg-green-500/20 text-green-400' :
                    domain.status === 'expired' ? 'bg-red-500/20 text-red-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {domain.status.charAt(0).toUpperCase() + domain.status.slice(1)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
            <div className="flex items-center mb-4">
              <Activity className="h-6 w-6 text-blue-400 mr-2" />
              <h2 className="text-xl font-bold text-white">Usage Statistics</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-700/30 p-4 rounded-lg">
                <h3 className="text-gray-400 text-sm">Storage Used</h3>
                <div className="mt-2">
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">45.5 GB</span>
                    <span className="text-gray-400">/ 100 GB</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45.5%' }}></div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-700/30 p-4 rounded-lg">
                <h3 className="text-gray-400 text-sm">Bandwidth Used</h3>
                <div className="mt-2">
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">156 GB</span>
                    <span className="text-gray-400">/ 500 GB</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '31.2%' }}></div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-700/30 p-4 rounded-lg">
                <h3 className="text-gray-400 text-sm">SSL Certificates</h3>
                <div className="mt-2">
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">2 Active</span>
                    <span className="text-gray-400">/ 5 Total</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}