import { useNavigate, useSearch } from '@tanstack/react-router';
import type { LoginVariant } from '../types/auth.types';

export function useLoginVariant() {
	const { estilo } = useSearch({ from: '/' });
	const navigate = useNavigate({ from: '/' });

	const setVariant = (variant: LoginVariant) =>
		navigate({ search: { estilo: variant }, replace: true });

	return { variant: estilo, setVariant };
}
