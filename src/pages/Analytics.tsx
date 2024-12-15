import React, { useState } from 'react';
import { useAnalytics } from '../hooks/useAnalytics';
import AnalyticsFilters from '../components/analytics/AnalyticsFilters';
import MetricsGrid from '../components/analytics/MetricsGrid';
import ChartsGrid from '../components/analytics/ChartsGrid';

const Analytics = () => {
  const [dateRange, setDateRange] = useState('6m');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const analytics = useAnalytics(dateRange, selectedRegion);

  if (analytics.loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (analytics.error) {
    return (
      <div className="text-center text-red-600 p-4">
        Error loading analytics data: {analytics.error}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
        <AnalyticsFilters
          dateRange={dateRange}
          selectedRegion={selectedRegion}
          onDateRangeChange={setDateRange}
          onRegionChange={setSelectedRegion}
        />
      </div>

      <MetricsGrid analytics={analytics} />
      <ChartsGrid analytics={analytics} />
    </div>
  );
};

export default Analytics;