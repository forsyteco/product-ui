import { clsx } from 'clsx';

import styles from './address-form-example.module.css';

type AddressManualEntryLinkProps = {
  onClick: () => void;
  className?: string;
};

export function AddressManualEntryLink({ onClick, className }: AddressManualEntryLinkProps) {
  return (
    <div className={clsx(styles.manualEntryPrompt, className)}>
      <button type="button" className={styles.manualEntryLink} onClick={onClick}>
        Enter manually
      </button>
    </div>
  );
}
