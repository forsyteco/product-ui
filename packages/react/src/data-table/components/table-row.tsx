import type { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import { clsx } from 'clsx';
import { ROW_INTERACTION, type RowInteractionMode } from '../constants';
import type { DataTableColorConfig } from '../types';
import { Checkbox } from '../../checkbox';
import { IconButton } from '../../icon-button';
import styles from './data-table.module.css';

export type TableRowProps<TData> = Readonly<{
  row: TData;
  rowId: string;
  rowInteraction?: RowInteractionMode;
  isSelected?: boolean;
  onRowClick?: (row: TData) => void;
  onSelectionChange?: (rowId: string, selected: boolean) => void;
  children: ReactNode;
  // Expandable row props
  isExpanded?: boolean;
  onExpandRow?: (row: TData, rowId: string) => void;
  expandedContentId?: string;
  colorConfig?: DataTableColorConfig;
}>;

function TableRow<TData>({
  row,
  rowId,
  rowInteraction = ROW_INTERACTION.NONE,
  isSelected = false,
  onRowClick,
  onSelectionChange,
  children,
  isExpanded = false,
  onExpandRow,
  expandedContentId,
  colorConfig,
}: TableRowProps<TData>) {
  const isClickable = rowInteraction === ROW_INTERACTION.LINK;
  const isSelectable = rowInteraction === ROW_INTERACTION.SELECTION;
  const isExpandable = rowInteraction === ROW_INTERACTION.EXPANDABLE;

  const handleClick = () => {
    if (isClickable && onRowClick) {
      onRowClick(row);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTableRowElement>) => {
    if (!isClickable || !onRowClick) {
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onRowClick(row);
    }
  };

  const handleCheckboxChange = () => {
    if (onSelectionChange) {
      onSelectionChange(rowId, !isSelected);
    }
  };

  const handleExpandClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onExpandRow) {
      onExpandRow(row, rowId);
    }
  };

  // Determine the row background color based on selection state and colorConfig
  const getRowBackgroundColor = () => {
    if (isSelected && colorConfig?.selectedRowBackground) {
      return colorConfig.selectedRowBackground;
    }
    if (colorConfig?.rowBackground) {
      return colorConfig.rowBackground;
    }
    return undefined;
  };

  const rowStyle = getRowBackgroundColor()
    ? { backgroundColor: getRowBackgroundColor() }
    : undefined;

  return (
    <tr
      role="row"
      tabIndex={isClickable ? 0 : undefined}
      className={clsx(
        styles.row,
        isClickable && styles['row-clickable'],
        isSelectable && styles['row-selectable'],
        isSelected && !colorConfig?.selectedRowBackground && styles['row-selected'],
        isExpanded && styles['row-expanded']
      )}
      style={rowStyle}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {isExpandable && (
        <td className={styles['expand-cell']}>
          <IconButton
            icon={ChevronRight}
            variant="ghost"
            size="small"
            onClick={handleExpandClick}
            aria-expanded={isExpanded}
            aria-controls={isExpanded ? expandedContentId : undefined}
            aria-label="Expand row"
            className={clsx(
              styles['expand-button'],
              isExpanded && styles['expand-button-open']
            )}
          />
        </td>
      )}
      {isSelectable && (
        <td className={styles['select-cell']}>
          <Checkbox
            checked={isSelected}
            onChange={handleCheckboxChange}
            onClick={(e) => e.stopPropagation()}
            aria-label="Select row"
            className={styles['row-checkbox']}
            checkedBackground={colorConfig?.headerIconActiveBackground}
            checkedForeground={colorConfig?.headerIconActiveForeground}
          />
        </td>
      )}
      {children}
    </tr>
  );
}

export { TableRow };
