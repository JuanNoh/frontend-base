import { z } from 'zod';
import type { MxIdKind } from './mx-ids.types';
import { checkMxId } from './mx-ids.utils';

export function mxIdSchema(kind: MxIdKind) {
	return z
		.string()
		.trim()
		.toUpperCase()
		.superRefine((value, ctx) => {
			const issue = checkMxId(kind, value);
			if (issue) ctx.addIssue({ code: 'custom', message: issue.message });
		});
}
