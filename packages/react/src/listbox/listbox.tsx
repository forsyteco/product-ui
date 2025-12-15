import { type ReactNode } from 'react';
import { Listbox as HeadlessListbox } from '@headlessui/react';
import { cn } from '../utils/tailwind';

export type ListboxOption = {
  id: string | number;
  label: string;
  value: string;
  disabled?: boolean;
};

export type ListboxProps = {
  options: ListboxOption[];
  value?: ListboxOption | null;
  onChange?: (value: ListboxOption) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
};

export type ListboxButtonProps = {
  children: ReactNode;
  className?: string;
};

export type ListboxOptionsProps = {
  children: ReactNode;
  className?: string;
};

export type ListboxOptionProps = {
  option: ListboxOption;
  className?: string;
};

function Listbox({
  options,
  value,
  onChange,
  placeholder = 'Select an option...',
  className,
  disabled = false,
}: ListboxProps) {
  return (
    <HeadlessListbox value={value ?? undefined} onChange={onChange} disabled={disabled}>
      <div className={cn('relative', className)}>
        <HeadlessListbox.Button
          className={cn(
            'relative w-full cursor-default rounded-md bg-background py-2 pl-3 pr-10 text-left text-base text-foreground shadow-sm ring-1 ring-inset ring-border focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background',
            disabled && 'cursor-not-allowed opacity-50'
          )}
        >
          <span className="block truncate">
            {value?.label || placeholder}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <svg
              className="h-5 w-5 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </HeadlessListbox.Button>
        <HeadlessListbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-background py-1 text-base shadow-lg ring-1 ring-border focus:outline-none">
          {options.map((option) => (
            <HeadlessListbox.Option
              key={option.id}
              value={option}
              disabled={option.disabled}
              className={({ active, disabled }) =>
                cn(
                  'relative cursor-default select-none py-2 pl-10 pr-4',
                  active ? 'bg-accent text-accent-foreground' : 'text-foreground',
                  disabled && 'cursor-not-allowed opacity-50'
                )
              }
            >
              {option.label}
            </HeadlessListbox.Option>
          ))}
        </HeadlessListbox.Options>
      </div>
    </HeadlessListbox>
  );
}

export default Listbox;

