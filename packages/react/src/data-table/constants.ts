/**
 * Row interaction modes for DataTable
 * Use typed constants instead of magic strings
 */
export const ROW_INTERACTION = {
  /** Checkboxes for multi-select */
  SELECTION: 'selection',
  /** Click row triggers onRowClick callback */
  LINK: 'link',
  /** Not clickable (default) */
  NONE: 'none',
  /** Expandable rows with chevron toggle */
  EXPANDABLE: 'expandable',
} as const;

export type RowInteractionMode =
  (typeof ROW_INTERACTION)[keyof typeof ROW_INTERACTION];
