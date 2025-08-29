import React, { useState } from 'react';
import { Plus, Play, Pause, BarChart3, Users, Mail, Calendar } from 'lucide-react';
import { CampaignCard } from './campaigns/CampaignCard';
import { CreateCampaignModal } from './campaigns/CreateCampaignModal';

const campaigns = [
  {
    id: 1,
    name: 'Q4 Enterprise Push',
    status: 'active',
    prospects: 89,
    sent: 67,
    opened: 45,
    replied: 12,
    scheduled: '2024-01-15',
    aiStrategy: 'Focus on ROI and year-end budget optimization',
    performance: 18.2
  },
  {
    id: 2,
    name: 'Fintech Expansion',
    status: 'paused',
    prospects: 156,
    sent: 156,
    opened: 98,
    replied: 23,
    scheduled: '2024-01-10',
    aiStrategy: 'Emphasize compliance and security features',
    performance: 14.7
  },
  {
    id: 3,
    name: 'Healthcare SaaS Outreach',
    status: 'draft',
    prospects: 234,
    sent: 0,
    opened: 0,
    replied: 0,
    scheduled: '2024-01-20',
    aiStrategy: 'Highlight HIPAA compliance and patient data security',
    performance: 0
  }
];

export function Campaigns() {
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">AI-Powered Campaigns</h2>
          <p className="text-gray-600">Automated outreach with personalized messaging</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Create Campaign</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map((campaign) => (
          <CampaignCard key={campaign.id} campaign={campaign} />
        ))}
      </div>

      {showCreateModal && (
        <CreateCampaignModal onClose={() => setShowCreateModal(false)} />
      )}
    </div>
  );
}