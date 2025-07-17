import React, { useState } from 'react';

const sections = [
  { id: 'profile', label: 'Profile' },
  { id: 'security', label: 'Security' },
  { id: 'notifications', label: 'Notifications' },
  { id: 'billing', label: 'Billing' },
];

const Settings = () => {
  const [activeSection, setActiveSection] = useState('profile');

  const renderSection = () => {
    switch (activeSection) {
      case 'profile':
        return <div><h2 className="text-xl font-semibold mb-2">Edit Profile</h2><p className="text-gray-600">Update your personal information.</p></div>;
      case 'security':
        return <div><h2 className="text-xl font-semibold mb-2">Security Settings</h2><p className="text-gray-600">Manage your password and login methods.</p></div>;
      case 'notifications':
        return <div><h2 className="text-xl font-semibold mb-2">Notification Preferences</h2><p className="text-gray-600">Choose how and when you want to be notified.</p></div>;
      case 'billing':
        return <div><h2 className="text-xl font-semibold mb-2">Billing & Plans</h2><p className="text-gray-600">Manage your billing and subscription plan.</p></div>;
      default:
        return null;
    }
  };

  return (
    <div>
        {/* Top Navbar */}
        <header className="bg-gray-900 text-white flex items-center justify-between px-6 py-3 shadow relative z-10">
            <div className="flex items-center space-x-4">
            <span className="text-lg font-semibold">IDS Manager</span>
            </div>

            <div className="flex items-center space-x-4">
            <span className="text-sm hidden sm:inline">Welcome, Derek</span>
            <button className="text-sm hover:underline">Logout</button>
            </div>
        </header>

        <div className="flex flex-col md:flex-row h-full min-h-[80vh]">
        {/* Sidebar */}
        <aside className="md:w-64 border-r bg-white dark:bg-gray-900 dark:border-gray-800">
            <nav className="p-4 space-y-2">
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-4">Settings</h3>
            {sections.map((section) => (
                <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full text-left px-4 py-2 rounded-md transition ${
                    activeSection === section.id
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-white'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
                >
                {section.label}
                </button>
            ))}
            </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-950">
            {renderSection()}
        </main>
        </div>
      </div>
  );
};

export default Settings;