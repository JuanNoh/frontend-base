export interface FileUploadProps {
	files: File[];
	onFilesChange: (files: File[]) => void;
	accept?: string;
	multiple?: boolean;
	maxSizeMb?: number;
	label?: string;
	hint?: string;
	error?: string;
	id?: string;
	className?: string;
}

export type UseFileUploadOptions = Pick<
	FileUploadProps,
	'files' | 'onFilesChange' | 'accept' | 'multiple' | 'maxSizeMb'
>;
