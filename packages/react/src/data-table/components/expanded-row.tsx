import { type ReactNode, useState, useEffect, useRef } from 'react';
import { cn } from '../../utils/tailwind';

export type ExpandedRowProps = Readonly<{
  id: string;
  colSpan: number;
  children: ReactNode;
  isCollapsing?: boolean;
}>;

function ExpandedRow({ id, colSpan, children, isCollapsing = false }: ExpandedRowProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isCollapsing) {
      // Trigger collapse animation
      setIsVisible(false);
      setHeight(0);
    } else {
      // Trigger expand animation on mount
      const timer = requestAnimationFrame(() => {
        setIsVisible(true);
        if (contentRef.current) {
          setHeight(contentRef.current.scrollHeight);
        }
      });
      return () => cancelAnimationFrame(timer);
    }
  }, [isCollapsing]);

  // Update height when content changes (but not when collapsing)
  useEffect(() => {
    if (contentRef.current && isVisible && !isCollapsing) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [children, isVisible, isCollapsing]);

  return (
    <tr role="row" id={id} className="border-b border-border">
      <td
        colSpan={colSpan}
        role="gridcell"
        className="border-t border-border bg-muted/20 p-0 overflow-hidden"
      >
        <div
          className={cn(
            'transition-all duration-300 ease-in-out overflow-hidden',
            isVisible ? 'opacity-100' : 'opacity-0'
          )}
          style={{
            maxHeight: isVisible ? `${height}px` : '0px',
          }}
        >
          <div ref={contentRef} className="px-4 py-4">
            {children}
          </div>
        </div>
      </td>
    </tr>
  );
}

export { ExpandedRow };
