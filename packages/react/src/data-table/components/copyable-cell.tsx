import { Copy } from 'lucide-react';
import { cn } from '../../utils/tailwind';

export interface CopyableCellProps {
  value: string;
}

export default function CopyableCell({ value }: CopyableCellProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(value);
  };

  return (
    <span className={cn('group inline-flex items-center gap-1')}>
      <span className="text-foreground">{value}</span>
      <button
        onClick={handleCopy}
        className={cn(
          'opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity'
        )}
        aria-label="Copy to clipboard"
      >
        <Copy className="h-3 w-3" />
      </button>
    </span>
  );
}
