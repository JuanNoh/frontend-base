import { Drawer } from '@/components/ui/drawer/drawer.component';
import { Tabs } from '@/components/ui/tabs/tabs.component';
import { SourceFile } from '../source-file/source-file.component';
import { sourceDrawerTabsStyles } from './source-drawer.styles';
import type { SourceDrawerProps } from './source-drawer.types';

export function SourceDrawer({
	open,
	onClose,
	title,
	demo,
	api = [],
}: SourceDrawerProps) {
	const items = [
		{
			value: demo,
			label: 'Ejemplo',
			content: <SourceFile kind="demo" name={demo} />,
		},
		...api.map((name) => ({
			value: name,
			label: name,
			content: <SourceFile kind="api" name={name} />,
		})),
	];

	return (
		<Drawer open={open} onClose={onClose} size="wide" eyebrow="Código" title={title}>
			<Tabs
				items={items}
				aria-label="Archivos"
				className={sourceDrawerTabsStyles()}
			/>
		</Drawer>
	);
}
