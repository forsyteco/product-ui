import { ChevronLeftIcon } from 'lucide-react';
import { DayPicker, DayButton } from 'react-day-picker';
import { default as Button } from '../button';
import * as React from 'react';
type CalendarChevronProps = React.ComponentProps<typeof ChevronLeftIcon> & {
    orientation?: 'left' | 'right' | string;
};
declare function CalendarChevron({ className, orientation, ...props }: CalendarChevronProps): React.JSX.Element;
declare function Calendar({ className, classNames, showOutsideDays, captionLayout, buttonVariant, formatters, components, ...props }: React.ComponentProps<typeof DayPicker> & {
    buttonVariant?: React.ComponentProps<typeof Button>['variant'];
}): React.JSX.Element;
declare function CalendarDayButton({ className, day, modifiers, ...props }: React.ComponentProps<typeof DayButton>): React.JSX.Element;
export { Calendar, CalendarDayButton, CalendarChevron };
//# sourceMappingURL=calendar.d.ts.map