import * as b from "bobril";
export * from "./src/components";

import * as c from "./src/components";

export interface IMdxContext {
    P?: b.IComponentFactory<c.IMdxData>;
    H?: b.IComponentFactory<c.IMdxHeadingData>;
}

export const mdxContext = b.createContext<IMdxContext>({}, "mdx");

export const P = (data: c.IMdxData, children?: b.IBobrilChildren) => {
    return (b.useContext(mdxContext).P ?? c.mdxP)(data, children);
};

export const H = (data: c.IMdxHeadingData, children?: b.IBobrilChildren) => {
    return (b.useContext(mdxContext).H ?? c.mdxH)(data, children);
};
