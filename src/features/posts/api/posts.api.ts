import { apiClient } from '@/lib/api/api-client';
import { postsAdapter } from '../adapters/posts.adapter';
import type { PostResponse } from '../types/posts.types';

export async function getPosts() {
	const response = await apiClient.get('posts').json<PostResponse[]>();
	return postsAdapter(response);
}
