import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AnalyticsState } from '../../types';

const initialState: AnalyticsState = {
  totalUsers: 0,
  activeUsers: 0,
  deletedUsers: 0,
  registrationTrend: [],
  usersByStatus: [],
  usersByRegion: [],
  loading: false,
  error: null,
};

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {
    fetchAnalyticsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchAnalyticsSuccess: (state, action: PayloadAction<AnalyticsState>) => {
      return { ...state, ...action.payload, loading: false };
    },
    fetchAnalyticsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateDeletedUsers: (state) => {
      state.deletedUsers += 1;
    },
  },
});

export const {
  fetchAnalyticsStart,
  fetchAnalyticsSuccess,
  fetchAnalyticsFailure,
  updateDeletedUsers,
} = analyticsSlice.actions;
export default analyticsSlice.reducer;