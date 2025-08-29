import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const funnelData = [
  { stage: 'AI Identified', count: 1247, percentage: 100 },
  { stage: 'Qualified', count: 623, percentage: 50 },
  { stage: 'Contacted', count: 312, percentage: 25 },
  { stage: 'Responded', count: 156, percentage: 12.5 },
  { stage: 'Demo Scheduled', count: 78, percentage: 6.3 },
  { stage: 'Closed Won', count: 23, percentage: 1.8 }
];

export function ConversionFunnel() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Conversion Funnel</h3>
        <p className="text-sm text-gray-600">Track prospects through your sales pipeline</p>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={funnelData} layout="horizontal">
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis 
              type="number"
              stroke="#64748b"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              type="category"
              dataKey="stage"
              stroke="#64748b"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              width={100}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              formatter={(value: any, name: string) => [
                `${value} prospects (${funnelData.find(d => d.count === value)?.percentage}%)`,
                'Count'
              ]}
            />
            <Bar 
              dataKey="count" 
              fill="#3b82f6"
              radius={[0, 4, 4, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}