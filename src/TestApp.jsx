// TestApp.jsx
import React from 'react';

const TestApp = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">LoRaWANTech React</h1>
        <p className="text-gray-600 mb-6">App is loading...</p>
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
          <p className="text-green-600">✓ React is working</p>
          <p className="text-green-600">✓ Tailwind CSS is working</p>
          <p className="text-yellow-600">Checking components...</p>
        </div>
      </div>
    </div>
  );
};

export default TestApp;