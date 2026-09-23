// Prefixes root-relative paths with the deploy base (e.g. /gbs-website on GitHub Pages).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const u = (path: string) => (path.startsWith('/') ? base + path : path);

// Strips the base from a pathname so pages can compare against '/about' etc.
export const stripBase = (pathname: string) => (base && pathname.startsWith(base) ? pathname.slice(base.length) || '/' : pathname);
