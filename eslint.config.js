import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-config-prettier';

export default tseslint.config(
	{ ignores: ['dist', 'src/routeTree.gen.ts'] },
	{
		files: ['**/*.{ts,tsx}'],
		extends: [
			js.configs.recommended,
			...tseslint.configs.recommended,
			reactHooks.configs.flat.recommended,
			reactRefresh.configs.vite,
			prettier,
		],
		languageOptions: {
			ecmaVersion: 2022,
			globals: globals.browser,
		},
		rules: {
			// nada de any, si de veras lo ocupas justifícalo con un disable comentado
			'@typescript-eslint/no-explicit-any': 'error',
			// ahora sí dejamos exhaustive-deps prendido: TanStack Query elimina
			// la mayoría de los useEffect que daban lata en el proyecto viejo
			'react-hooks/exhaustive-deps': 'warn',
		},
	},
	{
		// los archivos de ruta exportan Route + componente (patrón oficial de
		// TanStack Router) y el plugin del router maneja su propio HMR
		files: ['src/routes/**/*.tsx'],
		rules: {
			'react-refresh/only-export-components': 'off',
		},
	}
);
