import { cn } from '@/lib/utils/cn';
import {
	rollingSrStyles,
	rollingColumnStyles,
	rollingDigitStyles,
	rollingNumberStyles,
} from './rolling-number.styles';
import type { RollingNumberProps } from './rolling-number.types';
import { DIGITS, splitChars } from './rolling-number.utils';

export function RollingNumber({ value, className }: RollingNumberProps) {
	return (
		<span className={cn(rollingNumberStyles(), className)}>
			<span className={rollingSrStyles()}>{value}</span>
			{splitChars(value).map((item, index) =>
				item.isDigit ? (
					<span
						key={item.key}
						aria-hidden="true"
						className={rollingDigitStyles()}
					>
						<span
							className={rollingColumnStyles()}
							style={{
								translate: `0 -${Number(item.char)}em`,
								transitionDelay: `${index * 35}ms`,
							}}
						>
							{DIGITS.map((digit) => (
								<span key={digit}>{digit}</span>
							))}
						</span>
					</span>
				) : (
					<span key={item.key} aria-hidden="true">
						{item.char}
					</span>
				)
			)}
		</span>
	);
}
