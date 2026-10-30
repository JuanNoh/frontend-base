import type { LucideIcon } from 'lucide-react';
import type { ShellWorkspace } from '@/components/layout/app-shell/app-shell.types';
import type { BarChartProps } from '@/components/ui/bar-chart/bar-chart.types';
import type { ChecklistProps } from '@/components/ui/checklist/checklist.types';
import type { DonutSegment } from '@/components/ui/donut-chart/donut-chart.types';
import type { EntityCardProps } from '@/components/ui/entity-card/entity-card.types';
import type { FunnelStep } from '@/components/ui/funnel-chart/funnel-chart.types';
import type { LineChartProps } from '@/components/ui/line-chart/line-chart.types';
import type { StatCardProps } from '@/components/ui/stat-card/stat-card.types';
import type { Hue } from '@/lib/hues';

export type VerticalId = 'administracion' | 'pos' | 'rh' | 'citas' | 'logistica';

export interface DemoWorkspace extends ShellWorkspace {
	accent: string;
	vertical: VerticalId;
}

export interface VerticalModule {
	label: string;
	description: string;
	icon: LucideIcon;
	hue: Hue;
	count?: number;
}

export interface Vertical {
	id: VerticalId;
	label: string;
	modules: VerticalModule[];
	stats: StatCardProps[];
	funnel: { title: string; steps: FunnelStep[] };
	bars: { title: string } & BarChartProps;
	line: { title: string } & LineChartProps;
	donut: { title: string; label: string; segments: DonutSegment[]; money?: boolean };
	progress: {
		title: string;
		total: number;
		done: number;
		items: ChecklistProps['items'];
	};
	cards: { title: string; items: EntityCardProps[] };
}

export interface VerticalDemoProps {
	vertical: Vertical;
}
