export interface SourceDrawerProps {
	open: boolean;
	onClose: () => void;
	title: string;
	demo: string;
	api?: string[];
}
