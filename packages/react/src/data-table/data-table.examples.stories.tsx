import { useState, useMemo } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import DataTable from './data-table';
import { ROW_INTERACTION } from './constants';
import type { DataTableColumn, SortState, FilterState } from './types';
import { queryData } from './stories/mock-data-service';
import DateCell from './components/date-cell';
import NameCell from './components/name-cell';
import RiskLevelCell from './components/risk-level-cell';
import CountryCell from './components/country-cell';
import CopyableCell from './components/copyable-cell';

const meta = {
  title: 'Components/DataTable/Examples',
  component: DataTable,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============ Policies Example ============

type Policy = {
  id: string;
  name: string;
  type: string;
  created: string;
  lastUpdated: string;
  version: string;
  author: string;
};

const policiesData: Policy[] = [
  { id: '1', name: 'Firm Wide Risk Policy', type: 'Active', created: '2025-06-25', lastUpdated: '2025-07-17', version: 'v8.0', author: 'Jane Pritchard' },
  { id: '2', name: 'Sanctions Policy Update', type: 'Active', created: '2025-07-03', lastUpdated: '2025-07-12', version: 'v7.0', author: 'Tracey Longbottom' },
  { id: '3', name: 'Anti-Money Laundering Policy', type: 'Active', created: '2025-04-15', lastUpdated: '2025-05-02', version: 'v10.0', author: 'Jane Pritchard' },
  { id: '4', name: 'Client Due Diligence Policy', type: 'Active', created: '2025-02-26', lastUpdated: '2025-03-14', version: 'v12.0', author: 'Jane Pritchard' },
  { id: '5', name: 'Lexcel Policy', type: 'Active', created: '2025-01-28', lastUpdated: '2025-02-02', version: 'v13.0', author: 'Tracey Longbottom' },
  { id: '6', name: 'CQS Policy', type: 'Active', created: '2025-01-05', lastUpdated: '2025-01-21', version: 'v13.0', author: 'Tracey Longbottom' },
  { id: '7', name: 'Data Protection Policy', type: 'Active', created: '2024-12-10', lastUpdated: '2025-01-05', version: 'v5.0', author: 'Jane Pritchard' },
  { id: '8', name: 'Conflict of Interest Policy', type: 'Active', created: '2024-11-15', lastUpdated: '2024-12-20', version: 'v4.0', author: 'Tracey Longbottom' },
  { id: '9', name: 'Information Security Policy', type: 'Active', created: '2024-10-22', lastUpdated: '2024-11-30', version: 'v6.0', author: 'Jane Pritchard' },
  { id: '10', name: 'Business Continuity Policy', type: 'Draft', created: '2024-09-18', lastUpdated: '2024-10-15', version: 'v2.0', author: 'Tracey Longbottom' },
  { id: '11', name: 'Complaints Handling Policy', type: 'Active', created: '2024-08-05', lastUpdated: '2024-09-10', version: 'v3.0', author: 'Jane Pritchard' },
  { id: '12', name: 'Staff Training Policy', type: 'Active', created: '2024-07-12', lastUpdated: '2024-08-20', version: 'v4.0', author: 'Tracey Longbottom' },
  { id: '13', name: 'File Management Policy', type: 'Archived', created: '2024-06-01', lastUpdated: '2024-07-05', version: 'v2.0', author: 'Jane Pritchard' },
  { id: '14', name: 'Client Communication Policy', type: 'Active', created: '2024-05-20', lastUpdated: '2024-06-25', version: 'v5.0', author: 'Tracey Longbottom' },
  { id: '15', name: 'Fee Transparency Policy', type: 'Active', created: '2024-04-08', lastUpdated: '2024-05-15', version: 'v3.0', author: 'Jane Pritchard' },
  { id: '16', name: 'Remote Working Policy', type: 'Active', created: '2024-03-15', lastUpdated: '2024-04-20', version: 'v2.0', author: 'Tracey Longbottom' },
  { id: '17', name: 'Equal Opportunities Policy', type: 'Active', created: '2024-02-28', lastUpdated: '2024-03-30', version: 'v4.0', author: 'Jane Pritchard' },
  { id: '18', name: 'Environmental Policy', type: 'Draft', created: '2024-01-10', lastUpdated: '2024-02-15', version: 'v1.0', author: 'Tracey Longbottom' },
];

export const PoliciesTable: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    const [sortState, setSortState] = useState<SortState>(null);
    const [filterState, setFilterState] = useState<FilterState>([]);
    const pageSize = 6;

    // Use mock service to sort, filter, and paginate data
    const result = useMemo(
      () => queryData({ data: policiesData, page, pageSize, sortState, filterState }),
      [page, pageSize, sortState, filterState]
    );

    // Reset to page 1 when filters change
    const handleFilterChange = (newFilterState: FilterState) => {
      setFilterState(newFilterState);
      setPage(1);
    };

    const TypeBadge = ({ value }: { value: string }) => (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
        value === 'Active' ? 'border-green-200 bg-green-50 text-green-700' :
        value === 'Draft' ? 'border-amber-200 bg-amber-50 text-amber-700' :
        'border-gray-200 bg-gray-50 text-gray-600'
      }`}>
        {value}
      </span>
    );

    const columns: DataTableColumn<Policy>[] = [
      { id: 'name', header: 'Name', accessorKey: 'name', sortable: true, width: '250px' },
      { id: 'type', header: 'Type', accessorKey: 'type', cell: TypeBadge, sortable: true, filterable: true, filterValues: ['Active', 'Draft', 'Archived'] },
      { id: 'created', header: 'Created', accessorKey: 'created', cell: DateCell, sortable: true },
      { id: 'lastUpdated', header: 'Last Updated', accessorKey: 'lastUpdated', cell: DateCell, sortable: true },
      { id: 'version', header: 'Version', accessorKey: 'version', sortable: true },
      { id: 'author', header: 'Author', accessorKey: 'author', sortable: true, filterable: true, filterValues: ['Jane Pritchard', 'Tracey Longbottom'] },
    ];

    return (
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold">Policies</h2>
          <p className="text-muted-foreground">Manage your firm's policies advanced versioning and compliance features.</p>
        </div>
        <DataTable
          columns={columns}
          data={result.data}
          getRowId={(row) => row.id}
          page={page}
          pageSize={pageSize}
          totalCount={result.totalCount}
          onPageChange={setPage}
          sortState={sortState}
          onSortChange={setSortState}
          filterState={filterState}
          onFilterChange={handleFilterChange}
          rowInteraction={ROW_INTERACTION.LINK}
          onRowClick={(row) => alert(`Viewing policy: ${row.name}`)}
        />
      </div>
    );
  },
};

// ============ Clients Example ============

type Client = {
  id: string;
  name: string;
  email: string;
  reference: string;
  type: string;
  owner: string;
  country: string;
  created: string;
};

const clientsData: Client[] = [
  { id: '1', name: 'James Morgan', email: 'jp@gmail.com', reference: 'jp', type: 'Individual', owner: 'Kayleigh Smale', country: 'United Kingdom', created: '2026-01-28' },
  { id: '2', name: 'Linda Cooper', email: 'linda@gmail.com', reference: 'linda', type: 'Individual', owner: 'Jane Pritchard', country: 'United Kingdom', created: '2026-01-28' },
  { id: '3', name: 'Jessica', email: 'jessie@gmail.com', reference: 'jessie', type: 'Individual', owner: 'Navya Nataraja', country: 'United Kingdom', created: '2026-01-21' },
  { id: '4', name: 'Mathew Perry', email: 'mat@gmail.com', reference: 'Matt', type: 'Individual', owner: 'Navya Nataraja', country: 'United Kingdom', created: '2026-01-21' },
  { id: '5', name: 'Otter Pritchard', email: 'otter@forsyte.co', reference: 'OT1', type: 'Individual', owner: 'Jane Pritchard', country: 'United Kingdom', created: '2026-01-17' },
  { id: '6', name: 'Skywalker, Leia', email: 'leia@rebel.com', reference: '176', type: 'Individual', owner: 'Jane Pritchard', country: 'United Kingdom', created: '2026-01-15' },
  { id: '7', name: 'Skywalker, Luke', email: 'luke@rebel.com', reference: '175', type: 'Individual', owner: 'Jane Pritchard', country: 'United Kingdom', created: '2026-01-15' },
  { id: '8', name: 'Sophie Laurent', email: 'sophie.laurent@email.com', reference: 'REF-047', type: 'Individual', owner: 'Tracey Longbottom', country: 'France', created: '2024-02-19' },
  { id: '9', name: 'David Mitchell', email: 'david.mitchell@email.com', reference: 'REF-046', type: 'Individual', owner: 'Tracey Longbottom', country: 'United Kingdom', created: '2024-02-18' },
  { id: '10', name: 'Fredrik Larsen', email: 'fredrik.larsen@email.com', reference: 'REF-045', type: 'Individual', owner: 'Tracey Longbottom', country: 'Norway', created: '2024-02-17' },
  { id: '11', name: 'Acme Corporation', email: 'contact@acme.com', reference: 'ACME-001', type: 'Company', owner: 'Jane Pritchard', country: 'United States', created: '2024-02-15' },
  { id: '12', name: 'Global Investments Ltd', email: 'info@globalinv.com', reference: 'GIL-002', type: 'Company', owner: 'Kayleigh Smale', country: 'United Kingdom', created: '2024-02-12' },
  { id: '13', name: 'Maria Santos', email: 'maria.santos@email.com', reference: 'REF-044', type: 'Individual', owner: 'Navya Nataraja', country: 'Spain', created: '2024-02-10' },
  { id: '14', name: 'Hans Weber', email: 'hans.weber@email.com', reference: 'REF-043', type: 'Individual', owner: 'Jane Pritchard', country: 'Germany', created: '2024-02-08' },
  { id: '15', name: 'Emma Thompson', email: 'emma.thompson@email.com', reference: 'REF-042', type: 'Individual', owner: 'Tracey Longbottom', country: 'United Kingdom', created: '2024-02-05' },
  { id: '16', name: 'Tech Solutions Inc', email: 'hello@techsolutions.com', reference: 'TSI-003', type: 'Company', owner: 'Kayleigh Smale', country: 'United States', created: '2024-02-01' },
  { id: '17', name: 'Pierre Dubois', email: 'pierre.dubois@email.com', reference: 'REF-041', type: 'Individual', owner: 'Navya Nataraja', country: 'France', created: '2024-01-28' },
  { id: '18', name: 'Sarah Johnson', email: 'sarah.j@email.com', reference: 'REF-040', type: 'Individual', owner: 'Jane Pritchard', country: 'United Kingdom', created: '2024-01-25' },
  { id: '19', name: 'Nordic Shipping AS', email: 'contact@nordicship.no', reference: 'NS-004', type: 'Company', owner: 'Tracey Longbottom', country: 'Norway', created: '2024-01-22' },
  { id: '20', name: 'Michael Chen', email: 'michael.chen@email.com', reference: 'REF-039', type: 'Individual', owner: 'Kayleigh Smale', country: 'United Kingdom', created: '2024-01-18' },
  { id: '21', name: 'Isabella Romano', email: 'isabella.r@email.com', reference: 'REF-038', type: 'Individual', owner: 'Navya Nataraja', country: 'Italy', created: '2024-01-15' },
  { id: '22', name: 'Robert Williams', email: 'r.williams@email.com', reference: 'REF-037', type: 'Individual', owner: 'Jane Pritchard', country: 'United Kingdom', created: '2024-01-12' },
  { id: '23', name: 'Euro Finance GmbH', email: 'info@eurofinance.de', reference: 'EFG-005', type: 'Company', owner: 'Tracey Longbottom', country: 'Germany', created: '2024-01-08' },
  { id: '24', name: 'Anna Kowalski', email: 'anna.k@email.com', reference: 'REF-036', type: 'Individual', owner: 'Kayleigh Smale', country: 'Poland', created: '2024-01-05' },
];

export const ClientsTable: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    const [sortState, setSortState] = useState<SortState>(null);
    const [filterState, setFilterState] = useState<FilterState>([]);
    const [selectedRowIds, setSelectedRowIds] = useState<Set<string>>(new Set());
    const pageSize = 10;

    // Use mock service to sort, filter, and paginate data
    const result = useMemo(
      () => queryData({ data: clientsData, page, pageSize, sortState, filterState }),
      [page, pageSize, sortState, filterState]
    );

    // Reset to page 1 when filters change
    const handleFilterChange = (newFilterState: FilterState) => {
      setFilterState(newFilterState);
      setPage(1);
    };

    const columns: DataTableColumn<Client>[] = [
      { id: 'name', header: 'Name', accessorKey: 'name', cell: NameCell, sortable: true, width: '200px' },
      { id: 'reference', header: 'Reference', accessorKey: 'reference', cell: CopyableCell, sortable: true },
      { id: 'type', header: 'Type', accessorKey: 'type', sortable: true, filterable: true, filterValues: ['Individual', 'Company'] },
      { id: 'owner', header: 'Owner', accessorKey: 'owner', sortable: true, filterable: true, filterValues: ['Jane Pritchard', 'Kayleigh Smale', 'Navya Nataraja', 'Tracey Longbottom'] },
      { id: 'country', header: 'Residence country', accessorKey: 'country', cell: CountryCell, sortable: true, filterable: true, filterValues: ['United Kingdom', 'France', 'Germany', 'Norway', 'Spain', 'Italy', 'Poland', 'United States'] },
      { id: 'created', header: 'Created', accessorKey: 'created', cell: DateCell, sortable: true },
    ];

    return (
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold">Clients</h2>
          <p className="text-muted-foreground">Manage your clients ({result.totalCount} of {clientsData.length} shown)</p>
        </div>
        <DataTable
          columns={columns}
          data={result.data}
          getRowId={(row) => row.id}
          page={page}
          pageSize={pageSize}
          totalCount={result.totalCount}
          onPageChange={setPage}
          sortState={sortState}
          onSortChange={setSortState}
          filterState={filterState}
          onFilterChange={handleFilterChange}
          rowInteraction={ROW_INTERACTION.SELECTION}
          selectedRowIds={selectedRowIds}
          onSelectionChange={setSelectedRowIds}
        />
      </div>
    );
  },
};

// ============ Risk Assessments Example ============

type RiskAssessment = {
  id: string;
  client: string;
  matter: string;
  riskLevel: string;
  status: string;
  assignedTo: string;
  updated: string;
};

const riskData: RiskAssessment[] = [
  { id: '1', client: 'Otter Pritchard', matter: 'Sale with negative equity', riskLevel: 'Medium', status: 'In progress', assignedTo: 'Rebecca Thomas', updated: '2026-01-29' },
  { id: '2', client: 'James Morgan', matter: 'Property Sale', riskLevel: 'Medium', status: 'In progress', assignedTo: 'Navya Nataraja', updated: '2026-01-28' },
  { id: '3', client: 'Linda Cooper', matter: 'Property Sale', riskLevel: 'Medium', status: 'In progress', assignedTo: 'Kayleigh Smale', updated: '2026-01-28' },
  { id: '4', client: 'Skywalker, Leia', matter: 'Purchase of Millennium Falcon', riskLevel: 'Medium', status: 'Complete', assignedTo: 'Jane Pritchard', updated: '2026-01-28' },
  { id: '5', client: 'Skywalker, Luke', matter: 'Purchase of Millennium Falcon', riskLevel: 'Medium', status: 'In progress', assignedTo: 'Jane Pritchard', updated: '2026-01-28' },
  { id: '6', client: 'Skywalker, Leia', matter: 'Purchase of Millennium Falcon', riskLevel: 'Medium', status: 'In progress', assignedTo: 'Jane Pritchard', updated: '2026-01-27' },
  { id: '7', client: 'Skywalker, Luke', matter: 'Purchase of Millennium Falcon', riskLevel: 'Medium', status: 'In progress', assignedTo: 'Jane Pritchard', updated: '2026-01-27' },
  { id: '8', client: 'Skywalker, Leia', matter: 'Purchase of Millennium Falcon', riskLevel: 'Medium', status: 'In progress', assignedTo: 'Jane Pritchard', updated: '2026-01-23' },
  { id: '9', client: 'Skywalker, Luke', matter: 'Purchase of Millennium Falcon', riskLevel: 'Medium', status: 'In progress', assignedTo: 'Jane Pritchard', updated: '2026-01-23' },
  { id: '10', client: 'Emma Thomson', matter: 'Residential purchase of detached property in the Cotswolds', riskLevel: 'Medium', status: 'In progress', assignedTo: 'Navya Nataraja', updated: '2026-01-23' },
  { id: '11', client: 'Acme Corporation', matter: 'Commercial property acquisition', riskLevel: 'High', status: 'In progress', assignedTo: 'Rebecca Thomas', updated: '2026-01-22' },
  { id: '12', client: 'Global Investments Ltd', matter: 'Portfolio restructuring', riskLevel: 'High', status: 'Not started', assignedTo: 'Jane Pritchard', updated: '2026-01-20' },
  { id: '13', client: 'Sophie Laurent', matter: 'Cross-border property transfer', riskLevel: 'High', status: 'In progress', assignedTo: 'Kayleigh Smale', updated: '2026-01-18' },
  { id: '14', client: 'David Mitchell', matter: 'Remortgage application', riskLevel: 'Low', status: 'Complete', assignedTo: 'Navya Nataraja', updated: '2026-01-15' },
  { id: '15', client: 'Fredrik Larsen', matter: 'International property sale', riskLevel: 'Medium', status: 'In progress', assignedTo: 'Rebecca Thomas', updated: '2026-01-12' },
  { id: '16', client: 'Maria Santos', matter: 'First-time buyer purchase', riskLevel: 'Low', status: 'Complete', assignedTo: 'Jane Pritchard', updated: '2026-01-10' },
  { id: '17', client: 'Hans Weber', matter: 'Commercial lease agreement', riskLevel: 'Medium', status: 'In progress', assignedTo: 'Kayleigh Smale', updated: '2026-01-08' },
  { id: '18', client: 'Tech Solutions Inc', matter: 'Office relocation', riskLevel: 'Low', status: 'Not started', assignedTo: 'Navya Nataraja', updated: '2026-01-05' },
  { id: '19', client: 'Pierre Dubois', matter: 'Investment property purchase', riskLevel: 'Medium', status: 'In progress', assignedTo: 'Rebecca Thomas', updated: '2026-01-02' },
  { id: '20', client: 'Sarah Johnson', matter: 'Property sale chain', riskLevel: 'High', status: 'In progress', assignedTo: 'Jane Pritchard', updated: '2025-12-28' },
  { id: '21', client: 'Nordic Shipping AS', matter: 'Warehouse acquisition', riskLevel: 'Medium', status: 'Complete', assignedTo: 'Kayleigh Smale', updated: '2025-12-22' },
  { id: '22', client: 'Michael Chen', matter: 'Buy-to-let purchase', riskLevel: 'Low', status: 'Complete', assignedTo: 'Navya Nataraja', updated: '2025-12-18' },
  { id: '23', client: 'Isabella Romano', matter: 'Holiday home purchase', riskLevel: 'Medium', status: 'In progress', assignedTo: 'Rebecca Thomas', updated: '2025-12-15' },
  { id: '24', client: 'Euro Finance GmbH', matter: 'Multi-property portfolio', riskLevel: 'High', status: 'Not started', assignedTo: 'Jane Pritchard', updated: '2025-12-10' },
];

export const RiskAssessmentsTable: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    const [sortState, setSortState] = useState<SortState>(null);
    const [filterState, setFilterState] = useState<FilterState>([]);
    const pageSize = 10;

    // Use mock service to sort, filter, and paginate data
    const result = useMemo(
      () => queryData({ data: riskData, page, pageSize, sortState, filterState }),
      [page, pageSize, sortState, filterState]
    );

    // Reset to page 1 when filters change
    const handleFilterChange = (newFilterState: FilterState) => {
      setFilterState(newFilterState);
      setPage(1);
    };

    const StatusBadge = ({ value }: { value: string }) => (
      <span
        className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
          value === 'Complete' ? 'bg-green-100 text-green-800' :
          value === 'In progress' ? 'bg-blue-100 text-blue-800' :
          'bg-gray-100 text-gray-800'
        }`}
      >
        {value}
      </span>
    );

    const columns: DataTableColumn<RiskAssessment>[] = [
      { id: 'client', header: 'Client', accessorKey: 'client', sortable: true },
      { id: 'matter', header: 'Matter', accessorKey: 'matter', width: '300px' },
      { id: 'riskLevel', header: 'Risk level', accessorKey: 'riskLevel', cell: RiskLevelCell, sortable: true, filterable: true, filterValues: ['Low', 'Medium', 'High'] },
      { id: 'status', header: 'Status', accessorKey: 'status', cell: StatusBadge, sortable: true, filterable: true, filterValues: ['In progress', 'Complete', 'Not started'] },
      { id: 'assignedTo', header: 'Assigned to', accessorKey: 'assignedTo', sortable: true, filterable: true, filterValues: ['Jane Pritchard', 'Kayleigh Smale', 'Navya Nataraja', 'Rebecca Thomas'] },
      { id: 'updated', header: 'Updated', accessorKey: 'updated', cell: DateCell, sortable: true },
    ];

    return (
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold">Risk assessments</h2>
          <p className="text-muted-foreground">Manage your risk assessments ({result.totalCount} of {riskData.length} shown)</p>
        </div>
        <DataTable
          columns={columns}
          data={result.data}
          getRowId={(row) => row.id}
          page={page}
          pageSize={pageSize}
          totalCount={result.totalCount}
          onPageChange={setPage}
          sortState={sortState}
          onSortChange={setSortState}
          filterState={filterState}
          onFilterChange={handleFilterChange}
          rowInteraction={ROW_INTERACTION.LINK}
          onRowClick={(row) => alert(`Viewing assessment for: ${row.client}`)}
        />
      </div>
    );
  },
};
