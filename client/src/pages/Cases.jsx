import React from 'react';

const cases = [
  {
    id: 'case-001',
    title: 'Patient A – Gene Variant Analysis',
    status: 'In Progress',
    updated: '2025-07-10',
  },
  {
    id: 'case-002',
    title: 'Patient B – Exome Sequencing Review',
    status: 'Completed',
    updated: '2025-07-12',
  },
  {
    id: 'case-003',
    title: 'Sample C – Quality Control Failed',
    status: 'Error',
    updated: '2025-07-13',
  },
];

const statusColor = {
  'In Progress': 'text-yellow-600 bg-yellow-100',
  'Completed': 'text-green-600 bg-green-100',
  'Error': 'text-red-600 bg-red-100',
};

const Cases = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Cases</h1>
      <div className="bg-white dark:bg-gray-900 shadow-sm rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Case ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Last Updated</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-100 dark:divide-gray-800">
            {cases.map((c) => (
              <tr key={c.id}>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{c.id}</td>
                <td className="px-6 py-4 text-sm text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">{c.title}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${statusColor[c.status]}`}>
                    {c.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{c.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cases;