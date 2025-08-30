import { useState } from 'react';
import { Search, Filter, Download, Star, Building2, Mail, Phone, ExternalLink } from 'lucide-react';

const prospects = [
  {
    id: 1,
    company: 'TechFlow Solutions',
    industry: 'SaaS',
    score: 94,
    revenue: '$2.3M',
    employees: '50-100',
    location: 'San Francisco, CA',
    contact: 'Sarah Johnson',
    title: 'VP of Sales',
    email: 'sarah.j@techflow.com',
    phone: '+1 (555) 123-4567',
    lastActivity: 'Raised Series A funding',
    tags: ['Hot Lead', 'Expanding Team', 'High Intent']
  },
  {
    id: 2,
    company: 'DataVault Inc',
    industry: 'Fintech',
    score: 91,
    revenue: '$5.1M',
    employees: '100-250',
    location: 'New York, NY',
    contact: 'Michael Chen',
    title: 'Chief Revenue Officer',
    email: 'm.chen@datavault.com',
    phone: '+1 (555) 987-6543',
    lastActivity: 'Posted sales job openings',
    tags: ['Warm Lead', 'Hiring', 'Growth Phase']
  },
  {
    id: 3,
    company: 'CloudNine Systems',
    industry: 'Cloud Services',
    score: 88,
    revenue: '$1.8M',
    employees: '25-50',
    location: 'Austin, TX',
    contact: 'Emily Rodriguez',
    title: 'Head of Business Development',
    email: 'e.rodriguez@cloudnine.com',
    phone: '+1 (555) 456-7890',
    lastActivity: 'Launched new product line',
    tags: ['Product Launch', 'Scaling', 'Tech Forward']
  }
];

export function ProspectList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProspect, setSelectedProspect] = useState<number | null>(null);

  const filteredProspects = prospects.filter(prospect =>
    prospect.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prospect.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prospect.contact.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">AI-Scored Prospects</h2>
          <p className="text-gray-600">Prioritized leads based on conversion probability</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search prospects by company, industry, or contact..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="space-y-4">
          {filteredProspects.map((prospect) => (
            <div
              key={prospect.id}
              className={`border rounded-lg p-6 transition-all duration-200 cursor-pointer ${
                selectedProspect === prospect.id
                  ? 'border-primary-300 bg-primary-50'
                  : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
              }`}
              onClick={() => setSelectedProspect(selectedProspect === prospect.id ? null : prospect.id)}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{prospect.company}</h3>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-600">{prospect.industry}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm mb-3">
                      <div>
                        <span className="text-gray-500">Revenue:</span>
                        <span className="ml-1 font-medium text-gray-900">{prospect.revenue}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Employees:</span>
                        <span className="ml-1 font-medium text-gray-900">{prospect.employees}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Location:</span>
                        <span className="ml-1 font-medium text-gray-900">{prospect.location}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {prospect.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      <Star className="w-4 h-4 text-warning-500" />
                      <span className="text-2xl font-bold text-gray-900">{prospect.score}</span>
                    </div>
                    <p className="text-xs text-gray-500">AI Score</p>
                  </div>
                </div>
              </div>

              {selectedProspect === prospect.id && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Contact Information</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium text-gray-600">
                              {prospect.contact.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{prospect.contact}</p>
                            <p className="text-sm text-gray-500">{prospect.title}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Mail className="w-4 h-4" />
                          <span>{prospect.email}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Phone className="w-4 h-4" />
                          <span>{prospect.phone}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">AI Insights</h4>
                      <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                        <p className="text-sm text-primary-800 mb-3">{prospect.lastActivity}</p>
                        <div className="flex items-center space-x-2">
                          <button className="flex items-center space-x-1 px-3 py-1.5 bg-primary-600 text-white text-xs font-medium rounded-md hover:bg-primary-700 transition-colors">
                            <MessageSquare className="w-3 h-3" />
                            <span>Generate Outreach</span>
                          </button>
                          <button className="flex items-center space-x-1 px-3 py-1.5 bg-white border border-primary-300 text-primary-700 text-xs font-medium rounded-md hover:bg-primary-50 transition-colors">
                            <ExternalLink className="w-3 h-3" />
                            <span>View Profile</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}