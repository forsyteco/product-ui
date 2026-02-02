import type { ReactNode } from 'react';

export type EmptyStateProps = {
  children?: ReactNode;
  colSpan: number;
};

function EmptyState({ children, colSpan }: EmptyStateProps) {
  return (
    <tr>
      <td colSpan={colSpan} className="px-4 py-12 text-center text-muted-foreground">
        {children || 'No data available'}
      </td>
    </tr>
  );
}

export default EmptyState;
