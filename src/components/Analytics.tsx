import React from 'react';
import { ConversionFunnel } from './analytics/ConversionFunnel';
import { IndustryBreakdown } from './analytics/IndustryBreakdown';
import { PerformanceMetrics } from './analytics/PerformanceMetrics';
import { AIInsights } from './analytics/AIInsights';

export function Analytics() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Sales Analytics</h2>
        <p className="text-gray-600">Deep insights into your sales performance and AI effectiveness</p>
      </div>
      
      <PerformanceMetrics />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ConversionFunnel />
        <IndustryBreakdown />
      </div>
      
      <AIInsights />
    </div>
  );
}