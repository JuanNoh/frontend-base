import type { LucideIcon } from 'lucide-react';
import type { FlatNavLeaf, NavBranch, NavGroup, NavItem } from './app-shell.types';

export function isNavBranch(item: NavItem): item is NavBranch {
	return item.children !== undefined;
}

export function navKey(parentKey: string, label: string) {
	return `${parentKey}/${label}`;
}

export function groupKey(group: NavGroup, index: number) {
	return group.label ?? String(index);
}

function flattenItems(
	items: NavItem[],
	parentKey: string,
	trail: string[],
	icon?: LucideIcon
): FlatNavLeaf[] {
	return items.flatMap((item) => {
		const key = navKey(parentKey, item.label);
		const nearestIcon = item.icon ?? icon;

		return isNavBranch(item)
			? flattenItems(item.children, key, [...trail, item.label], nearestIcon)
			: [{ key, leaf: item, trail, icon: nearestIcon }];
	});
}

export function flattenNav(nav: NavGroup[]) {
	return nav.flatMap((group, index) =>
		flattenItems(group.items, groupKey(group, index), [])
	);
}
