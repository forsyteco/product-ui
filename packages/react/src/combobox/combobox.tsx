import { useState, type ReactNode } from 'react';
import { Combobox as HeadlessCombobox } from '@headlessui/react';
import { cn } from '../utils/tailwind';

export type ComboboxOption = {
  id: string | number;
  label: string;
  value: string;
};

export type ComboboxProps = {
  options: ComboboxOption[];
  value?: ComboboxOption | null;
  onChange?: (value: ComboboxOption) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
};

export type ComboboxInputProps = {
  className?: string;
};

export type ComboboxOptionsProps = {
  children: ReactNode;
  className?: string;
};

export type ComboboxOptionProps = {
  option: ComboboxOption;
  className?: string;
};

function Combobox({
  options,
  value,
  onChange,
  placeholder = 'Select an option...',
  className,
  disabled = false,
}: ComboboxProps) {
  const [query, setQuery] = useState('');

  const filteredOptions =
    query === ''
      ? options
      : options.filter((option) =>
          option.label.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className={cn('relative', className)}>
      <HeadlessCombobox
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        <HeadlessCombobox.Input
          className={cn(
            'w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-1 focus:ring-blue-500 focus:border-blue-500',
            disabled && 'opacity-50 cursor-not-allowed'
          )}
          displayValue={(option: ComboboxOption | null) => option?.label || ''}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder}
        />
        <HeadlessCombobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
          <svg
            className="h-5 w-5 text-gray-400"
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
        </HeadlessCombobox.Button>
        <HeadlessCombobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {filteredOptions.length === 0 && query !== '' ? (
            <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
              Nothing found.
            </div>
          ) : (
            filteredOptions.map((option) => (
              <HeadlessCombobox.Option
                key={option.id}
                value={option}
                className={({ active }) =>
                  cn(
                    'relative cursor-default select-none py-2 pl-10 pr-4',
                    active ? 'bg-blue-600 text-white' : 'text-gray-900'
                  )
                }
              >
                {option.label}
              </HeadlessCombobox.Option>
            ))
          )}
        </HeadlessCombobox.Options>
      </HeadlessCombobox>
    </div>
  );
}

export default Combobox;

