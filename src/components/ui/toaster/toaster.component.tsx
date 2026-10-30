import { Toaster as Sonner } from 'sonner';
import {
	toastActionStyles,
	toastDescriptionStyles,
	toastStyles,
	toastTitleStyles,
	toastToneStyles,
} from './toaster.styles';

export function Toaster() {
	return (
		<Sonner
			position="bottom-right"
			toastOptions={{
				unstyled: true,
				classNames: {
					toast: toastStyles(),
					title: toastTitleStyles(),
					description: toastDescriptionStyles(),
					actionButton: toastActionStyles(),
					success: toastToneStyles({ tone: 'success' }),
					error: toastToneStyles({ tone: 'error' }),
					warning: toastToneStyles({ tone: 'warning' }),
					info: toastToneStyles({ tone: 'info' }),
				},
			}}
		/>
	);
}
