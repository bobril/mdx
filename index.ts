import * as b from "bobril";
export * from "./src/components";

import * as c from "./src/components";

export interface IMdxContext {
    P?: b.IComponentFactory<c.IMdxData>;
    H?: b.IComponentFactory<c.IMdxHeadingData>;
    Ul?: b.IComponentFactory<c.IMdxData>;
    Ol?: b.IComponentFactory<c.IMdxOrderedListData>;
    Li?: b.IComponentFactory<c.IMdxData>;
    Br?: b.IBobrilChildren;
    CodeBlock?: b.IComponentFactory<c.IMdxCodeData>;
    Hr?: b.IComponentFactory<c.IMdxData>;
}

export const mdxContext = b.createContext<IMdxContext>({}, "mdx");

export const P = (data: c.IMdxData, children?: b.IBobrilChildren) => {
    return (b.useContext(mdxContext).P ?? c.mdxP)(data, children);
};

export const H = (data: c.IMdxHeadingData, children?: b.IBobrilChildren) => {
    return (b.useContext(mdxContext).H ?? c.mdxH)(data, children);
};

export const Ul = (data: c.IMdxData, children?: b.IBobrilChildren) => {
    return (b.useContext(mdxContext).Ul ?? c.mdxUl)(data, children);
};

export const Ol = (data: c.IMdxOrderedListData, children?: b.IBobrilChildren) => {
    return (b.useContext(mdxContext).Ol ?? c.mdxOl)(data, children);
};

export const Li = (data: c.IMdxData, children?: b.IBobrilChildren) => {
    return (b.useContext(mdxContext).Li ?? c.mdxLi)(data, children);
};

const brNode: b.IBobrilNode = { tag: "br" };

export function Br() {
    return b.useContext(mdxContext).Br ?? brNode;
}

export const CodeBlock = (data: c.IMdxCodeData, children?: b.IBobrilChildren) => {
    return (b.useContext(mdxContext).CodeBlock ?? c.mdxCodeBlock)(data, children);
};

export const Hr = (data: c.IMdxData, children?: b.IBobrilChildren) => {
    return (b.useContext(mdxContext).Hr ?? c.mdxHr)(data, children);
};
