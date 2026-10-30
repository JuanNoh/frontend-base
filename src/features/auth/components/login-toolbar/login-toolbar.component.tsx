import { Monitor, Moon, Sun } from 'lucide-react';
import { Segmented } from '@/components/ui/segmented/segmented.component';
import type { SegmentedOption } from '@/components/ui/segmented/segmented.types';
import { useThemeMode } from '@/components/layout/app-topbar/useThemeMode';
import type { ThemeMode } from '@/stores/appearance.store';
import type { LoginVariant } from '../../types/auth.types';
import { loginToolbarStyles, loginToolbarThemeStyles } from './login-toolbar.styles';
import type { LoginToolbarProps } from './login-toolbar.types';

const VARIANTS: SegmentedOption<LoginVariant>[] = [
	{ value: 'dividido', label: 'Dividido' },
	{ value: 'vidrio', label: 'Vidrio' },
	{ value: 'minimo', label: 'Mínimo' },
];

const MODES: SegmentedOption<ThemeMode>[] = [
	{ value: 'light', label: <Sun />, ariaLabel: 'Claro' },
	{ value: 'dark', label: <Moon />, ariaLabel: 'Oscuro' },
	{ value: 'system', label: <Monitor />, ariaLabel: 'Sistema' },
];

export function LoginToolbar({ variant, onVariantChange }: LoginToolbarProps) {
	const { mode, setMode } = useThemeMode();

	return (
		<div className={loginToolbarStyles()}>
			<Segmented
				aria-label="Diseño del inicio de sesión"
				value={variant}
				onValueChange={onVariantChange}
				options={VARIANTS}
			/>
			<Segmented
				aria-label="Tema"
				value={mode}
				onValueChange={setMode}
				options={MODES}
				className={loginToolbarThemeStyles()}
			/>
		</div>
	);
}
