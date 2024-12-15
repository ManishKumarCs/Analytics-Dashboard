import React from 'react';
import LineChart from '../charts/LineChart';
import PieChart from '../charts/PieChart';
import BarChart from '../charts/BarChart';
import { AnalyticsState } from '../../types';

interface ChartsGridProps {
  analytics: AnalyticsState;
}

const ChartsGrid: React.FC<ChartsGridProps> = ({ analytics }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <LineChart
        data={analytics.registrationTrend}
        title="User Registration Trend"
      />
      
      <PieChart
        data={analytics.usersByStatus}
        title="Users by Status"
      />

      <div className="lg:col-span-2">
        <BarChart
          data={analytics.usersByRegion}
          title="Users by Region"
        />
      </div>
    </div>
  );
};

export default ChartsGrid;