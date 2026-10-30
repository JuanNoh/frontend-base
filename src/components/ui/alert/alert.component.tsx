import { CircleAlert, CircleCheck, Info, TriangleAlert } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { alertDescriptionStyles, alertStyles, alertTitleStyles } from './alert.styles';
import type { AlertProps } from './alert.types';

const ICONS = {
	info: Info,
	success: CircleCheck,
	warning: TriangleAlert,
	danger: CircleAlert,
};

export function Alert({ tone = 'info', title, children, className }: AlertProps) {
	const Icon = ICONS[tone ?? 'info'];

	return (
		<div
			role={tone === 'danger' ? 'alert' : 'status'}
			className={cn(alertStyles({ tone }), className)}
		>
			<Icon />
			<div>
				<p className={alertTitleStyles()}>{title}</p>
				{children && <p className={alertDescriptionStyles()}>{children}</p>}
			</div>
		</div>
	);
}
