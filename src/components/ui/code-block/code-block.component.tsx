import { Check, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button/button.component';
import { cn } from '@/lib/utils/cn';
import {
	codeBlockHeaderStyles,
	codeBlockPreStyles,
	codeBlockStyles,
	codeTokenStyles,
} from './code-block.styles';
import type { CodeBlockProps } from './code-block.types';
import { useCodeBlock } from './useCodeBlock';

export function CodeBlock({ code, label, className }: CodeBlockProps) {
	const block = useCodeBlock(code);

	return (
		<figure className={cn(codeBlockStyles(), className)}>
			<figcaption className={codeBlockHeaderStyles()}>
				{label}
				<Button variant="ghost" size="sm" onClick={block.copy}>
					{block.isCopied ? <Check /> : <Copy />}
					{block.isCopied ? 'Copiado' : 'Copiar'}
				</Button>
			</figcaption>
			<pre className={codeBlockPreStyles()}>
				<code>
					{block.tokens.map((token, index) => (
						<span
							key={index}
							className={codeTokenStyles({ kind: token.kind })}
						>
							{token.text}
						</span>
					))}
				</code>
			</pre>
		</figure>
	);
}
