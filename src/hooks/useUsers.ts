import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { fetchUsersSuccess } from '../store/slices/usersSlice';
import { generateMockUsers } from '../utils/mockData';

export const useUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users);

  useEffect(() => {
    const mockUsers = generateMockUsers(20);
    dispatch(fetchUsersSuccess(mockUsers));
  }, [dispatch]);

  return users;
};