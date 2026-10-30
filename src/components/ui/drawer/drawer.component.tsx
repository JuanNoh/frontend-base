import { X } from 'lucide-react';
import { Dialog } from 'radix-ui';
import { buttonStyles } from '@/components/ui/button/button.styles';
import { modalOverlayStyles } from '@/components/ui/modal/modal.styles';
import {
	drawerBodyStyles,
	drawerContentStyles,
	drawerDescriptionStyles,
	drawerEyebrowStyles,
	drawerFooterStyles,
	drawerHeaderStyles,
	drawerTitleStyles,
} from './drawer.styles';
import type { DrawerProps } from './drawer.types';

export function Drawer({
	open,
	onClose,
	title,
	eyebrow,
	description,
	children,
	footer,
}: DrawerProps) {
	return (
		<Dialog.Root open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
			<Dialog.Portal>
				<Dialog.Overlay className={modalOverlayStyles()} />
				<Dialog.Content
					className={drawerContentStyles()}
					aria-describedby={undefined}
				>
					<header className={drawerHeaderStyles()}>
						<div>
							{eyebrow && (
								<p className={drawerEyebrowStyles()}>{eyebrow}</p>
							)}
							<Dialog.Title className={drawerTitleStyles()}>
								{title}
							</Dialog.Title>
							{description && (
								<p className={drawerDescriptionStyles()}>{description}</p>
							)}
						</div>
						<Dialog.Close
							aria-label="Cerrar"
							className={buttonStyles({ variant: 'ghost', size: 'icon' })}
						>
							<X />
						</Dialog.Close>
					</header>
					<div className={drawerBodyStyles()}>{children}</div>
					{footer && <footer className={drawerFooterStyles()}>{footer}</footer>}
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
