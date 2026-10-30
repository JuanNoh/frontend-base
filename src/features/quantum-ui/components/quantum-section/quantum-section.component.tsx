import { CodeXml } from 'lucide-react';
import { Button } from '@/components/ui/button/button.component';
import { useSourceDrawer } from '../../hooks/useSourceDrawer';
import { SourceDrawer } from '../source-drawer/source-drawer.component';
import {
	quantumSectionDescriptionStyles,
	quantumSectionEyebrowStyles,
	quantumSectionHeaderStyles,
	quantumSectionStyles,
	quantumSectionTitleStyles,
} from './quantum-section.styles';
import type { QuantumSectionProps } from './quantum-section.types';

export function QuantumSection({
	id,
	eyebrow,
	title,
	description,
	demo,
	api,
	children,
}: QuantumSectionProps) {
	const code = useSourceDrawer();

	return (
		<section id={id} className={quantumSectionStyles()}>
			<header className={quantumSectionHeaderStyles()}>
				<div>
					{eyebrow && (
						<p className={quantumSectionEyebrowStyles()}>{eyebrow}</p>
					)}
					<h2 className={quantumSectionTitleStyles()}>{title}</h2>
					{description && (
						<p className={quantumSectionDescriptionStyles()}>{description}</p>
					)}
				</div>
				{demo && (
					<Button variant="secondary" size="sm" onClick={code.open}>
						<CodeXml />
						Ver código
					</Button>
				)}
			</header>
			{children}
			{demo && (
				<SourceDrawer
					open={code.isOpen}
					onClose={code.close}
					title={title}
					demo={demo}
					api={api}
				/>
			)}
		</section>
	);
}
