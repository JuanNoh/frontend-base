import { useMemo } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { CloudDownload, Moon, Palette, Plus, Sun } from 'lucide-react';
import { toast } from 'sonner';
import { flattenNav } from '@/components/layout/app-shell/app-shell.utils';
import type { Command } from '@/components/ui/command-palette/command-palette.types';
import { useAppearanceStore } from '@/stores/appearance.store';
import { QUANTUM_NAV } from '../quantum-nav';

export function useQuantumCommands(): Command[] {
	const navigate = useNavigate();
	const setMode = useAppearanceStore((state) => state.setMode);
	const applyPreset = useAppearanceStore((state) => state.applyPreset);

	return useMemo(() => {
		const sections = flattenNav(QUANTUM_NAV).map(({ key, leaf, trail, icon }) => ({
			id: `ir-${key}`,
			label: [...trail, leaf.label].join(' › '),
			group: 'Ir a',
			icon,
			run: () => navigate({ to: leaf.to, hash: leaf.hash }),
		}));

		return [
			...sections,
			{
				id: 'nuevo-registro',
				label: 'Nuevo registro',
				group: 'Acciones',
				icon: Plus,
				shortcut: 'N',
				run: () =>
					toast.success('Borrador creado', {
						description: 'Puedes terminarlo cuando quieras.',
					}),
			},
			{
				id: 'sincronizar',
				label: 'Sincronizar datos',
				group: 'Acciones',
				icon: CloudDownload,
				run: () =>
					toast.info('Sincronización en curso', {
						description: 'Puede tardar unos minutos.',
					}),
			},
			{
				id: 'modo-oscuro',
				label: 'Cambiar a modo oscuro',
				group: 'Apariencia',
				icon: Moon,
				run: () => setMode('dark'),
			},
			{
				id: 'modo-claro',
				label: 'Cambiar a modo claro',
				group: 'Apariencia',
				icon: Sun,
				run: () => setMode('light'),
			},
			{
				id: 'mezcla-coral',
				label: 'Mezcla Coral',
				group: 'Apariencia',
				icon: Palette,
				run: () => applyPreset('coral'),
			},
			{
				id: 'mezcla-jade',
				label: 'Mezcla Jade',
				group: 'Apariencia',
				icon: Palette,
				run: () => applyPreset('jade'),
			},
			{
				id: 'mezcla-indigo',
				label: 'Mezcla Índigo',
				group: 'Apariencia',
				icon: Palette,
				run: () => applyPreset('indigo'),
			},
			{
				id: 'mezcla-tinta',
				label: 'Mezcla Tinta',
				group: 'Apariencia',
				icon: Palette,
				run: () => applyPreset('tinta'),
			},
		];
	}, [navigate, setMode, applyPreset]);
}
