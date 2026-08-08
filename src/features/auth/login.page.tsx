import { LoginForm } from './components/login-form/login-form.component';

export function LoginPage() {
	return (
		<main className="flex min-h-full items-center justify-center p-4">
			<section className="shadow-card w-full max-w-sm rounded-2xl bg-white p-8">
				<h1 className="text-ink mb-1 text-2xl font-bold">Bienvenido</h1>
				<p className="text-ink-muted mb-6 text-sm">Demo del stack 2026</p>
				<LoginForm />
			</section>
		</main>
	);
}
