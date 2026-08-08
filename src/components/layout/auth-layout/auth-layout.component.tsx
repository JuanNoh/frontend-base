import { Outlet, useNavigate } from '@tanstack/react-router';
import { useAuthStore } from '@/stores/auth.store';

export function AuthLayout() {
	const navigate = useNavigate();
	const { user, logout } = useAuthStore();

	const handleLogout = () => {
		logout();
		navigate({ to: '/' });
	};

	return (
		<div className="flex min-h-full flex-col">
			<header className="border-line-soft flex items-center justify-between border-b bg-white px-6 py-3">
				<span className="text-primary text-sm font-bold">Frontend Base</span>
				<div className="flex items-center gap-4">
					<span className="text-ink-muted text-sm">{user?.fullName}</span>
					<button
						onClick={handleLogout}
						className="text-danger cursor-pointer text-sm font-medium hover:underline"
					>
						Cerrar sesión
					</button>
				</div>
			</header>
			<Outlet />
		</div>
	);
}
