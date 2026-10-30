import { LegalDocument } from './components/legal-document/legal-document.component';
import { LEGAL_DOCS } from './data/legal-docs';

export function TermsPage() {
	return <LegalDocument doc={LEGAL_DOCS.terminos} />;
}

export function PrivacyPage() {
	return <LegalDocument doc={LEGAL_DOCS.privacidad} />;
}
