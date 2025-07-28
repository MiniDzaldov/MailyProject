import React from 'react';

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.name}!</h1>
      <p className="text-gray-700">This is your dashboard.</p>
    </div>
  );
}
