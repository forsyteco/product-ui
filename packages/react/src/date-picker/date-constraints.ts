import dayjs from 'dayjs';
import { dateMatchModifiers, type Matcher } from 'react-day-picker';

import { formatDateInput, normalizeSelectedDate } from './date-input';

export type DateConstraintsOptions = {
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Matcher | Matcher[];
  calendarDisabled?: Matcher | Matcher[];
};

export function buildDisabledMatchers({
  minDate,
  maxDate,
  disabledDates,
  calendarDisabled,
}: DateConstraintsOptions): Matcher[] {
  const matchers: Matcher[] = [];

  if (minDate) {
    matchers.push({ before: normalizeSelectedDate(minDate) });
  }

  if (maxDate) {
    matchers.push({ after: normalizeSelectedDate(maxDate) });
  }

  if (disabledDates) {
    matchers.push(...(Array.isArray(disabledDates) ? disabledDates : [disabledDates]));
  }

  if (calendarDisabled) {
    matchers.push(...(Array.isArray(calendarDisabled) ? calendarDisabled : [calendarDisabled]));
  }

  return matchers;
}

export function isDateDisabled(date: Date, matchers: Matcher[]): boolean {
  if (matchers.length === 0) {
    return false;
  }

  return dateMatchModifiers(normalizeSelectedDate(date), matchers);
}

export function getDisabledDateError(
  date: Date,
  { minDate, maxDate, disabledDates, calendarDisabled }: DateConstraintsOptions,
  inputFormat: string
): string | null {
  const normalized = normalizeSelectedDate(date);

  if (minDate && dayjs(normalized).isBefore(normalizeSelectedDate(minDate), 'day')) {
    return `Date must be on or after ${formatDateInput(minDate, inputFormat)}`;
  }

  if (maxDate && dayjs(normalized).isAfter(normalizeSelectedDate(maxDate), 'day')) {
    return `Date must be on or before ${formatDateInput(maxDate, inputFormat)}`;
  }

  const otherMatchers = buildDisabledMatchers({ disabledDates, calendarDisabled });
  if (otherMatchers.length > 0 && isDateDisabled(normalized, otherMatchers)) {
    return 'Date is not available';
  }

  return null;
}
