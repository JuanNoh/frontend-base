import type { Hue } from '@/lib/hues';

export type TeamStatus = 'Activa' | 'Invitada' | 'Suspendida';

export interface TeamMember {
	id: string;
	name: string;
	email: string;
	role: string;
	status: TeamStatus;
	hue: Hue;
}
