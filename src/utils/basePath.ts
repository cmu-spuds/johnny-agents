/**
 * Get the base path for assets based on the environment
 * This ensures images work both locally and when deployed to a subdirectory
 */
export function getBasePath(): string {
  if (typeof window !== 'undefined') {
    // Client-side: use the current pathname to determine base path
    const pathname = window.location.pathname;
    if (pathname.startsWith('/why-johnny-can-t-use-agents')) {
      return '/why-johnny-can-t-use-agents';
    }
    return '';
  }
  
  // Server-side: use environment variable or process.env.NODE_ENV
  return process.env.NODE_ENV === 'production' ? '/why-johnny-can-t-use-agents' : '';
}

/**
 * Get the full path for an asset (image, etc.)
 */
export function getAssetPath(path: string): string {
  const basePath = getBasePath();
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}
