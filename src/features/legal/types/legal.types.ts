export type LegalDocId = 'terminos' | 'privacidad';

export interface LegalSection {
	title: string;
	paragraphs: string[];
}

export interface LegalDoc {
	title: string;
	updatedAt: string;
	intro: string;
	sections: LegalSection[];
	related: { to: '/terminos' | '/privacidad'; label: string };
}
