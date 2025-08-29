import React from 'react';
import { Brain, TrendingUp, AlertTriangle, Lightbulb, Target } from 'lucide-react';

const insights = [
  {
    type: 'opportunity',
    title: 'High-Value Sector Identified',
    description: 'AI detected 40% higher conversion rates in Healthcare SaaS companies with 100-500 employees.',
    action: 'Focus outreach on this segment',
    priority: 'high',
    icon: Target
  },
  {
    type: 'trend',
    title: 'Seasonal Pattern Detected',
    description: 'Q4 shows 60% increase in enterprise deals. Historical data suggests optimal timing for large accounts.',
    action: 'Prioritize enterprise prospects',
    priority: 'medium',
    icon: TrendingUp
  },
  {
    type: 'warning',
    title: 'Competitor Activity Alert',
    description: 'Increased competitor presence in Fintech sector. 3 key prospects may be evaluating alternatives.',
    action: 'Accelerate outreach timeline',
    priority: 'high',
    icon: AlertTriangle
  },
  {
    type: 'suggestion',
    title: 'Messaging Optimization',
    description: 'AI analysis shows "ROI" and "efficiency" keywords increase response rates by 23% in your target market.',
    action: 'Update email templates',
    priority: 'low',
    icon: Lightbulb
  }
];

export function AIInsights() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-primary-50 rounded-lg border border-primary-200">
          <Brain className="w-5 h-5 text-primary-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">AI-Generated Insights</h3>
          <p className="text-sm text-gray-600">Actionable recommendations from your sales data</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          const priorityColors = {
            high: 'border-error-200 bg-error-50',
            medium: 'border-warning-200 bg-warning-50',
            low: 'border-primary-200 bg-primary-50'
          };
          const priorityTextColors = {
            high: 'text-error-700',
            medium: 'text-warning-700',
            low: 'text-primary-700'
          };
          
          return (
            <div key={index} className={`border rounded-lg p-5 ${priorityColors[insight.priority as keyof typeof priorityColors]}`}>
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-white rounded-lg border border-gray-200">
                  <Icon className="w-4 h-4 text-gray-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{insight.title}</h4>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${priorityTextColors[insight.priority as keyof typeof priorityTextColors]} bg-white`}>
                      {insight.priority.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">{insight.description}</p>
                  <button className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors">
                    {insight.action} →
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}