import { type ReactNode, useState, useEffect, useRef } from 'react';
import { clsx } from 'clsx';
import styles from './data-table.module.css';

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
    <tr role="row" id={id} className={styles['expanded-row']}>
      <td
        colSpan={colSpan}
        role="gridcell"
        className={styles['expanded-cell']}
      >
        <div
          className={clsx(
            styles['expanded-inner'],
            isVisible ? styles['expanded-visible'] : styles['expanded-hidden']
          )}
          style={{
            maxHeight: isVisible ? `${height}px` : '0px',
          }}
        >
          <div ref={contentRef} className={styles['expanded-content']}>
            {children}
          </div>
        </div>
      </td>
    </tr>
  );
}

export { ExpandedRow };
