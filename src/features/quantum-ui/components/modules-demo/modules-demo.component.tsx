import { ModuleTile } from '@/components/ui/module-tile/module-tile.component';
import type { VerticalDemoProps } from '../../types/vertical.types';
import { modulesGridStyles } from './modules-demo.styles';

export function ModulesDemo({ vertical }: VerticalDemoProps) {
	return (
		<div className={modulesGridStyles()}>
			{vertical.modules.map((module) => (
				<ModuleTile key={module.label} href="#modulos" {...module} />
			))}
		</div>
	);
}
