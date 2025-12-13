import { Field, Label, Description, Switch as HeadlessSwitch } from '@headlessui/react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/tailwind';

const switchVariants = cva(
  'group ml-3 inline-flex items-center rounded-full bg-gray-200 transition data-checked:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
  {
    variants: {
      size: {
        sm: 'h-5 w-9',
        md: 'h-6 w-11',
        lg: 'h-7 w-14',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      disabled: false,
    },
  }
);

const switchThumbVariants = cva(
  'pointer-events-none rounded-full bg-white transition',
  {
    variants: {
      size: {
        sm: 'size-3 translate-x-0.5 group-data-checked:translate-x-5',
        md: 'size-4 translate-x-1 group-data-checked:translate-x-6',
        lg: 'size-5 translate-x-1.5 group-data-checked:translate-x-8',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export type SwitchProps = VariantProps<typeof switchVariants> & {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  description?: string;
  className?: string;
};

function Switch({
  checked = false,
  onChange,
  label,
  description,
  disabled = false,
  size,
  className,
}: SwitchProps) {
  return (
    <Field className={cn('flex items-center', className)}>
      {label && (
        <Label
          className={cn(
            'text-sm font-medium',
            disabled ? 'text-gray-400' : 'text-gray-900'
          )}
        >
          {label}
        </Label>
      )}
      {description && (
        <Description
          className={cn(
            'text-sm',
            disabled ? 'text-gray-400' : 'text-gray-500'
          )}
        >
          {description}
        </Description>
      )}
      <HeadlessSwitch
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={switchVariants({ size, disabled })}
      >
        <span className={switchThumbVariants({ size })} />
      </HeadlessSwitch>
    </Field>
  );
}

export default Switch;

