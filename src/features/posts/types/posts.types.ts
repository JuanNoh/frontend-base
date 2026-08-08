export interface PostResponse {
	userId: number;
	id: number;
	title: string;
	body: string;
}

export interface Post {
	id: number;
	title: string;
	excerpt: string;
	content: string;
	authorId: number;
}
