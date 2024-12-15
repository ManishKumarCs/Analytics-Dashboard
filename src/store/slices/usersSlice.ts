import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UsersState, User } from '../../types';

const initialState: UsersState = {
  users: [],
  filteredUsers: [],
  loading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,
  deletedUsers: 0,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUsersStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchUsersSuccess: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
      state.filteredUsers = action.payload;
      state.loading = false;
      state.totalPages = Math.ceil(action.payload.length / 5);
    },
    fetchUsersFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter(user => user.id !== action.payload);
      state.filteredUsers = state.filteredUsers.filter(user => user.id !== action.payload);
      state.deletedUsers += 1;
    },
    filterUsers: (state, action: PayloadAction<string>) => {
      const searchTerm = action.payload.toLowerCase();
      state.filteredUsers = state.users.filter(user => 
        user.name.toLowerCase().includes(searchTerm) || 
        user.email.toLowerCase().includes(searchTerm)
      );
      state.currentPage = 1;
      state.totalPages = Math.ceil(state.filteredUsers.length / 5);
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
  deleteUser,
  filterUsers,
  setCurrentPage,
} = usersSlice.actions;
export default usersSlice.reducer;