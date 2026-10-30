import { useMemo } from 'react';
import { useLocation } from '@tanstack/react-router';
import type { NavGroup } from '@/components/layout/app-shell/app-shell.types';
import { buildRailGroups } from './app-rail.utils';

export function useAppRail(nav: NavGroup[]) {
	const pathname = useLocation({ select: (location) => location.pathname });
	const hash = useLocation({ select: (location) => location.hash });

	return useMemo(() => buildRailGroups(nav, { pathname, hash }), [nav, pathname, hash]);
}
