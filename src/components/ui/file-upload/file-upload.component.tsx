import { UploadCloud, X } from 'lucide-react';
import { Button } from '@/components/ui/button/button.component';
import { buttonStyles } from '@/components/ui/button/button.styles';
import { FieldError } from '@/components/ui/field-error/field-error.component';
import { FieldHint } from '@/components/ui/field-hint/field-hint.component';
import { FieldLabel } from '@/components/ui/field-label/field-label.component';
import { fieldStyles } from '@/components/ui/input/input.styles';
import { useFieldIds } from '@/components/ui/input/useFieldIds';
import { cn } from '@/lib/utils/cn';
import {
	dropzoneIconStyles,
	dropzoneStyles,
	dropzoneTextStyles,
	fileInputStyles,
	fileListStyles,
	fileNameStyles,
	fileRowStyles,
	fileSizeStyles,
	fileTypeStyles,
} from './file-upload.styles';
import type { FileUploadProps } from './file-upload.types';
import { describeLimits, fileId, fileType, formatBytes } from './file-upload.utils';
import { useFileUpload } from './useFileUpload';

export function FileUpload({
	files,
	onFilesChange,
	accept,
	multiple,
	maxSizeMb,
	label,
	hint,
	error,
	id,
	className,
}: FileUploadProps) {
	const upload = useFileUpload({ files, onFilesChange, accept, multiple, maxSizeMb });
	const shownError = error ?? upload.rejected;
	const { controlId, hintId, errorId, describedBy } = useFieldIds({
		id,
		hint,
		error: shownError,
	});
	const limits = describeLimits(accept, maxSizeMb);

	return (
		<div className={cn(fieldStyles(), className)}>
			<FieldLabel htmlFor={controlId}>{label}</FieldLabel>
			<label
				{...upload.dropzone}
				className={dropzoneStyles({
					dragging: upload.isDragging,
					invalid: !!shownError && !upload.isDragging,
				})}
			>
				<span className={dropzoneIconStyles({ dragging: upload.isDragging })}>
					<UploadCloud />
				</span>
				<span className={dropzoneTextStyles()}>
					<b>{upload.isDragging ? 'Suéltalos aquí' : 'Arrastra aquí'}</b>
					{limits && <small>{limits}</small>}
				</span>
				<span className={buttonStyles({ variant: 'secondary', size: 'sm' })}>
					Elegir {multiple ? 'archivos' : 'archivo'}
				</span>
				<input
					id={controlId}
					type="file"
					accept={accept}
					multiple={multiple}
					aria-invalid={!!shownError}
					aria-describedby={describedBy}
					onChange={upload.onInputChange}
					className={fileInputStyles()}
				/>
			</label>
			{files.length > 0 && (
				<ul className={fileListStyles()}>
					{files.map((file) => (
						<li key={fileId(file)} className={fileRowStyles()}>
							<span className={fileTypeStyles()}>
								{fileType(file.name)}
							</span>
							<span className={fileNameStyles()}>{file.name}</span>
							<span className={fileSizeStyles()}>
								{formatBytes(file.size)}
							</span>
							<Button
								variant="ghost"
								size="icon"
								aria-label={`Quitar ${file.name}`}
								onClick={() => upload.remove(file)}
							>
								<X />
							</Button>
						</li>
					))}
				</ul>
			)}
			<FieldHint id={hintId}>{hint}</FieldHint>
			<FieldError id={errorId} error={shownError} />
		</div>
	);
}
