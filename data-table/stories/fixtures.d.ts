import { DataTableColumn } from '../types';
export type User = {
    id: string;
    name: string;
    email: string;
    status: string;
    role: string;
};
export declare const sampleUsers: User[];
export declare const userColumns: DataTableColumn<User>[];
export declare const userColumnsWithSortAndFilter: DataTableColumn<User>[];
export type UserExpandedData = {
    bio: string;
    joinDate: string;
    lastLogin: string;
    projects: string[];
};
export declare const getExpandedUserData: (row: User, rowId: string) => Promise<UserExpandedData>;
//# sourceMappingURL=fixtures.d.ts.map