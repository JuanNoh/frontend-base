import type { Post } from '../../types/posts.types';

interface PostCardProps {
	post: Post;
	onClick: () => void;
}

export function PostCard({ post, onClick }: PostCardProps) {
	return (
		<article
			onClick={onClick}
			className="shadow-card cursor-pointer rounded-2xl bg-white p-5 transition-transform hover:-translate-y-0.5"
		>
			<span className="bg-info-soft text-info rounded-full px-2 py-0.5 text-xs font-medium">
				Autor #{post.authorId}
			</span>
			<h2 className="text-ink mt-2 text-base font-bold capitalize">{post.title}</h2>
			<p className="text-ink-muted mt-1 text-sm">{post.excerpt}</p>
		</article>
	);
}
