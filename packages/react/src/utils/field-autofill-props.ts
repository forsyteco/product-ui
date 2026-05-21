export type FieldAutofillProps = {
  autoComplete?: string;
};

const passwordManagerIgnoreProps = {
  'data-1p-ignore': true,
  'data-lpignore': 'true',
  'data-bwignore': true,
  'data-form-type': 'other',
  'data-protonpass-ignore': 'true',
} as const;

/**
 * Defaults form fields to opt out of browser autofill and password managers.
 * Pass `autoComplete` with a meaningful token (e.g. `email`, `name`) to enable explicitly.
 */
export function resolveFieldAutofillProps({ autoComplete }: FieldAutofillProps = {}) {
  if (autoComplete !== undefined && autoComplete !== 'off') {
    return { autoComplete };
  }

  return {
    autoComplete: 'off' as const,
    ...passwordManagerIgnoreProps,
  };
}
