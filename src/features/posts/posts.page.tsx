import { useState } from 'react';
import { Modal } from '@/components/ui/modal/modal.component';
import { Spinner } from '@/components/ui/spinner/spinner.component';
import { usePosts } from './hooks/usePosts';
import { PostCard } from './components/post-card/post-card.component';
import type { Post } from './types/posts.types';

export function PostsPage() {
	const { data: posts, isPending, isError } = usePosts();
	const [selectedPost, setSelectedPost] = useState<Post | null>(null);

	if (isPending) {
		return (
			<div className="flex items-center gap-2 p-8">
				<Spinner />
				<span className="text-ink-muted text-sm">Cargando posts…</span>
			</div>
		);
	}

	if (isError) {
		return (
			<p className="text-danger p-8 text-sm">
				No se pudieron cargar los posts, échale un ojo a tu conexión.
			</p>
		);
	}

	return (
		<>
			<section className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
				{posts.slice(0, 12).map((post) => (
					<PostCard
						key={post.id}
						post={post}
						onClick={() => setSelectedPost(post)}
					/>
				))}
			</section>
			<Modal
				open={selectedPost !== null}
				onClose={() => setSelectedPost(null)}
				title={selectedPost?.title ?? ''}
				description={`Autor #${selectedPost?.authorId}`}
			>
				<p className="text-ink text-sm">{selectedPost?.content}</p>
			</Modal>
		</>
	);
}
