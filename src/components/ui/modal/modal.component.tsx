import { Dialog } from 'radix-ui';
import type { ModalProps } from './modal.types';

export function Modal({ open, onClose, title, description, children }: ModalProps) {
	return (
		<Dialog.Root open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
			<Dialog.Portal>
				<Dialog.Overlay className="fixed inset-0 bg-black/50" />
				<Dialog.Content className="shadow-card fixed top-1/2 left-1/2 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 focus:outline-none">
					<Dialog.Title className="text-ink text-lg font-bold">
						{title}
					</Dialog.Title>
					{description && (
						<Dialog.Description className="text-ink-muted mt-1 text-sm">
							{description}
						</Dialog.Description>
					)}
					{children && <div className="mt-4">{children}</div>}
					<Dialog.Close
						aria-label="Cerrar"
						className="text-ink-muted hover:text-ink absolute top-4 right-4 cursor-pointer text-xl leading-none"
					>
						×
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
