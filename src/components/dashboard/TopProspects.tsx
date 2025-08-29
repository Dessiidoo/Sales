import React from 'react';
import { Building2, TrendingUp, Star } from 'lucide-react';

const prospects = [
  {
    company: 'TechFlow Solutions',
    industry: 'SaaS',
    score: 94,
    revenue: '$2.3M',
    employees: '50-100',
    reason: 'Recently raised Series A, expanding sales team'
  },
  {
    company: 'DataVault Inc',
    industry: 'Fintech',
    score: 91,
    revenue: '$5.1M',
    employees: '100-250',
    reason: 'Posted job openings for sales roles'
  },
  {
    company: 'CloudNine Systems',
    industry: 'Cloud Services',
    score: 88,
    revenue: '$1.8M',
    employees: '25-50',
    reason: 'High website traffic growth, new product launch'
  },
  {
    company: 'InnovateLab',
    industry: 'AI/ML',
    score: 85,
    revenue: '$3.2M',
    employees: '75-150',
    reason: 'Competitor analysis shows market expansion'
  }
];

export function TopProspects() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Top AI-Scored Prospects</h3>
          <p className="text-sm text-gray-600">Highest conversion probability this week</p>
        </div>
        <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        {prospects.map((prospect, index) => (
          <div key={index} className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{prospect.company}</h4>
                  <p className="text-sm text-gray-500">{prospect.industry}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-warning-500" />
                <span className="text-lg font-bold text-gray-900">{prospect.score}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
              <div>
                <span className="text-gray-500">Revenue:</span>
                <span className="ml-1 font-medium text-gray-900">{prospect.revenue}</span>
              </div>
              <div>
                <span className="text-gray-500">Employees:</span>
                <span className="ml-1 font-medium text-gray-900">{prospect.employees}</span>
              </div>
            </div>
            
            <div className="flex items-start space-x-2">
              <TrendingUp className="w-4 h-4 text-success-500 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-600">{prospect.reason}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}