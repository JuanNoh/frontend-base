import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import type { AvatarProps } from '@/components/ui/avatar/avatar.types';
import type { BadgeProps } from '@/components/ui/badge/badge.types';
import type { Hue } from '@/lib/hues';

export interface EntityCardMeta {
	label: string;
	value: string;
}

export interface EntityCardProps {
	title: string;
	subtitle?: string;
	hue?: Hue;
	icon?: LucideIcon;
	avatar?: Pick<AvatarProps, 'name' | 'src' | 'status'>;
	badge?: { label: string; tone?: BadgeProps['tone']; dot?: boolean };
	meta?: EntityCardMeta[];
	amount?: string;
	actions?: ReactNode;
	className?: string;
}
