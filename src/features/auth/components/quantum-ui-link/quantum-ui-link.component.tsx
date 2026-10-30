import { Link } from '@tanstack/react-router';
import { ArrowRight, Palette } from 'lucide-react';
import { quantumUiLinkArrowStyles, quantumUiLinkStyles } from './quantum-ui-link.styles';

export function QuantumUiLink() {
	return (
		<Link to="/ui" className={quantumUiLinkStyles()}>
			<Palette />
			Ver los componentes en Quantum UI
			<ArrowRight className={quantumUiLinkArrowStyles()} />
		</Link>
	);
}
