import { CircleAlert, CircleCheck } from 'lucide-react';
import { Input } from '@/components/ui/input/input.component';
import { cn } from '@/lib/utils/cn';
import {
	mxIdFieldStyles,
	mxIdFillStyles,
	mxIdKindStyles,
	mxIdPartLabelStyles,
	mxIdPartsStyles,
	mxIdPartStyles,
	mxIdStatusStyles,
	mxIdTrackStyles,
	mxIdTrailStyles,
} from './mx-id-input.styles';
import type { MxIdInputProps } from './mx-id-input.types';
import { useMxIdInput } from './useMxIdInput';

export function MxIdInput({
	kind,
	hint,
	error,
	ref,
	value,
	onChange,
	className,
	...rest
}: MxIdInputProps) {
	const { setRef, ...field } = useMxIdInput({ kind, value, ref, onChange, hint });

	return (
		<Input
			{...rest}
			ref={setRef}
			value={value}
			onChange={field.onChange}
			inputMode={field.numeric ? 'numeric' : 'text'}
			autoCapitalize="characters"
			autoComplete="off"
			autoCorrect="off"
			spellCheck={false}
			hint={field.hint}
			error={error ?? field.issue?.message}
			className={cn(mxIdFieldStyles(), className)}
			trailing={
				<span className={mxIdTrailStyles()}>
					{field.detected && (
						<span className={mxIdKindStyles()}>{field.detected}</span>
					)}
					<span>
						{field.length}/{field.total}
					</span>
					{field.status === 'valid' && (
						<CircleCheck className={mxIdStatusStyles({ status: 'valid' })} />
					)}
					{field.status === 'invalid' && (
						<CircleAlert
							className={mxIdStatusStyles({ status: 'invalid' })}
						/>
					)}
				</span>
			}
			below={
				field.parts.length > 1 && (
					<div aria-hidden="true" className={mxIdPartsStyles()}>
						{field.parts.map((part) => (
							<span
								key={part.label}
								className={mxIdPartStyles()}
								style={{ flexGrow: part.length }}
							>
								<span className={mxIdTrackStyles()}>
									<span
										className={mxIdFillStyles({ state: part.state })}
										style={{
											width: `${(part.filled / part.length) * 100}%`,
										}}
									/>
								</span>
								<span
									className={mxIdPartLabelStyles({ state: part.state })}
								>
									{part.label}
								</span>
							</span>
						))}
					</div>
				)
			}
		/>
	);
}
