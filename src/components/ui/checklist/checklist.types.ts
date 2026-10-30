export interface ChecklistItem {
	label: string;
	status: 'done' | 'running' | 'pending';
}

export interface ChecklistProps {
	items: ChecklistItem[];
	className?: string;
}
