export interface User {
  id: number;
  name: string;
  email: string;
  status: 'active' | 'inactive';
  region: string;
  registrationDate: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}

export interface UsersState {
  users: User[];
  filteredUsers: User[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  deletedUsers: number;
}

export interface AnalyticsState {
  totalUsers: number;
  activeUsers: number;
  deletedUsers: number;
  registrationTrend: Array<{ date: string; count: number }>;
  usersByStatus: Array<{ status: string; count: number }>;
  usersByRegion: Array<{ region: string; count: number }>;
  loading: boolean;
  error: string | null;
}