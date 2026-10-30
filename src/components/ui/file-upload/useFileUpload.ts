import { useState, type ChangeEvent, type DragEvent } from 'react';
import type { UseFileUploadOptions } from './file-upload.types';
import { fileId, reviewFiles } from './file-upload.utils';

export function useFileUpload({
	files,
	onFilesChange,
	accept,
	multiple,
	maxSizeMb,
}: UseFileUploadOptions) {
	const [isDragging, setIsDragging] = useState(false);
	const [rejected, setRejected] = useState<string[]>([]);

	const addFiles = (incoming: File[]) => {
		const picked = multiple ? incoming : incoming.slice(0, 1);
		const review = reviewFiles(picked, accept, maxSizeMb);
		const known = new Set(files.map(fileId));
		const fresh = review.accepted.filter((file) => !known.has(fileId(file)));

		setRejected(review.rejected);
		if (fresh.length) onFilesChange(multiple ? [...files, ...fresh] : fresh);
	};

	return {
		isDragging,
		rejected: rejected.join(' · ') || undefined,
		remove: (file: File) => {
			setRejected([]);
			onFilesChange(files.filter((item) => fileId(item) !== fileId(file)));
		},
		onInputChange: (event: ChangeEvent<HTMLInputElement>) => {
			addFiles([...(event.target.files ?? [])]);
			event.target.value = '';
		},
		dropzone: {
			onDragOver: (event: DragEvent<HTMLElement>) => {
				event.preventDefault();
				setIsDragging(true);
			},
			onDragLeave: (event: DragEvent<HTMLElement>) => {
				if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
					setIsDragging(false);
				}
			},
			onDrop: (event: DragEvent<HTMLElement>) => {
				event.preventDefault();
				setIsDragging(false);
				addFiles([...event.dataTransfer.files]);
			},
		},
	};
}
