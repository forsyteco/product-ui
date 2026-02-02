import dayjs from 'dayjs';
import { Clock } from 'lucide-react';
import { cn } from '../../utils/tailwind';

export type DateCellProps = {
  /** The date to display */
  value: Date | string;
  /** Optional format string to override default (uses dayjs format tokens) */
  dateFormat?: string;
};

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
function DateCell({ value, dateFormat = 'DD/MM/YYYY' }: DateCellProps) {
  const date = dayjs(value);
  const now = dayjs();

  const formattedDate = date.format(dateFormat);
  const relativeTime = getRelativeTime(date, now);

  return (
    <div className="flex flex-col">
      <span className="text-foreground">{formattedDate}</span>
      <span className={cn('flex items-center gap-1 text-xs text-muted-foreground')}>
        <Clock className="h-3 w-3" />
        {relativeTime}
      </span>
    </div>
  );
}

export default DateCell;
