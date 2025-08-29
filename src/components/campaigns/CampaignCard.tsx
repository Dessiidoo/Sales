import React from 'react';
import { Play, Pause, Edit, BarChart3, Users, Mail, Eye, MessageSquare } from 'lucide-react';

interface Campaign {
  id: number;
  name: string;
  status: 'active' | 'paused' | 'draft';
  prospects: number;
  sent: number;
  opened: number;
  replied: number;
  scheduled: string;
  aiStrategy: string;
  performance: number;
}

interface CampaignCardProps {
  campaign: Campaign;
}

export function CampaignCard({ campaign }: CampaignCardProps) {
  const statusColors = {
    active: 'bg-success-100 text-success-700 border-success-200',
    paused: 'bg-warning-100 text-warning-700 border-warning-200',
    draft: 'bg-gray-100 text-gray-700 border-gray-200'
  };

  const statusIcons = {
    active: Play,
    paused: Pause,
    draft: Edit
  };

  const StatusIcon = statusIcons[campaign.status];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{campaign.name}</h3>
        <div className={`flex items-center space-x-1 px-2 py-1 rounded-full border text-xs font-medium ${statusColors[campaign.status]}`}>
          <StatusIcon className="w-3 h-3" />
          <span className="capitalize">{campaign.status}</span>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600">Prospects:</span>
            <span className="font-medium text-gray-900">{campaign.prospects}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600">Sent:</span>
            <span className="font-medium text-gray-900">{campaign.sent}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Eye className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600">Opened:</span>
            <span className="font-medium text-gray-900">{campaign.opened}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MessageSquare className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600">Replied:</span>
            <span className="font-medium text-gray-900">{campaign.replied}</span>
          </div>
        </div>

        {campaign.performance > 0 && (
          <div className="bg-primary-50 border border-primary-200 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-1">
              <BarChart3 className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-medium text-primary-800">Performance: {campaign.performance}%</span>
            </div>
            <p className="text-xs text-primary-700">Above average response rate</p>
          </div>
        )}

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
          <p className="text-xs font-medium text-gray-700 mb-1">AI Strategy:</p>
          <p className="text-xs text-gray-600">{campaign.aiStrategy}</p>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        {campaign.status === 'active' && (
          <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-warning-100 text-warning-700 rounded-lg hover:bg-warning-200 transition-colors">
            <Pause className="w-4 h-4" />
            <span>Pause</span>
          </button>
        )}
        {campaign.status === 'paused' && (
          <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-success-100 text-success-700 rounded-lg hover:bg-success-200 transition-colors">
            <Play className="w-4 h-4" />
            <span>Resume</span>
          </button>
        )}
        {campaign.status === 'draft' && (
          <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
            <Play className="w-4 h-4" />
            <span>Launch</span>
          </button>
        )}
        <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
          <Edit className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}