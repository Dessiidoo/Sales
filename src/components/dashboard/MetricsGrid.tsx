import React from 'react';
import { TrendingUp, Target, Users, DollarSign, Brain, Zap } from 'lucide-react';

const metrics = [
  {
    title: 'AI Score Average',
    value: '87.3',
    change: '+12.5%',
    trend: 'up',
    icon: Brain,
    color: 'primary'
  },
  {
    title: 'Hot Prospects',
    value: '156',
    change: '+23',
    trend: 'up',
    icon: Target,
    color: 'error'
  },
  {
    title: 'Conversion Rate',
    value: '34.2%',
    change: '+8.1%',
    trend: 'up',
    icon: TrendingUp,
    color: 'success'
  },
  {
    title: 'Pipeline Value',
    value: '$2.4M',
    change: '+15.3%',
    trend: 'up',
    icon: DollarSign,
    color: 'warning'
  },
  {
    title: 'Active Campaigns',
    value: '12',
    change: '+3',
    trend: 'up',
    icon: Zap,
    color: 'primary'
  },
  {
    title: 'Total Prospects',
    value: '1,247',
    change: '+89',
    trend: 'up',
    icon: Users,
    color: 'primary'
  }
];

export function MetricsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        const colorClasses = {
          primary: 'bg-primary-50 text-primary-600 border-primary-200',
          success: 'bg-success-50 text-success-600 border-success-200',
          warning: 'bg-warning-50 text-warning-600 border-warning-200',
          error: 'bg-error-50 text-error-600 border-error-200'
        };
        
        return (
          <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-200">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg border ${colorClasses[metric.color as keyof typeof colorClasses]}`}>
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium text-success-600 bg-success-50 px-2 py-1 rounded-full">
                {metric.change}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">{metric.title}</p>
              <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}