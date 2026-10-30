import { Search } from 'lucide-react';
import { Dialog } from 'radix-ui';
import {
	commandContentStyles,
	commandEmptyStyles,
	commandFooterStyles,
	commandGroupLabelStyles,
	commandInputStyles,
	commandInputWrapStyles,
	commandItemLabelStyles,
	commandItemStyles,
	commandKbdStyles,
	commandListStyles,
	commandOverlayStyles,
	commandTitleStyles,
} from './command-palette.styles';
import type { CommandPaletteProps } from './command-palette.types';

export function CommandPalette({
	palette,
	placeholder = 'Busca una sección o una acción…',
}: CommandPaletteProps) {
	const {
		isOpen,
		onOpenChange,
		listId,
		query,
		changeQuery,
		onInputKeyDown,
		listRef,
		hasResults,
		groups,
		activeIndex,
		setActiveIndex,
		run,
	} = palette;

	return (
		<Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
			<Dialog.Portal>
				<Dialog.Overlay className={commandOverlayStyles()} />
				<Dialog.Content
					className={commandContentStyles()}
					aria-describedby={undefined}
				>
					<Dialog.Title className={commandTitleStyles()}>
						Paleta de comandos
					</Dialog.Title>
					<div className={commandInputWrapStyles()}>
						<Search />
						<input
							autoFocus
							role="combobox"
							aria-expanded
							aria-controls={listId}
							value={query}
							onChange={(event) => changeQuery(event.target.value)}
							onKeyDown={onInputKeyDown}
							placeholder={placeholder}
							className={commandInputStyles()}
						/>
						<kbd className={commandKbdStyles()}>esc</kbd>
					</div>
					<div
						ref={listRef}
						id={listId}
						role="listbox"
						className={commandListStyles()}
					>
						{!hasResults && (
							<p className={commandEmptyStyles()}>
								Nada coincide. Prueba «tabla» u «oscuro».
							</p>
						)}
						{groups.map((group) => (
							<div key={group.label} role="group" aria-label={group.label}>
								<div className={commandGroupLabelStyles()}>
									{group.label}
								</div>
								{group.items.map(({ command, index }) => {
									const isActive = index === activeIndex;
									const Icon = command.icon;

									return (
										<button
											key={command.id}
											type="button"
											role="option"
											aria-selected={isActive}
											data-active={isActive || undefined}
											onMouseMove={() => setActiveIndex(index)}
											onClick={() => run(command)}
											className={commandItemStyles()}
										>
											{Icon && <Icon />}
											<span className={commandItemLabelStyles()}>
												{command.label}
											</span>
											{command.shortcut && (
												<kbd className={commandKbdStyles()}>
													{command.shortcut}
												</kbd>
											)}
										</button>
									);
								})}
							</div>
						))}
					</div>
					<div className={commandFooterStyles()}>
						<span>↑ ↓ moverse</span>
						<span>↵ abrir</span>
						<span>esc cerrar</span>
					</div>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
