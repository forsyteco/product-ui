/**
 * Shared fixtures for DataTable stories
 */

import type { DataTableColumn } from '../types';

export type User = {
  id: string;
  name: string;
  email: string;
  status: string;
  role: string;
};

export const sampleUsers: User[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', status: 'Active', role: 'Admin' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', status: 'Active', role: 'User' },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com', status: 'Inactive', role: 'User' },
  { id: '4', name: 'Alice Brown', email: 'alice@example.com', status: 'Active', role: 'Manager' },
  { id: '5', name: 'Charlie Wilson', email: 'charlie@example.com', status: 'Inactive', role: 'User' },
  { id: '6', name: 'Diana Prince', email: 'diana@example.com', status: 'Active', role: 'Admin' },
  { id: '7', name: 'Edward Norton', email: 'edward@example.com', status: 'Active', role: 'User' },
  { id: '8', name: 'Fiona Apple', email: 'fiona@example.com', status: 'Inactive', role: 'Manager' },
  { id: '9', name: 'George Lucas', email: 'george@example.com', status: 'Active', role: 'User' },
  { id: '10', name: 'Hannah Montana', email: 'hannah@example.com', status: 'Active', role: 'User' },
  { id: '11', name: 'Ivan Petrov', email: 'ivan@example.com', status: 'Inactive', role: 'Admin' },
  { id: '12', name: 'Julia Roberts', email: 'julia@example.com', status: 'Active', role: 'Manager' },
  { id: '13', name: 'Kevin Hart', email: 'kevin@example.com', status: 'Active', role: 'User' },
  { id: '14', name: 'Laura Palmer', email: 'laura@example.com', status: 'Inactive', role: 'User' },
  { id: '15', name: 'Mike Tyson', email: 'mike@example.com', status: 'Active', role: 'Manager' },
  { id: '16', name: 'Nancy Drew', email: 'nancy@example.com', status: 'Active', role: 'User' },
  { id: '17', name: 'Oscar Wilde', email: 'oscar@example.com', status: 'Inactive', role: 'Admin' },
  { id: '18', name: 'Paula Abdul', email: 'paula@example.com', status: 'Active', role: 'Manager' },
  { id: '19', name: 'Quinn Hughes', email: 'quinn@example.com', status: 'Active', role: 'User' },
  { id: '20', name: 'Rachel Green', email: 'rachel@example.com', status: 'Inactive', role: 'User' },
  { id: '21', name: 'Steve Rogers', email: 'steve@example.com', status: 'Active', role: 'Admin' },
  { id: '22', name: 'Tina Turner', email: 'tina@example.com', status: 'Active', role: 'Manager' },
  { id: '23', name: 'Uma Thurman', email: 'uma@example.com', status: 'Inactive', role: 'User' },
  { id: '24', name: 'Victor Hugo', email: 'victor@example.com', status: 'Active', role: 'User' },
  { id: '25', name: 'Wendy Darling', email: 'wendy@example.com', status: 'Active', role: 'Manager' },
];

// Extract all unique emails from sampleUsers for filter values
const allEmails = sampleUsers.map((user) => user.email);

export const userColumns: DataTableColumn<User>[] = [
  { id: 'name', header: 'Name', accessorKey: 'name', sortable: true },
  { id: 'email', header: 'Email', accessorKey: 'email', sortable: true, filterable: true, filterValues: allEmails },
  { id: 'status', header: 'Status', accessorKey: 'status', filterable: true, filterValues: ['Active', 'Inactive'] },
  { id: 'role', header: 'Role', accessorKey: 'role', filterable: true, filterValues: ['Admin', 'Manager', 'User'] },
];

export const userColumnsWithSortAndFilter: DataTableColumn<User>[] = [
  { id: 'name', header: 'Name', accessorKey: 'name', sortable: true },
  { id: 'email', header: 'Email', accessorKey: 'email', sortable: true, filterable: true, filterValues: allEmails },
  { id: 'status', header: 'Status', accessorKey: 'status', sortable: true, filterable: true, filterValues: ['Active', 'Inactive'] },
  { id: 'role', header: 'Role', accessorKey: 'role', sortable: true, filterable: true, filterValues: ['Admin', 'Manager', 'User'] },
];

export type UserExpandedData = {
  bio: string;
  joinDate: string;
  lastLogin: string;
  projects: string[];
};

export const getExpandedUserData = (row: User, rowId: string): Promise<UserExpandedData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        bio: `${row.name} is a dedicated ${row.role.toLowerCase()} who has been contributing to the team since joining. Known for their expertise in various projects and collaborative spirit.`,
        joinDate: `January ${2020 + parseInt(rowId, 10) % 5}`,
        lastLogin: row.status === 'Active' ? 'Today at 9:30 AM' : '3 days ago',
        projects: [
          'Project Alpha',
          'Dashboard Redesign',
          `${row.name.split(' ')[0]}'s Initiative`,
          'Q4 Planning',
        ].slice(0, 2 + parseInt(rowId, 10) % 3),
      });
    }, 300);
  });
};
