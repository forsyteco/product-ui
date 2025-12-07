import { LoaderCircle } from 'lucide-react';
import { cn } from '../utils/tailwind';
import classes from './spinner.module.css';

export type SpinnerProps = {
  full?: boolean
  className?: string
}

function Spinner(props: SpinnerProps) {
  return (
    <span className={cn(classes.spinner, props.full && classes.spinnerFull)}>
      <LoaderCircle className={cn(classes.spinnerIcon, props.className)} />
    </span>
  );
};

export default Spinner