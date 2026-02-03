export type FilterDropdownProps = Readonly<{
    columnId: string;
    filterValues: string[];
    selectedValues: string[];
    onFilterChange: (columnId: string, values: string[]) => void;
}>;
declare function FilterDropdown({ columnId, filterValues, selectedValues, onFilterChange, }: FilterDropdownProps): import("react").JSX.Element;
export default FilterDropdown;
//# sourceMappingURL=filter-dropdown.d.ts.map