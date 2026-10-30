import { Tooltip } from '@/components/ui/tooltip/tooltip.component';
import type { RailTipProps } from './rail-tip.types';

export function RailTip({ enabled, content, children }: RailTipProps) {
	if (!enabled) return children;

	return (
		<Tooltip side="right" content={content}>
			{children}
		</Tooltip>
	);
}
