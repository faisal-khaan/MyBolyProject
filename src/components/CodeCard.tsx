import React from 'react';

interface CodeCardProps {
  title: string;
  command: string;
}

export function CodeCard({ title, command }: CodeCardProps) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <pre className="bg-gray-900 p-4 rounded text-left overflow-x-auto">
        <code>{command}</code>
      </pre>
    </div>
  );
}