import { X } from 'lucide-react';
import { Dialog } from 'radix-ui';
import { cn } from '@/lib/utils/cn';
import { buttonStyles } from '@/components/ui/button/button.styles';
import {
	modalCloseStyles,
	modalContentStyles,
	modalDescriptionStyles,
	modalFooterStyles,
	modalBodyStyles,
	modalOverlayStyles,
	modalTitleStyles,
} from './modal.styles';
import type { ModalProps } from './modal.types';

export function Modal({
	open,
	onClose,
	title,
	description,
	children,
	footer,
}: ModalProps) {
	return (
		<Dialog.Root open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
			<Dialog.Portal>
				<Dialog.Overlay className={modalOverlayStyles()} />
				<Dialog.Content className={modalContentStyles()}>
					<Dialog.Title className={modalTitleStyles()}>{title}</Dialog.Title>
					{description && (
						<Dialog.Description className={modalDescriptionStyles()}>
							{description}
						</Dialog.Description>
					)}
					{children && <div className={modalBodyStyles()}>{children}</div>}
					{footer && <div className={modalFooterStyles()}>{footer}</div>}
					<Dialog.Close
						aria-label="Cerrar"
						className={cn(
							buttonStyles({ variant: 'ghost', size: 'icon' }),
							modalCloseStyles()
						)}
					>
						<X />
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
