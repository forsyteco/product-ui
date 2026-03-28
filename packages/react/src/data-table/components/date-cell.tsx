import dayjs from 'dayjs';
import { Clock } from 'lucide-react';
import { cn } from '../../utils/cn';
import styles from './data-table.module.css';

export type DateCellProps = Readonly<{
  /** The date to display */
  value: Date | string;
  /** Optional format string to override default (uses dayjs format tokens) */
  dateFormat?: string;
}>;

/**
 * Calculates the relative time string for a date
 */
function getRelativeTime(date: dayjs.Dayjs, now: dayjs.Dayjs): string {
  const startOfToday = now.startOf('day');
  const startOfDate = date.startOf('day');
  const diffDays = startOfDate.diff(startOfToday, 'day');

  if (diffDays === 0) {
    return 'today';
  }

  if (diffDays === -1) {
    return 'yesterday';
  }

  if (diffDays < 0) {
    return `${Math.abs(diffDays)} days ago`;
  }

  return `in ${diffDays} days`;
}

/**
 * A cell renderer component that displays a formatted date with relative time.
 *
 * Top line: Formatted date (default: DD/MM/YYYY British format)
 * Bottom line: Relative time with clock icon (e.g., "today", "yesterday", "5 days ago", "in 3 days")
 */
export function DateCell({ value, dateFormat = 'DD/MM/YYYY' }: DateCellProps) {
  const date = dayjs(value);
  const now = dayjs();

  const formattedDate = date.format(dateFormat);
  const relativeTime = getRelativeTime(date, now);

  return (
    <div className={styles.dateWrap}>
      <span className={styles.dateMain}>{formattedDate}</span>
      <span className={cn(styles.dateMeta)}>
        <Clock className={styles.clockIcon} />
        {relativeTime}
      </span>
    </div>
  );
}

