import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const token = localStorage.getItem("token");
const res = await fetch("http://localhost:8000/protected", {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      {/* Top Navbar */}
      <header className="bg-gray-900 text-white flex items-center justify-between px-6 py-3 shadow relative z-10">
        <div className="flex items-center space-x-4">
          {/* Hamburger icon (only on mobile) */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle menu"
          >
            {sidebarOpen ? (
              <XMarkIcon className="h-6 w-6 text-white" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-white" />
            )}
          </button>

          <span className="text-lg font-semibold">IDS Manager</span>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-sm hidden sm:inline">Welcome, Derek</span>
          <button className="text-sm hover:underline">Logout</button>
        </div>
      </header>

      <div className="flex flex-1 relative">
        {/* Sidebar (slide-in for mobile) */}
        <aside
          className={`bg-gray-100 border-r w-64 p-4 space-y-4 absolute z-20 inset-y-0 left-0 transform ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-200 ease-in-out`}
        >
          <nav className="space-y-2">
            <a href="#" className="block text-sm font-medium text-gray-800 hover:text-blue-600">Dashboard</a>
            <a href="/cases" className="block text-sm text-gray-800 hover:text-blue-600" >Cases</a>
            <a href="#" className="block text-sm text-gray-800 hover:text-blue-600">IDS Documents</a>
            <a href="#" className="block text-sm text-gray-800 hover:text-blue-600">Disclosures</a>
            <a href="/settings" className="block text-sm text-gray-800 hover:text-blue-600">Settings</a>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 bg-white p-6 overflow-y-auto">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Dashboard Overview</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
              <h2 className="text-lg font-semibold text-blue-900">Active Cases</h2>
              <p className="text-sm text-blue-800 mt-2">You have 4 ongoing cases.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 shadow-sm">
              <h2 className="text-lg font-semibold text-green-900">Pending IDS</h2>
              <p className="text-sm text-green-800 mt-2">2 disclosures need review.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}