import type { VariantProps } from 'class-variance-authority';
import type { loginPanelHeaderStyles } from './login-panel.styles';

export type LoginPanelProps = VariantProps<typeof loginPanelHeaderStyles> & {
	title: string;
	description: string;
	className?: string;
};
