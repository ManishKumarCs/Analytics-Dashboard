import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser, filterUsers, setCurrentPage } from '../store/slices/usersSlice';
import { useUsers } from '../hooks/useUsers';
import SearchBar from '../components/dashboard/SearchBar';
import UserTable from '../components/dashboard/UserTable';
import Pagination from '../components/dashboard/Pagination';
import UserModal from '../components/dashboard/UserModal';
import { User } from '../types';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { filteredUsers, currentPage, totalPages, loading } = useUsers();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    dispatch(filterUsers(value));
  };

  const handleDelete = (id: number) => {
    dispatch(deleteUser(id));
  };

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const getCurrentPageUsers = () => {
    const startIndex = (currentPage - 1) * 5;
    return filteredUsers.slice(startIndex, startIndex + 5);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
        <div className="w-64">
          <SearchBar value={searchTerm} onChange={handleSearch} />
        </div>
      </div>

      <UserTable
        users={getCurrentPageUsers()}
        onDelete={handleDelete}
        onView={setSelectedUser}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      <UserModal
        user={selectedUser}
        onClose={() => setSelectedUser(null)}
      />
    </div>
  );
};

export default Dashboard;