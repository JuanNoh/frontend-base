import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import path from 'node:path';

export default defineConfig({
	plugins: [
		// el orden importa: el router genera routeTree.gen.ts antes de que react compile
		tanstackRouter({ target: 'react', autoCodeSplitting: true }),
		react(),
		tailwindcss(),
	],
	resolve: {
		alias: {
			'@': path.resolve(import.meta.dirname, './src'),
		},
	},
});
