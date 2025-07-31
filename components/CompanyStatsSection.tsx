import React from 'react';

const stats = [
  { label: 'Years of Experience', value: '31' },
  { label: 'Employees', value: '110' },
  { label: 'Operational States', value: '12' },
];

const CompanyStatsSection = () => (
  <section className="py-12 bg-white">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
      {stats.map(({ label, value }) => (
        <div key={label} className="flex flex-col items-center justify-center px-8 py-6 bg-white border border-[#1976d2] rounded-2xl shadow-md text-center w-64">
          <span className="text-5xl font-extrabold text-[#1a237e] mb-2 drop-shadow">{value}</span>
          <span className="text-lg font-semibold text-[#1976d2] mb-1">{label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default CompanyStatsSection; 