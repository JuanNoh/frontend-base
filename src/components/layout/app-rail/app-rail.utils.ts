import type {
	NavGroup,
	NavItem,
	NavLeaf,
} from '@/components/layout/app-shell/app-shell.types';
import {
	groupKey,
	isNavBranch,
	navKey,
} from '@/components/layout/app-shell/app-shell.utils';
import type { NavLocation, RailGroup, RailNode } from './app-rail.types';

function normalizePath(path: string) {
	return path.length > 1 ? path.replace(/\/+$/, '') : path;
}

function isNavLeafActive(leaf: NavLeaf, location: NavLocation) {
	const samePath = normalizePath(String(leaf.to)) === normalizePath(location.pathname);
	return samePath && (!leaf.hash || leaf.hash === location.hash);
}

function toRailNode(item: NavItem, parentKey: string, location: NavLocation): RailNode {
	const key = navKey(parentKey, item.label);

	if (!isNavBranch(item)) {
		return { key, item, active: isNavLeafActive(item, location), children: [] };
	}

	const children = item.children.map((child) => toRailNode(child, key, location));
	return { key, item, active: children.some((child) => child.active), children };
}

export function buildRailGroups(nav: NavGroup[], location: NavLocation): RailGroup[] {
	return nav.map((group, index) => {
		const key = groupKey(group, index);
		return {
			key,
			label: group.label,
			nodes: group.items.map((item) => toRailNode(item, key, location)),
		};
	});
}
