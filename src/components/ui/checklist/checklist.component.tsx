import { CircleCheck, Lock } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { Spinner } from '@/components/ui/spinner/spinner.component';
import { checklistItemStyles, checklistStyles } from './checklist.styles';
import type { ChecklistProps } from './checklist.types';

export function Checklist({ items, className }: ChecklistProps) {
	return (
		<ul className={cn(checklistStyles(), className)}>
			{items.map((item) => (
				<li
					key={item.label}
					className={checklistItemStyles({ status: item.status })}
				>
					{item.status === 'done' && <CircleCheck />}
					{item.status === 'running' && <Spinner size="sm" />}
					{item.status === 'pending' && <Lock />}
					{item.label}
				</li>
			))}
		</ul>
	);
}
