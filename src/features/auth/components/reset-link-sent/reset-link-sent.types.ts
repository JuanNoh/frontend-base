export interface ResetLinkSentProps {
	resend: {
		onClick: () => void;
		isSubmitting: boolean;
		disabled: boolean;
		label: string;
	};
	onChangeEmail: () => void;
}
