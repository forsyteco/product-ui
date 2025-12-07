import React from 'react';
import { LoaderCircle } from 'lucide-react';
import { cn } from '../utils/tailwind';

export type SpinnerProps = {
  full?: boolean
  className?: string
}

function Spinner(props: SpinnerProps) {
  return (
    <span className={cn(props.full && 'flex flex-1 items-center justify-center')}>
      <LoaderCircle className={cn('animate-spin', props.className)} />
    </span>
  );
};

export default Spinner