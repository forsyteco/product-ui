/**
 * Constraint type for rows that have an email field
 */
import styles from './data-table.module.css';

type WithEmail = { email: string };

export type NameCellProps<TData extends WithEmail = WithEmail> = Readonly<{
  /** The name to display */
  value: string;
  /** The row data containing the email */
  row: TData;
}>;

/**
 * A cell renderer component that displays a person's name and email.
 *
 * Top line: Person's name with medium font weight
 * Bottom line: Email address in smaller, muted text
 *
 * @example
 * // In column definition:
 * { id: 'name', header: 'Name', accessorKey: 'name', cell: NameCell }
 */
export function NameCell<TData extends WithEmail>({ value, row }: NameCellProps<TData>) {
  return (
    <div className={styles.nameWrap}>
      <span className={styles.nameValue}>{value}</span>
      <span className={styles.nameEmail}>{row.email}</span>
    </div>
  );
}

