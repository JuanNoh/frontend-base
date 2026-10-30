export type CodeTokenKind = 'plain' | 'comment' | 'string' | 'keyword' | 'tag';

export interface CodeToken {
	text: string;
	kind: CodeTokenKind;
}

export interface CodeBlockProps {
	code: string;
	label?: string;
	className?: string;
}
