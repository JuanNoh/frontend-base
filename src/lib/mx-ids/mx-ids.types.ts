export type MxIdKind =
	'rfc' | 'rfc-fisica' | 'rfc-moral' | 'curp' | 'clabe' | 'nss' | 'cp' | 'telefono';

export type MxIdSpecKind = Exclude<MxIdKind, 'rfc'>;

export interface MxIdPart {
	label: string;
	format?: string;
	chars: RegExp[];
}

export interface MxIdSpec {
	noun: string;
	description: string;
	numeric?: boolean;
	parts: MxIdPart[];
}

export interface MxIdIssue {
	message: string;
	part?: number;
}

export interface MxIdPartProgress {
	label: string;
	length: number;
	filled: number;
}
