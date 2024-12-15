import React from 'react';
import { Users, UserCheck, UserMinus } from 'lucide-react';
import StatCard from '../StatCard';
import { AnalyticsState } from '../../types';

interface MetricsGridProps {
  analytics: AnalyticsState;
}

const MetricsGrid: React.FC<MetricsGridProps> = ({ analytics }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard
        title="Total Users"
        value={analytics.totalUsers}
        icon={Users}
        color="bg-blue-500"
      />
      <StatCard
        title="Active Users"
        value={analytics.activeUsers}
        icon={UserCheck}
        color="bg-green-500"
      />
      <StatCard
        title="Deleted Users"
        value={analytics.deletedUsers}
        icon={UserMinus}
        color="bg-red-500"
      />
    </div>
  );
};

export default MetricsGrid;