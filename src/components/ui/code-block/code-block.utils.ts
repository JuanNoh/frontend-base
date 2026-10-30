import type { CodeToken } from './code-block.types';

const TOKEN_PATTERN =
	/(\/\/.*$)|('(?:[^'\\\n]|\\.)*'|"(?:[^"\\\n]|\\.)*"|`(?:[^`\\]|\\.)*`)|\b(as|async|await|const|default|else|export|extends|false|from|function|if|import|interface|let|new|null|return|true|type|undefined)\b|(<\/?[A-Z][\w.]*)/gm;

const GROUP_KINDS = ['comment', 'string', 'keyword', 'tag'] as const;

export function tokenizeCode(code: string) {
	const tokens: CodeToken[] = [];
	let cursor = 0;

	for (const match of code.matchAll(TOKEN_PATTERN)) {
		if (match.index > cursor) {
			tokens.push({ text: code.slice(cursor, match.index), kind: 'plain' });
		}
		const group = match.slice(1).findIndex(Boolean);
		tokens.push({ text: match[0], kind: GROUP_KINDS[group] });
		cursor = match.index + match[0].length;
	}
	if (cursor < code.length) tokens.push({ text: code.slice(cursor), kind: 'plain' });

	return tokens;
}
