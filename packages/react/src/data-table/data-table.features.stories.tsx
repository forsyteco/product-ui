import { useState, useMemo } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { DataTable } from "./data-table";
import { ROW_INTERACTION } from "./constants";
import type { DataTableColumn, SortState, FilterState } from "./types";
import { queryData } from "./stories/mock-data-service";
import { Button } from "../button";
import {
	type User,
	type UserExpandedData,
	sampleUsers,
	userColumns,
	userColumnsWithSortAndFilter,
	getExpandedUserData,
} from "./stories/fixtures";

const meta = {
	title: "Components/DataTable/Features",
	component: DataTable,
	parameters: {
		layout: "padded",
	},
	argTypes: {
		pageSize: {
			control: { type: "number" },
			description: "Items per page",
		},
	},
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

type StoryArgs = Readonly<{ pageSize?: number }>;

function SortingStory({ pageSize: argPageSize }: StoryArgs) {
	const [page, setPage] = useState(1);
	const [sortState, setSortState] = useState<SortState>({
		columnId: "name",
		direction: "asc",
	});
	const pageSize = argPageSize ?? 10;

	const result = useMemo(
		() => queryData({ data: sampleUsers, page, pageSize, sortState }),
		[page, pageSize, sortState],
	);

	return (
		<div className="sb-stack-4">
			<p className="sb-text-sm sb-muted-text">
				Click on "Name" or "Email" column headers to sort. Current sort:{" "}
				{sortState ? `${sortState.columnId} (${sortState.direction})` : "none"}
			</p>
			<DataTable
				columns={userColumns}
				data={result.data}
				getRowId={(row) => row.id}
				page={page}
				pageSize={pageSize}
				totalCount={result.totalCount}
				onPageChange={setPage}
				sortState={sortState}
				onSortChange={setSortState}
			/>
		</div>
	);
}

export const Sorting: Story = {
	render: (args) => <SortingStory pageSize={args.pageSize} />,
	args: { pageSize: 10 },
};

function FilteringStory({ pageSize: argPageSize }: StoryArgs) {
	const [page, setPage] = useState(1);
	const [filterState, setFilterState] = useState<FilterState>([]);
	const pageSize = argPageSize ?? 10;

	const result = useMemo(
		() => queryData({ data: sampleUsers, page, pageSize, filterState }),
		[page, pageSize, filterState],
	);

	const handleFilterChange = (newFilterState: FilterState) => {
		setFilterState(newFilterState);
		setPage(1);
	};

	return (
		<div className="sb-stack-4">
			<p className="sb-text-sm sb-muted-text">
				Click on the filter icon in "Email", "Status" or "Role" columns to
				filter. Active filters:{" "}
				{filterState.length > 0
					? filterState
							.map((f) => `${f.columnId}: ${f.values.join(", ")}`)
							.join(" | ")
					: "none"}
				{filterState.length > 0 &&
					` (showing ${result.totalCount} of ${sampleUsers.length} users)`}
			</p>
			<p>
				Note: The "Email" column has a long list of filter values, but "Select
				All" is disabled to demonstrate handling large filter sets.
			</p>
			<DataTable
				columns={userColumns}
				data={result.data}
				getRowId={(row) => row.id}
				page={page}
				pageSize={pageSize}
				totalCount={result.totalCount}
				onPageChange={setPage}
				filterState={filterState}
				onFilterChange={handleFilterChange}
			/>
		</div>
	);
}

export const Filtering: Story = {
	render: (args) => <FilteringStory pageSize={args.pageSize} />,
	args: { pageSize: 10 },
};

function RowSelectionStory({ pageSize: argPageSize }: StoryArgs) {
	const [page, setPage] = useState(1);
	const [selectedRowIds, setSelectedRowIds] = useState<Set<string>>(
		new Set(["1", "3"]),
	);
	const pageSize = argPageSize ?? 10;

	const result = useMemo(
		() => queryData({ data: sampleUsers, page, pageSize }),
		[page, pageSize],
	);

	return (
		<div className="sb-stack-4">
			<p className="sb-text-sm sb-muted-text">
				Select rows using checkboxes. Selected:{" "}
				{Array.from(selectedRowIds).join(", ") || "none"}
			</p>
			<DataTable
				columns={userColumns}
				data={result.data}
				getRowId={(row) => row.id}
				page={page}
				pageSize={pageSize}
				totalCount={result.totalCount}
				onPageChange={setPage}
				rowInteraction={ROW_INTERACTION.SELECTION}
				selectedRowIds={selectedRowIds}
				onSelectionChange={setSelectedRowIds}
			/>
		</div>
	);
}

export const RowSelection: Story = {
	render: (args) => <RowSelectionStory pageSize={args.pageSize} />,
	args: { pageSize: 10 },
};

function ClickableRowsStory({ pageSize: argPageSize }: StoryArgs) {
	const [page, setPage] = useState(1);
	const [clickedRow, setClickedRow] = useState<string | null>(null);
	const pageSize = argPageSize ?? 10;

	const result = useMemo(
		() => queryData({ data: sampleUsers, page, pageSize }),
		[page, pageSize],
	);

	return (
		<div className="sb-stack-4">
			<p className="sb-text-sm sb-muted-text">
				Click on any row to trigger an action. Last clicked:{" "}
				{clickedRow || "none"}
			</p>
			<DataTable
				columns={userColumns}
				data={result.data}
				getRowId={(row) => row.id}
				page={page}
				pageSize={pageSize}
				totalCount={result.totalCount}
				onPageChange={setPage}
				rowInteraction={ROW_INTERACTION.LINK}
				onRowClick={(row) => setClickedRow(`${row.name} (${row.email})`)}
			/>
		</div>
	);
}

export const ClickableRows: Story = {
	render: (args) => <ClickableRowsStory pageSize={args.pageSize} />,
	args: { pageSize: 10 },
};

function PaginationStory({ pageSize: argPageSize }: StoryArgs) {
	const [page, setPage] = useState(1);
	const pageSize = argPageSize ?? 10;

	const result = useMemo(
		() => queryData({ data: sampleUsers, page, pageSize }),
		[page, pageSize],
	);

	return (
		<div className="sb-stack-4">
			<p className="sb-text-sm sb-muted-text">
				Navigate through pages. Current page: {page} of {result.totalPages}
			</p>
			<DataTable
				columns={userColumns}
				data={result.data}
				getRowId={(row) => row.id}
				page={page}
				pageSize={pageSize}
				totalCount={result.totalCount}
				onPageChange={setPage}
			/>
		</div>
	);
}

export const Pagination: Story = {
	render: (args) => <PaginationStory pageSize={args.pageSize} />,
	args: { pageSize: 10 },
};

function LoadingStory({ pageSize: argPageSize }: StoryArgs) {
	const [page, setPage] = useState(1);
	const pageSize = argPageSize ?? 10;

	return (
		<DataTable
			columns={userColumns}
			data={[]}
			getRowId={(row) => row.id}
			page={page}
			pageSize={pageSize}
			totalCount={0}
			onPageChange={setPage}
			loading={true}
		/>
	);
}

export const Loading: Story = {
	render: (args) => <LoadingStory pageSize={args.pageSize} />,
	args: { pageSize: 10 },
};

function EmptyStateStory({ pageSize: argPageSize }: StoryArgs) {
	const [page, setPage] = useState(1);
	const pageSize = argPageSize ?? 10;

	return (
		<DataTable
			columns={userColumns}
			data={[]}
			getRowId={(row) => row.id}
			page={page}
			pageSize={pageSize}
			totalCount={0}
			onPageChange={setPage}
			emptyState={
				<div className="sb-text-center sb-py-8">
					<p className="sb-text-lg sb-font-medium sb-foreground-text">No users found</p>
					<p className="sb-text-sm sb-muted-text sb-mt-1">
						Try adjusting your filters or add a new user.
					</p>
				</div>
			}
		/>
	);
}

export const EmptyState: Story = {
	render: (args) => <EmptyStateStory pageSize={args.pageSize} />,
	args: { pageSize: 10 },
};

function SortingAndFilteringStory({ pageSize: argPageSize }: StoryArgs) {
	const [page, setPage] = useState(1);
	const [sortState, setSortState] = useState<SortState>({
		columnId: "name",
		direction: "asc",
	});
	const [filterState, setFilterState] = useState<FilterState>([]);
	const pageSize = argPageSize ?? 10;

	const result = useMemo(
		() =>
			queryData({ data: sampleUsers, page, pageSize, sortState, filterState }),
		[page, pageSize, sortState, filterState],
	);

	const handleFilterChange = (newFilterState: FilterState) => {
		setFilterState(newFilterState);
		setPage(1);
	};

	return (
		<div className="sb-stack-4">
			<div className="sb-text-sm sb-muted-text sb-stack-1">
				<p>
					<strong>Sort:</strong>{" "}
					{sortState
						? `${sortState.columnId} (${sortState.direction})`
						: "none"}
				</p>
				<p>
					<strong>Filter:</strong>{" "}
					{filterState.length > 0
						? filterState
								.map((f) => `${f.columnId}: ${f.values.join(", ")}`)
								.join(" | ")
						: "none"}
				</p>
				<p>
					<strong>Results:</strong> {result.totalCount} of {sampleUsers.length}{" "}
					users
				</p>
			</div>
			<DataTable
				columns={userColumnsWithSortAndFilter}
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
			/>
		</div>
	);
}

export const SortingAndFiltering: Story = {
	render: (args) => <SortingAndFilteringStory pageSize={args.pageSize} />,
	args: { pageSize: 10 },
};

type UserExpandedContentProps = Readonly<{
	row: User;
	rowId: string;
	data: UserExpandedData | null;
	loading: boolean;
}>;

// Expanded row content component
function UserExpandedContent({
	row,
	rowId,
	data,
	loading,
}: UserExpandedContentProps) {
	return (
		<div
			className="sb-opacity-transition"
			style={{ opacity: loading ? 0.5 : 1 }}
		>
			{loading && (
				<div className="sb-row-center sb-py-8">
					<div className="sb-row sb-gap-3">
						<div className="sb-spinner-5 sb-spinner-ring" />
						<span className="sb-text-sm sb-muted-text">
							Loading details for {row.name}...
						</span>
					</div>
				</div>
			)}
			{!loading && data && (
				<div className="sb-stack-4 sb-p-4">
					<div className="sb-row-start-between">
						<div className="sb-stack-3">
							<div>
								<h3 className="sb-text-lg sb-font-semibold sb-foreground-text">
									{row.name}
								</h3>
								<p className="sb-text-sm sb-muted-text">
									{row.email} &bull; {row.role}
								</p>
							</div>
							<div className="sb-stack-1">
								<p className="sb-text-sm">
									<strong>Bio:</strong> {data.bio}
								</p>
								<p className="sb-text-sm">
									<strong>Member since:</strong> {data.joinDate}
								</p>
								<p className="sb-text-sm">
									<strong>Last login:</strong> {data.lastLogin}
								</p>
							</div>
							<div>
								<p className="sb-text-sm sb-font-medium sb-mb-1">Projects:</p>
								<div className="sb-row sb-flex-wrap sb-gap-1">
									{data.projects.map((project) => (
										<span key={project} className="sb-tag-accent">
											{project}
										</span>
									))}
								</div>
							</div>
						</div>
						<div className="sb-row sb-gap-2">
							<Button
								type="button"
								variant="default"
								onClick={() => alert(`Message sent to ${row.name}`)}
							>
								Message
							</Button>
							<Button
								type="button"
								onClick={() =>
									alert(`Viewing profile for ${row.name} (ID: ${rowId})`)
								}
							>
								View Profile
							</Button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

function ExpandableRowsStory({ pageSize: argPageSize }: StoryArgs) {
	const [page, setPage] = useState(1);
	const pageSize = argPageSize ?? 10;

	const result = useMemo(
		() => queryData({ data: sampleUsers, page, pageSize }),
		[page, pageSize],
	);

	return (
		<div className="sb-stack-4">
			<div className="sb-text-sm sb-muted-text sb-stack-1">
				<p>Click on any row to expand and see user details.</p>
				<p>Only one row can be expanded at a time. Click again to collapse.</p>
			</div>
			<DataTable
				columns={userColumns}
				data={result.data}
				getRowId={(row) => row.id}
				page={page}
				pageSize={pageSize}
				totalCount={result.totalCount}
				onPageChange={setPage}
				rowInteraction={ROW_INTERACTION.EXPANDABLE}
				expandedRowContent={UserExpandedContent}
				getExpandedRowData={getExpandedUserData}
			/>
		</div>
	);
}

export const ExpandableRows: Story = {
	render: (args) => <ExpandableRowsStory pageSize={args.pageSize} />,
	args: { pageSize: 10 },
};

type StatusBadgeProps = Readonly<{ value: string }>;

function StatusBadge({ value }: StatusBadgeProps) {
	const toneClass =
		value === "Active" ? "sb-story-badge-active" : "sb-story-badge-inactive";
	return (
		<span className={`sb-pill ${toneClass}`}>
			{value}
		</span>
	);
}

const customCellColumns: DataTableColumn<User>[] = [
	{ id: "name", header: "Name", accessorKey: "name", sortable: true },
	{ id: "email", header: "Email", accessorKey: "email" },
	{
		id: "status",
		header: "Status",
		accessorKey: "status",
		cell: StatusBadge,
		sortable: true,
	},
	{ id: "role", header: "Role", accessorKey: "role" },
];

function CustomCellRendererStory({ pageSize: argPageSize }: StoryArgs) {
	const [page, setPage] = useState(1);
	const [sortState, setSortState] = useState<SortState>(null);
	const pageSize = argPageSize ?? 10;

	const result = useMemo(
		() => queryData({ data: sampleUsers, page, pageSize, sortState }),
		[page, pageSize, sortState],
	);

	return (
		<div className="sb-stack-4">
			<p className="sb-text-sm sb-muted-text">
				The "Status" column uses a custom cell renderer to display badges.
				Sorting still works with custom renderers.
			</p>
			<DataTable
				columns={customCellColumns}
				data={result.data}
				getRowId={(row) => row.id}
				page={page}
				pageSize={pageSize}
				totalCount={result.totalCount}
				onPageChange={setPage}
				sortState={sortState}
				onSortChange={setSortState}
			/>
		</div>
	);
}

export const CustomCellRenderer: Story = {
	render: (args) => <CustomCellRendererStory pageSize={args.pageSize} />,
	args: { pageSize: 10 },
};
