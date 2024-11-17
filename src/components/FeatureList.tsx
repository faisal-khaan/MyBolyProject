import React from 'react';

const features = [
  'Multi-stage Docker builds for optimal image size',
  'Nginx for static file serving',
  'Development mode with hot-reloading',
  'Production-ready configuration',
];

export function FeatureList() {
  return (
    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Features</h2>
      <ul className="text-left max-w-md mx-auto space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="h-2 w-2 bg-blue-400 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}