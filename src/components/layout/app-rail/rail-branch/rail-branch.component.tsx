import { ChevronRight } from 'lucide-react';
import { Collapsible } from 'radix-ui';
import { cn } from '@/lib/utils/cn';
import {
	railCountStyles,
	railLinkLabelStyles,
	railLinkStyles,
} from '@/components/layout/app-rail/app-rail.styles';
import {
	railBranchChevronStyles,
	railBranchContentStyles,
	railBranchListStyles,
	railBranchTriggerStyles,
} from './rail-branch.styles';
import type { RailBranchProps } from './rail-branch.types';
import { useRailBranch } from './useRailBranch';

export function RailBranch({ item, active, nested, children }: RailBranchProps) {
	const { open, setOpen } = useRailBranch(active);

	return (
		<Collapsible.Root open={open} onOpenChange={setOpen}>
			<Collapsible.Trigger
				data-active={active || undefined}
				className={cn(railLinkStyles({ nested }), railBranchTriggerStyles())}
			>
				{item.icon && <item.icon />}
				<span className={railLinkLabelStyles()}>{item.label}</span>
				{item.count !== undefined && (
					<span className={railCountStyles()}>{item.count}</span>
				)}
				<ChevronRight className={railBranchChevronStyles()} />
			</Collapsible.Trigger>
			<Collapsible.Content className={railBranchContentStyles()}>
				<div className={railBranchListStyles()}>{children}</div>
			</Collapsible.Content>
		</Collapsible.Root>
	);
}
