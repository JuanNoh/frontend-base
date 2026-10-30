import { Skeleton } from '@/components/ui/skeleton/skeleton.component';
import {
	pendingEyebrowStyles,
	pendingGridStyles,
	pendingHeadStyles,
	pendingStyles,
	pendingTextStyles,
	pendingTitleStyles,
	pendingWideStyles,
} from './system.styles';

export function PendingPage() {
	return (
		<div role="status" aria-label="Cargando la página" className={pendingStyles()}>
			<div className={pendingHeadStyles()}>
				<Skeleton className={pendingEyebrowStyles()} />
				<Skeleton className={pendingTitleStyles()} />
				<Skeleton className={pendingTextStyles()} />
			</div>
			<div className={pendingGridStyles()}>
				<Skeleton shape="block" />
				<Skeleton shape="block" />
				<Skeleton shape="block" />
			</div>
			<Skeleton shape="block" className={pendingWideStyles()} />
		</div>
	);
}
