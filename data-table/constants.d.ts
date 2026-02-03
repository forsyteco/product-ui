/**
 * Row interaction modes for DataTable
 * Use typed constants instead of magic strings
 */
export declare const ROW_INTERACTION: {
    /** Checkboxes for multi-select */
    readonly SELECTION: "selection";
    /** Click row triggers onRowClick callback */
    readonly LINK: "link";
    /** Not clickable (default) */
    readonly NONE: "none";
    /** Expandable rows with chevron toggle */
    readonly EXPANDABLE: "expandable";
};
export type RowInteractionMode = (typeof ROW_INTERACTION)[keyof typeof ROW_INTERACTION];
//# sourceMappingURL=constants.d.ts.map