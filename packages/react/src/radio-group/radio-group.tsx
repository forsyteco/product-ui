import { type ReactNode } from 'react';
import { RadioGroup as HeadlessRadioGroup } from '@headlessui/react';
import { cn } from '../utils/tailwind';

export type RadioGroupOption = {
  id: string | number;
  label: string;
  value: string;
  description?: string;
};

export type RadioGroupProps = {
  options: RadioGroupOption[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  disabled?: boolean;
};

export type RadioGroupOptionProps = {
  option: RadioGroupOption;
  className?: string;
};

function RadioGroup({
  options,
  value,
  onChange,
  className,
  disabled = false,
}: RadioGroupProps) {
  return (
    <div className={cn('space-y-2', className)}>
      <HeadlessRadioGroup value={value} onChange={onChange} disabled={disabled}>
        {options.map((option) => (
        <HeadlessRadioGroup.Option
          key={option.id}
          value={option.value}
          className={({ checked, disabled: optionDisabled }) =>
            cn(
              'relative flex cursor-pointer rounded-lg border p-4 focus:outline-none',
              checked
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 bg-white',
              (disabled || optionDisabled) && 'opacity-50 cursor-not-allowed'
            )
          }
        >
          {({ checked }) => (
            <>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center">
                  <div className="text-base">
                    <HeadlessRadioGroup.Label
                      as="p"
                      className={cn('font-medium', checked ? 'text-blue-900' : 'text-gray-900')}
                    >
                      {option.label}
                    </HeadlessRadioGroup.Label>
                    {option.description && (
                      <HeadlessRadioGroup.Description
                        as="span"
                        className={cn('inline', checked ? 'text-blue-700' : 'text-gray-500')}
                      >
                        {option.description}
                      </HeadlessRadioGroup.Description>
                    )}
                  </div>
                </div>
                {checked && (
                  <div className="shrink-0 text-blue-600">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a1 1 0 00-1.714-1.029L9 9.586 7.857 8.162a1 1 0 00-1.714 1.029l2 3a1 1 0 001.514.143l4-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </>
          )}
        </HeadlessRadioGroup.Option>
      ))}
      </HeadlessRadioGroup>
    </div>
  );
}

export default RadioGroup;

