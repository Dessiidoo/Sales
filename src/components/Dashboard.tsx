import { MetricsGrid } from './dashboard/MetricsGrid';
import { ProspectChart } from './dashboard/ProspectChart';
import { RecentActivity } from './dashboard/RecentActivity';
import { TopProspects } from './dashboard/TopProspects';

export function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Sales Intelligence Dashboard</h2>
        <p className="text-gray-600">AI-powered insights to accelerate your sales pipeline</p>
      </div>
      
      <MetricsGrid />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ProspectChart />
        <TopProspects />
      </div>
      
      <RecentActivity />
    </div>
  );
}