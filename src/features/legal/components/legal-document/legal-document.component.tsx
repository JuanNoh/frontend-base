import { Link } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';
import { Alert } from '@/components/ui/alert/alert.component';
import { Button } from '@/components/ui/button/button.component';
import { useGoBack } from '../../hooks/useGoBack';
import {
	legalArticleStyles,
	legalBackStyles,
	legalEyebrowStyles,
	legalFooterStyles,
	legalHeaderStyles,
	legalIntroStyles,
	legalMetaStyles,
	legalPageStyles,
	legalParagraphStyles,
	legalRelatedStyles,
	legalSectionStyles,
	legalSectionTitleStyles,
	legalSectionsStyles,
	legalTitleStyles,
} from './legal-document.styles';
import type { LegalDocumentProps } from './legal-document.types';

export function LegalDocument({ doc }: LegalDocumentProps) {
	const goBack = useGoBack();

	return (
		<main className={legalPageStyles()}>
			<article className={legalArticleStyles()}>
				<Button
					variant="ghost"
					size="sm"
					onClick={goBack}
					className={legalBackStyles()}
				>
					<ArrowLeft />
					Volver
				</Button>
				<header className={legalHeaderStyles()}>
					<span className={legalEyebrowStyles()}>Documento legal</span>
					<h1 className={legalTitleStyles()}>{doc.title}</h1>
					<p className={legalMetaStyles()}>
						Última actualización: {doc.updatedAt}
					</p>
				</header>
				<Alert tone="warning" title="Texto de ejemplo">
					Reemplázalo por el de tu empresa y pide que lo revise un abogado antes
					de publicarlo. Lo que está entre corchetes son datos por llenar.
				</Alert>
				<p className={legalIntroStyles()}>{doc.intro}</p>
				<ol className={legalSectionsStyles()}>
					{doc.sections.map((section, index) => (
						<li key={section.title} className={legalSectionStyles()}>
							<h2 className={legalSectionTitleStyles()}>
								<span>{index + 1}.</span>
								{section.title}
							</h2>
							{section.paragraphs.map((paragraph) => (
								<p key={paragraph} className={legalParagraphStyles()}>
									{paragraph}
								</p>
							))}
						</li>
					))}
				</ol>
				<footer className={legalFooterStyles()}>
					<Link to={doc.related.to} className={legalRelatedStyles()}>
						{doc.related.label}
					</Link>
					<Button variant="secondary" onClick={goBack}>
						<ArrowLeft />
						Volver
					</Button>
				</footer>
			</article>
		</main>
	);
}
