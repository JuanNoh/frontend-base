import {
	CloudDownload,
	Copy,
	Download,
	Ellipsis,
	FileText,
	FileX,
	Plus,
	Send,
	Stamp,
	Trash2,
} from 'lucide-react';
import { toast } from 'sonner';
import { BrandIcon } from '@/components/ui/brand-icon/brand-icon.component';
import { Button } from '@/components/ui/button/button.component';
import { Card } from '@/components/ui/card/card.component';
import { DropdownMenu } from '@/components/ui/dropdown-menu/dropdown-menu.component';
import { Tooltip } from '@/components/ui/tooltip/tooltip.component';
import { useStampDemo } from '../../hooks/useStampDemo';
import { buttonsCardStyles, buttonsRowStyles } from './buttons-demo.styles';

export function ButtonsDemo() {
	const { isStamping, stamp } = useStampDemo();

	return (
		<Card className={buttonsCardStyles()}>
			<div className={buttonsRowStyles()}>
				<Button onClick={stamp} isSubmitting={isStamping}>
					{!isStamping && <Stamp />}
					Timbrar
				</Button>
				<Button variant="ink">Tinta</Button>
				<Button variant="secondary">
					<CloudDownload />
					Sincronizar SAT
				</Button>
				<Button variant="ghost">Fantasma</Button>
				<Button variant="danger">
					<FileX />
					Cancelar CFDI
				</Button>
				<Button variant="destructive">
					<Trash2 />
					Eliminar
				</Button>
				<Button variant="link">Ver detalle</Button>
			</div>
			<div className={buttonsRowStyles()}>
				<Button size="sm">Chico</Button>
				<Button>Mediano</Button>
				<Button size="lg">Grande</Button>
				<Button disabled>Deshabilitado</Button>
				<Tooltip content="Nueva factura">
					<Button size="icon" variant="secondary" aria-label="Nueva factura">
						<Plus />
					</Button>
				</Tooltip>
				<Tooltip content="Descargar XML">
					<Button size="icon" variant="secondary" aria-label="Descargar XML">
						<Download />
					</Button>
				</Tooltip>
				<DropdownMenu
					label="Factura A-1041"
					trigger={
						<Button size="icon" variant="ghost" aria-label="Más acciones">
							<Ellipsis />
						</Button>
					}
					groups={[
						[
							{
								label: 'Copiar UUID',
								icon: <Copy />,
								shortcut: '⌘C',
								onSelect: () => toast.success('UUID copiado'),
							},
							{
								label: 'Reenviar al cliente',
								icon: <Send />,
								onSelect: () => toast.info('Reenvío en cola'),
							},
							{ label: 'Ver PDF', icon: <FileText /> },
						],
						[{ label: 'Cancelar CFDI', icon: <FileX />, tone: 'danger' }],
					]}
				/>
			</div>
			<div className={buttonsRowStyles()}>
				<Button variant="secondary">
					<BrandIcon brand="google" />
					Continuar con Google
				</Button>
				<Button variant="secondary">
					<BrandIcon brand="microsoft" />
					Continuar con Microsoft
				</Button>
			</div>
		</Card>
	);
}
