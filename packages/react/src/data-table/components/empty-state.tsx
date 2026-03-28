import type { ReactNode } from 'react';
import styles from './data-table.module.css';

export type EmptyStateProps = Readonly<{
  children?: ReactNode;
  colSpan: number;
}>;

function EmptyState({ children, colSpan }: EmptyStateProps) {
  return (
    <tr>
      <td colSpan={colSpan} className={styles.emptyCell}>
        {children || 'No data available'}
      </td>
    </tr>
  );
}

export { EmptyState };
