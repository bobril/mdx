declare module "*.mdx" {
    export const metadata: Record<string, any>;
    const content: import("bobril").IComponentFactory<Record<string, any>>;
    export default content;
}
