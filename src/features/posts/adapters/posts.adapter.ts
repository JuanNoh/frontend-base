import type { Post, PostResponse } from '../types/posts.types';

export function postsAdapter(posts: PostResponse[]): Post[] {
	return posts.map((post) => ({
		id: post.id,
		title: post.title,
		excerpt: post.body.length > 90 ? `${post.body.slice(0, 90)}…` : post.body,
		content: post.body,
		authorId: post.userId,
	}));
}
