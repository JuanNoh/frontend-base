import {
	quantumSectionDescriptionStyles,
	quantumSectionEyebrowStyles,
	quantumSectionStyles,
	quantumSectionTitleStyles,
} from './quantum-section.styles';
import type { QuantumSectionProps } from './quantum-section.types';

export function QuantumSection({
	id,
	eyebrow,
	title,
	description,
	children,
}: QuantumSectionProps) {
	return (
		<section id={id} className={quantumSectionStyles()}>
			<header>
				{eyebrow && <p className={quantumSectionEyebrowStyles()}>{eyebrow}</p>}
				<h2 className={quantumSectionTitleStyles()}>{title}</h2>
				{description && (
					<p className={quantumSectionDescriptionStyles()}>{description}</p>
				)}
			</header>
			{children}
		</section>
	);
}
