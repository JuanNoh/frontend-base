import { createFileRoute } from '@tanstack/react-router';
import { PostsPage } from '@/features/posts/posts.page';

export const Route = createFileRoute('/_auth/posts')({
	component: PostsPage,
});
