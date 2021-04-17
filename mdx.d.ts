declare module "*.mdxb" {
    export const metadata: Record<string, any>;
    const content: import("bobril").IComponentFactory<Record<string, any>>;
    export default content;
}

declare module "mdxb:*" {
    const content: Array<{
        name: string;
        metadata: Record<string, any>;
        factory: Promise<import("bobril").IComponentFactory<Record<string, any>>>;
    }>;
    export default content;
}
