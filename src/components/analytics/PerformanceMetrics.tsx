import React from 'react';
import { TrendingUp, TrendingDown, Target, Brain, Users, DollarSign } from 'lucide-react';

const metrics = [
  {
    title: 'AI Accuracy Rate',
    value: '89.3%',
    change: '+5.2%',
    trend: 'up',
    icon: Brain,
    description: 'Percentage of AI predictions that converted'
  },
  {
    title: 'Average Deal Size',
    value: '$47,500',
    change: '+12.8%',
    trend: 'up',
    icon: DollarSign,
    description: 'Mean value of closed deals this quarter'
  },
  {
    title: 'Time to Close',
    value: '23 days',
    change: '-8 days',
    trend: 'up',
    icon: Target,
    description: 'Average sales cycle length'
  },
  {
    title: 'Response Rate',
    value: '42.1%',
    change: '-2.3%',
    trend: 'down',
    icon: Users,
    description: 'Prospects responding to outreach'
  }
];

export function PerformanceMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        const isPositive = metric.trend === 'up';
        
        return (
          <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-200">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-primary-50 rounded-lg border border-primary-200">
                <Icon className="w-6 h-6 text-primary-600" />
              </div>
              <div className={`flex items-center space-x-1 text-sm font-medium ${
                isPositive ? 'text-success-600' : 'text-error-600'
              }`}>
                {isPositive ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                <span>{metric.change}</span>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">{metric.title}</p>
              <p className="text-2xl font-bold text-gray-900 mb-2">{metric.value}</p>
              <p className="text-xs text-gray-500">{metric.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}