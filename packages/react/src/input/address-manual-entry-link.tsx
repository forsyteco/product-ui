import { clsx } from 'clsx';

import styles from './address-form-example.module.css';

const MANUAL_ENTRY_ACTIVE_LABEL = "Can't find the correct address? Enter it manually";

type AddressManualEntryLinkProps = {
  searchActive: boolean;
  onClick: () => void;
  className?: string;
};

export function AddressManualEntryLink({ searchActive, onClick, className }: AddressManualEntryLinkProps) {
  return (
    <div className={clsx(styles.manualEntryPrompt, className)}>
      <button type="button" className={styles.manualEntryLink} onClick={onClick}>
        {searchActive ? MANUAL_ENTRY_ACTIVE_LABEL : 'Enter manually'}
      </button>
    </div>
  );
}
