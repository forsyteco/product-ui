import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const;

type DateComponents = {
  day: number;
  month: number;
  year: number;
};

export type DateInputResult =
  | { valid: true; date?: Date }
  | { valid: false; error: string };

function startOfDay(date: dayjs.Dayjs) {
  return date.startOf('day').toDate();
}

function normalizeTwoDigitYear(value: number) {
  return value >= 50 ? 1900 + value : 2000 + value;
}

function daysInMonth(month: number, year: number) {
  return dayjs(`${year}-${String(month).padStart(2, '0')}-01`).daysInMonth();
}

function buildDateFromComponents({ day, month, year }: DateComponents) {
  const parsed = dayjs(
    `${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}/${String(year).padStart(4, '0')}`,
    'DD/MM/YYYY',
    true
  );

  return parsed.isValid() ? startOfDay(parsed) : undefined;
}

function extractDateComponents(trimmed: string, inputFormat: string): DateComponents | null {
  const digitsOnly = trimmed.replace(/\D/g, '');

  if (inputFormat === 'DD/MM/YYYY' || inputFormat === 'DD/MM/YY') {
    const slashMatch = trimmed.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2,4})$/);
    if (slashMatch) {
      const yearToken = slashMatch[3];
      const year =
        yearToken.length === 2 ? normalizeTwoDigitYear(Number(yearToken)) : Number(yearToken);

      return {
        day: Number(slashMatch[1]),
        month: Number(slashMatch[2]),
        year,
      };
    }

    if (digitsOnly.length >= 6) {
      return {
        day: Number(digitsOnly.slice(0, 2)),
        month: Number(digitsOnly.slice(2, 4)),
        year:
          digitsOnly.length >= 8
            ? Number(digitsOnly.slice(4, 8))
            : normalizeTwoDigitYear(Number(digitsOnly.slice(4, 6))),
      };
    }
  }

  if (inputFormat === 'MM/DD/YYYY' || inputFormat === 'MM/DD/YY') {
    const slashMatch = trimmed.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2,4})$/);
    if (slashMatch) {
      const yearToken = slashMatch[3];
      const year =
        yearToken.length === 2 ? normalizeTwoDigitYear(Number(yearToken)) : Number(yearToken);

      return {
        day: Number(slashMatch[2]),
        month: Number(slashMatch[1]),
        year,
      };
    }
  }

  if (inputFormat === 'YYYY-MM-DD') {
    const isoMatch = trimmed.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
    if (isoMatch) {
      return {
        day: Number(isoMatch[3]),
        month: Number(isoMatch[2]),
        year: Number(isoMatch[1]),
      };
    }
  }

  return null;
}

function componentValidationError(components: DateComponents) {
  const { day, month, year } = components;

  if (month < 1 || month > 12) {
    return 'Enter a valid month';
  }

  if (!Number.isFinite(year) || year < 1000 || year > 9999) {
    return 'Enter a valid year';
  }

  if (day < 1) {
    return 'Enter a valid day';
  }

  const maxDays = daysInMonth(month, year);
  if (day > maxDays) {
    return `Only ${maxDays} days in ${MONTH_NAMES[month - 1]}`;
  }

  return null;
}

function parseFromComponents(trimmed: string, inputFormat: string): DateInputResult | null {
  const components = extractDateComponents(trimmed, inputFormat);
  if (!components) {
    return null;
  }

  const error = componentValidationError(components);
  if (error) {
    return { valid: false, error };
  }

  const date = buildDateFromComponents(components);
  if (!date) {
    return { valid: false, error: 'Enter a valid date' };
  }

  return { valid: true, date };
}

function parseCompactDigits(trimmed: string, inputFormat: string) {
  const digitsOnly = trimmed.replace(/\D/g, '');
  const now = dayjs();

  if (!digitsOnly) {
    return undefined;
  }

  if (digitsOnly.length <= 2) {
    return buildDateFromComponents({
      day: Number(digitsOnly),
      month: now.month() + 1,
      year: now.year(),
    });
  }

  if (digitsOnly.length === 4) {
    const strict = dayjs(trimmed, [inputFormat], true);
    if (strict.isValid()) {
      return startOfDay(strict.year(now.year()));
    }

    return buildDateFromComponents({
      day: Number(digitsOnly.slice(0, 2)),
      month: Number(digitsOnly.slice(2, 4)),
      year: now.year(),
    });
  }

  if (digitsOnly.length === 6) {
    return buildDateFromComponents({
      day: Number(digitsOnly.slice(0, 2)),
      month: Number(digitsOnly.slice(2, 4)),
      year: normalizeTwoDigitYear(Number(digitsOnly.slice(4, 6))),
    });
  }

  if (digitsOnly.length >= 8) {
    return buildDateFromComponents({
      day: Number(digitsOnly.slice(0, 2)),
      month: Number(digitsOnly.slice(2, 4)),
      year: Number(digitsOnly.slice(4, 8)),
    });
  }

  return undefined;
}

export function formatDateInput(value: Date | undefined, inputFormat: string) {
  if (!value) {
    return '';
  }

  const formatted = dayjs(value).format(inputFormat);
  return formatted === 'Invalid Date' ? '' : formatted;
}

export function parseStrictDateInput(input: string, inputFormat: string) {
  const parsed = dayjs(input.trim(), inputFormat, true);
  return parsed.isValid() ? startOfDay(parsed) : undefined;
}

export type ResolveDateInputOptions = {
  allowCompactInput?: boolean;
  validateDate?: (date: Date) => string | null;
};

const PASTE_FORMATS = [
  'DD/MM/YYYY',
  'D/M/YYYY',
  'DD/MM/YY',
  'D/M/YY',
  'YYYY-MM-DD',
  'D MMM YYYY',
  'D MMMM YYYY',
  'MMM D YYYY',
  'MMMM D YYYY',
] as const;

function applyDateValidation(
  date: Date,
  validateDate?: (date: Date) => string | null
): DateInputResult {
  const validationError = validateDate?.(date);
  if (validationError) {
    return { valid: false, error: validationError };
  }

  return { valid: true, date };
}

export function parsePastedDateInput(text: string, inputFormat: string): string | null {
  const trimmed = text.trim();

  if (!trimmed) {
    return null;
  }

  const strictCurrentFormat = dayjs(trimmed, inputFormat, true);
  if (strictCurrentFormat.isValid()) {
    return strictCurrentFormat.format(inputFormat);
  }

  for (const format of PASTE_FORMATS) {
    const parsed = dayjs(trimmed, format, true);
    if (parsed.isValid()) {
      return parsed.format(inputFormat);
    }
  }

  const isoParsed = dayjs(trimmed);
  if (isoParsed.isValid() && /^\d{4}-\d{2}-\d{2}/.test(trimmed)) {
    return isoParsed.format(inputFormat);
  }

  return null;
}

export function resolveDateInput(
  input: string,
  inputFormat: string,
  options?: ResolveDateInputOptions
): DateInputResult {
  const trimmed = input.trim();

  if (!trimmed) {
    return { valid: true };
  }

  const strictDate = parseStrictDateInput(trimmed, inputFormat);
  if (strictDate) {
    return applyDateValidation(strictDate, options?.validateDate);
  }

  const fromComponents = parseFromComponents(trimmed, inputFormat);
  if (fromComponents) {
    if (!fromComponents.valid) {
      return fromComponents;
    }

    if (fromComponents.date) {
      return applyDateValidation(fromComponents.date, options?.validateDate);
    }

    return fromComponents;
  }

  if (options?.allowCompactInput) {
    const compactDate = parseCompactDigits(trimmed, inputFormat);
    if (compactDate) {
      return applyDateValidation(compactDate, options.validateDate);
    }
  }

  return { valid: false, error: `Use format ${inputFormat}` };
}

export function normalizeSelectedDate(date: Date) {
  return startOfDay(dayjs(date));
}
