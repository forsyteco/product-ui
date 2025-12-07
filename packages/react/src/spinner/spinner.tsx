import { LoaderCircle } from 'lucide-react';
import { cn } from '../utils/tailwind';

export type SpinnerProps = {
  full?: boolean
  className?: string
}

function Spinner({ className, full }: SpinnerProps) {
  return (
    <span className={cn('inline-flex items-center justify-center', full && 'flex flex-1 items-center justify-center')}>
      <LoaderCircle className={cn('animate-spin', className)} />
    </span>
  );
};

export default Spinner