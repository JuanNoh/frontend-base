import { EntityCard } from '@/components/ui/entity-card/entity-card.component';
import type { VerticalDemoProps } from '../../types/vertical.types';
import { PosDemo } from '../pos-demo/pos-demo.component';
import {
	showcaseGridStyles,
	showcaseStyles,
	showcaseTitleStyles,
} from './showcase-demo.styles';

export function ShowcaseDemo({ vertical }: VerticalDemoProps) {
	return (
		<div className={showcaseStyles()}>
			<h3 className={showcaseTitleStyles()}>{vertical.cards.title}</h3>
			{vertical.id === 'pos' ? (
				<PosDemo />
			) : (
				<div className={showcaseGridStyles()}>
					{vertical.cards.items.map((card) => (
						<EntityCard key={card.title} {...card} />
					))}
				</div>
			)}
		</div>
	);
}
