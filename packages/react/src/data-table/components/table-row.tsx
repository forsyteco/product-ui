import type { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '../../utils/tailwind';
import { ROW_INTERACTION, type RowInteractionMode } from '../constants';
import Checkbox from '../../checkbox';
import IconButton from '../../icon-button';

export type TableRowProps<TData> = {
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
};

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
}: TableRowProps<TData>) {
  const isClickable = rowInteraction === ROW_INTERACTION.LINK;
  const isSelectable = rowInteraction === ROW_INTERACTION.SELECTION;
  const isExpandable = rowInteraction === ROW_INTERACTION.EXPANDABLE;

  const handleClick = () => {
    if (isClickable && onRowClick) {
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

  return (
    <tr
      role="row"
      className={cn(
        'border-b border-border last:border-b-0 transition-colors duration-300',
        isClickable && 'cursor-pointer hover:bg-muted/50',
        isSelectable && 'hover:bg-muted/30',
        isSelected && 'bg-accent/10',
        isExpanded && 'border-b-0'
      )}
      onClick={handleClick}
    >
      {isExpandable && (
        <td className="w-10 px-4 py-3">
          <IconButton
            icon={ChevronRight}
            variant="ghost"
            size="small"
            onClick={handleExpandClick}
            aria-expanded={isExpanded}
            aria-controls={isExpanded ? expandedContentId : undefined}
            aria-label="Expand row"
            className={cn(
              'h-6 w-6 [&_svg]:transition-transform [&_svg]:duration-300',
              isExpanded && '[&_svg]:rotate-90'
            )}
          />
        </td>
      )}
      {isSelectable && (
        <td className="px-4 py-3">
          <Checkbox
            checked={isSelected}
            onChange={handleCheckboxChange}
            onClick={(e) => e.stopPropagation()}
            aria-label="Select row"
            className="h-3 w-3"
          />
        </td>
      )}
      {children}
    </tr>
  );
}

export default TableRow;
