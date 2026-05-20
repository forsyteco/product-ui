import { Copy } from 'lucide-react';
import { clsx } from 'clsx';
import styles from './data-table.module.css';

export type CopyableCellProps = Readonly<{
  value: string;
}>;

export function CopyableCell({ value }: CopyableCellProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(value);
  };

  return (
    <span className={clsx(styles['copy-group'])}>
      <span className={styles['copy-value']}>{value}</span>
      <button
        onClick={handleCopy}
        className={clsx(styles['copy-button'])}
        aria-label="Copy to clipboard"
      >
        <Copy className={styles['copy-icon']} />
      </button>
    </span>
  );
}
