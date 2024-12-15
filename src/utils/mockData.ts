// Mock data generation utilities
import { User } from '../types';

export const generateMockUsers = (count: number): User[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    status: i % 3 === 0 ? 'inactive' : 'active',
    region: ['North', 'South', 'East', 'West'][i % 4],
    registrationDate: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
  }));
};

export const generateMockAnalytics = () => ({
  totalUsers: 1000,
  activeUsers: 750,
  deletedUsers: 50,
  registrationTrend: Array.from({ length: 6 }, (_, i) => ({
    date: new Date(2024, i).toLocaleDateString('en-US', { month: 'short' }),
    count: Math.floor(Math.random() * 100) + 50
  })),
  usersByStatus: [
    { status: 'Active', count: 750 },
    { status: 'Inactive', count: 250 }
  ],
  usersByRegion: [
    { region: 'North', count: 300 },
    { region: 'South', count: 250 },
    { region: 'East', count: 200 },
    { region: 'West', count: 250 }
  ],
  loading: false,
  error: null
});