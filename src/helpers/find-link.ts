export function findLinks(text: string) {
	const linkRegex = /https?:\/\/[^\s]+/g; // Regular expression for matching URLs
	// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions, @typescript-eslint/prefer-nullish-coalescing
	const links = text.match(linkRegex) || [];
	return links;
}
