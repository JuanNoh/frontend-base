import { createFileRoute } from '@tanstack/react-router';
import { SettingsPage } from '@/features/screens/settings.page';

export const Route = createFileRoute('/ui/ajustes')({
	component: SettingsPage,
});
