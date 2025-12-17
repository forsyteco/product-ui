import React from 'react'
import { RelativeTime } from './relative-time';
import Button from '../button'

export default {
    title: 'Components/RelativeTime/Examples',
    component: RelativeTime,
}

export const DynamicRelativeTime = () => {
    const [time, setTime] = React.useState(false)
    return (
        <div>
            <div>
                <Button onClick={() => setTime(!time)} aria-describedby="relative-time">
                    Show {time ? 'short' : 'exact'} date
                </Button>
            </div>
            <div>
                <RelativeTime
                    id="relative-time"
                    date={new Date('2020-01-01T00:00:00Z')}
                    minute={time ? '2-digit' : undefined}
                    hour={time ? 'numeric' : undefined}
                    day={time ? '2-digit' : undefined}
                    month={time ? 'short' : undefined}
                    year={time ? 'numeric' : undefined}
                    timeZoneName={time ? 'short' : undefined}
                    prefix=""
                    noTitle
                />
            </div>
        </div>
    )
}

export const LongDate = () => (
    <RelativeTime
        date={new Date('2020-01-01T00:00:00Z')}
        minute="2-digit"
        hour="numeric"
        day="2-digit"
        month="short"
        year="numeric"
        timeZoneName="short"
        prefix=""
        noTitle
    />
)

export const RelativeTimeExample = () => (
    <RelativeTime date={new Date('2020-01-01T00:00:00Z')} noTitle={true} />
)