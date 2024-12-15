import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { fetchAnalyticsSuccess } from '../store/slices/analyticsSlice';
import { generateMockAnalytics } from '../utils/mockData';

export const useAnalytics = (dateRange: string, selectedRegion: string) => {
  const dispatch = useDispatch();
  const analytics = useSelector((state: RootState) => state.analytics);

  useEffect(() => {
    // In a real app, we would fetch data based on dateRange and selectedRegion
    const mockData = generateMockAnalytics();
    dispatch(fetchAnalyticsSuccess(mockData));
  }, [dispatch, dateRange, selectedRegion]);

  return analytics;
};