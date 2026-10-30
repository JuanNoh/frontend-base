import { cn } from '@/lib/utils/cn';
import {
	timelineDotStyles,
	timelineHintStyles,
	timelineItemStyles,
	timelineStyles,
	timelineTitleStyles,
} from './timeline.styles';
import type { TimelineProps } from './timeline.types';

export function Timeline({ items, className }: TimelineProps) {
	return (
		<ol className={cn(timelineStyles(), className)}>
			{items.map((item) => (
				<li key={item.title} className={timelineItemStyles()}>
					<span className={timelineDotStyles({ tone: item.tone })} />
					<span>
						<span className={timelineTitleStyles()}>{item.title}</span>
						{item.hint && (
							<span className={timelineHintStyles()}>{item.hint}</span>
						)}
					</span>
				</li>
			))}
		</ol>
	);
}
