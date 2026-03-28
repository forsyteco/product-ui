import { Copy } from 'lucide-react';
import { cn } from '../../utils/cn';
import styles from './data-table.module.css';

export type CopyableCellProps = Readonly<{
  value: string;
}>;

export function CopyableCell({ value }: CopyableCellProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(value);
  };

  return (
    <span className={cn(styles.copyGroup)}>
      <span className={styles.copyValue}>{value}</span>
      <button
        onClick={handleCopy}
        className={cn(styles.copyButton)}
        aria-label="Copy to clipboard"
      >
        <Copy className={styles.copyIcon} />
      </button>
    </span>
  );
}
