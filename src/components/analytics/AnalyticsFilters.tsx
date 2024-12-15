import React from 'react';

interface AnalyticsFiltersProps {
  dateRange: string;
  selectedRegion: string;
  onDateRangeChange: (range: string) => void;
  onRegionChange: (region: string) => void;
}

const AnalyticsFilters: React.FC<AnalyticsFiltersProps> = ({
  dateRange,
  selectedRegion,
  onDateRangeChange,
  onRegionChange,
}) => {
  return (
    <div className="flex gap-4 mb-6">
      <select
        value={dateRange}
        onChange={(e) => onDateRangeChange(e.target.value)}
        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="1m">Last Month</option>
        <option value="3m">Last 3 Months</option>
        <option value="6m">Last 6 Months</option>
        <option value="1y">Last Year</option>
      </select>

      <select
        value={selectedRegion}
        onChange={(e) => onRegionChange(e.target.value)}
        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="all">All Regions</option>
        <option value="north">North</option>
        <option value="south">South</option>
        <option value="east">East</option>
        <option value="west">West</option>
      </select>
    </div>
  );
};

export default AnalyticsFilters;