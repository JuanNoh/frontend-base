const MAX_WITHOUT_GAPS = 7;

export function pageItems(page: number, pageCount: number) {
	const all = Array.from({ length: pageCount }, (_, index) => index + 1);
	const pages =
		pageCount <= MAX_WITHOUT_GAPS
			? all
			: all.filter(
					(item) =>
						item === 1 || item === pageCount || Math.abs(item - page) <= 1
				);

	return pages.flatMap((item, index) => {
		const hasGap = index > 0 && item - pages[index - 1] > 1;
		return hasGap
			? [{ key: `gap-${item}` }, { key: `${item}`, page: item }]
			: [{ key: `${item}`, page: item }];
	});
}
