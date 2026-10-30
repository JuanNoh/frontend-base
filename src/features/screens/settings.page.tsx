import { PageHeader } from '@/components/ui/page-header/page-header.component';
import { Tabs } from '@/components/ui/tabs/tabs.component';
import { AppearancePanel } from '@/features/quantum-ui/components/appearance-panel/appearance-panel.component';
import { PresetPicker } from '@/features/quantum-ui/components/preset-picker/preset-picker.component';
import { appearanceLayoutStyles } from '@/features/quantum-ui/quantum-ui.styles';
import { CompanyForm } from './components/company-form/company-form.component';
import { NotificationSettings } from './components/notification-settings/notification-settings.component';
import { TeamTable } from './components/team-table/team-table.component';
import { screenStyles } from './screens.styles';

const SECTIONS = [
	{ value: 'empresa', label: 'Empresa', content: <CompanyForm /> },
	{ value: 'equipo', label: 'Equipo', content: <TeamTable /> },
	{
		value: 'apariencia',
		label: 'Apariencia',
		content: (
			<div className={appearanceLayoutStyles()}>
				<PresetPicker />
				<AppearancePanel />
			</div>
		),
	},
	{ value: 'avisos', label: 'Avisos', content: <NotificationSettings /> },
];

export function SettingsPage() {
	return (
		<div className={screenStyles()}>
			<PageHeader
				title="Ajustes"
				description="Los datos de la empresa, quién entra y cómo se ve todo."
			/>
			<Tabs variant="pill" items={SECTIONS} aria-label="Secciones de ajustes" />
		</div>
	);
}
