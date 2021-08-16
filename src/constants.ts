export const basePath = "/";

const applyBasePathTo = (path: string) => `${basePath}${path}`;
export const productsPath = applyBasePathTo("products");
export const aboutPath = applyBasePathTo("about");
export const contactPath = applyBasePathTo("contact");
