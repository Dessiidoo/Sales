import React from 'react';
import { Clock, Brain, Target, MessageSquare, TrendingUp } from 'lucide-react';

const activities = [
  {
    type: 'ai_discovery',
    title: 'AI discovered 12 new high-value prospects',
    description: 'Machine learning identified companies matching your ideal customer profile',
    time: '2 minutes ago',
    icon: Brain,
    color: 'primary'
  },
  {
    type: 'prospect_scored',
    title: 'TechFlow Solutions scored 94/100',
    description: 'Recently raised funding and expanding sales team - perfect timing',
    time: '15 minutes ago',
    icon: Target,
    color: 'success'
  },
  {
    type: 'campaign_sent',
    title: 'Personalized outreach sent to 8 prospects',
    description: 'AI-generated messages tailored to each company\'s recent activities',
    time: '1 hour ago',
    icon: MessageSquare,
    color: 'primary'
  },
  {
    type: 'conversion',
    title: 'DataVault Inc responded positively',
    description: 'Prospect showed interest in demo - follow-up scheduled',
    time: '3 hours ago',
    icon: TrendingUp,
    color: 'success'
  },
  {
    type: 'ai_insight',
    title: 'Market trend detected in Fintech sector',
    description: 'AI identified increased demand for compliance solutions',
    time: '6 hours ago',
    icon: Brain,
    color: 'warning'
  }
];

export function RecentActivity() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Recent AI Activity</h3>
          <p className="text-sm text-gray-600">Latest insights and automated actions</p>
        </div>
        <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
          View All Activity
        </button>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          const colorClasses = {
            primary: 'bg-primary-50 text-primary-600 border-primary-200',
            success: 'bg-success-50 text-success-600 border-success-200',
            warning: 'bg-warning-50 text-warning-600 border-warning-200',
            error: 'bg-error-50 text-error-600 border-error-200'
          };
          
          return (
            <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <div className={`p-2 rounded-lg border ${colorClasses[activity.color as keyof typeof colorClasses]}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-gray-900 mb-1">{activity.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{activity.description}</p>
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <Clock className="w-3 h-3" />
                  <span>{activity.time}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}