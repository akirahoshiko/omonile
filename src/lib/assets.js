// Paths in data/projects.js are relative to /public, so they also work under a sub-path.
export const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`;
