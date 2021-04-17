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
    Em?: b.IComponentFactory<c.IMdxData>;
    Strong?: b.IComponentFactory<c.IMdxData>;
    Sub?: b.IComponentFactory<c.IMdxData>;
    Sup?: b.IComponentFactory<c.IMdxData>;
    Ins?: b.IComponentFactory<c.IMdxData>;
    Del?: b.IComponentFactory<c.IMdxData>;
    Mark?: b.IComponentFactory<c.IMdxData>;
    Code?: b.IComponentFactory<c.IMdxData>;
    Img?: b.IComponentFactory<c.IMdxImgData>;
    A?: b.IComponentFactory<c.IMdxAData>;
    BlockQuote?: b.IComponentFactory<c.IMdxData>;
    Abbr?: b.IComponentFactory<c.IMdxAbbrData>;
    Table?: b.IComponentFactory<c.IMdxData>;
    Thead?: b.IComponentFactory<c.IMdxData>;
    Tbody?: b.IComponentFactory<c.IMdxData>;
    Col?: b.IComponentFactory<c.IMdxColData>;
    Tr?: b.IComponentFactory<c.IMdxData>;
    Th?: b.IComponentFactory<c.IMdxTdData>;
    Td?: b.IComponentFactory<c.IMdxTdData>;
    Dl?: b.IComponentFactory<c.IMdxData>;
    Dt?: b.IComponentFactory<c.IMdxData>;
    Dd?: b.IComponentFactory<c.IMdxData>;
    Figcaption?: b.IComponentFactory<c.IMdxData>;
    Footer?: b.IComponentFactory<c.IMdxData>;
}

export const mdxContext = b.createContext<IMdxContext>({}, "mdx");

export const P = (data?: c.IMdxData, children?: b.IBobrilChildren) => {
    return (b.useContext(mdxContext).P ?? c.mdxP)(data, children);
};

export const H = (data?: c.IMdxHeadingData, children?: b.IBobrilChildren) => {
    return (b.useContext(mdxContext).H ?? c.mdxH)(data, children);
};

export const Ul = (data?: c.IMdxData, children?: b.IBobrilChildren) => {
    return (b.useContext(mdxContext).Ul ?? c.mdxUl)(data, children);
};

export const Ol = (data?: c.IMdxOrderedListData, children?: b.IBobrilChildren) => {
    return (b.useContext(mdxContext).Ol ?? c.mdxOl)(data, children);
};

export const Li = (data?: c.IMdxData, children?: b.IBobrilChildren) => {
    return (b.useContext(mdxContext).Li ?? c.mdxLi)(data, children);
};

const brNode: b.IBobrilNode = { tag: "br" };

export function Br() {
    return b.useContext(mdxContext).Br ?? brNode;
}

export const CodeBlock = (data?: c.IMdxCodeData, children?: b.IBobrilChildren) => {
    return (b.useContext(mdxContext).CodeBlock ?? c.mdxCodeBlock)(data, children);
};

export const Hr = (data?: c.IMdxData, children?: b.IBobrilChildren) => {
    return (b.useContext(mdxContext).Hr ?? c.mdxHr)(data, children);
};

export const Em = (data?: c.IMdxData, children?: b.IBobrilChildren) => {
    return (b.useContext(mdxContext).Em ?? c.mdxEm)(data, children);
};

export const Strong = (data?: c.IMdxData, children?: b.IBobrilChildren) => {
    return (b.useContext(mdxContext).Strong ?? c.mdxStrong)(data, children);
};

export const Sub = (data?: c.IMdxData, children?: b.IBobrilChildren) => {
    return (b.useContext(mdxContext).Sub ?? c.mdxSub)(data, children);
};

export const Sup = (data?: c.IMdxData, children?: b.IBobrilChildren) => {
    return (b.useContext(mdxContext).Sup ?? c.mdxSup)(data, children);
};

export const Ins = (data?: c.IMdxData, children?: b.IBobrilChildren) => {
    return (b.useContext(mdxContext).Ins ?? c.mdxIns)(data, children);
};

export const Del = (data?: c.IMdxData, children?: b.IBobrilChildren) => {
    return (b.useContext(mdxContext).Del ?? c.mdxDel)(data, children);
};

export const Mark = (data?: c.IMdxData, children?: b.IBobrilChildren) => {
    return (b.useContext(mdxContext).Mark ?? c.mdxMark)(data, children);
};

export const Code = (data?: c.IMdxData, children?: b.IBobrilChildren) => {
    return (b.useContext(mdxContext).Code ?? c.mdxCode)(data, children);
};

export const Img = (data?: c.IMdxImgData, children?: b.IBobrilChildren) => {
    return (b.useContext(mdxContext).Img ?? c.mdxImg)(data, children);
};

export const A = (data?: c.IMdxAData, children?: b.IBobrilChildren) => {
    return (b.useContext(mdxContext).A ?? c.mdxA)(data, children);
};

export const BlockQuote = (data?: c.IMdxData, children?: b.IBobrilChildren) => {
    return (b.useContext(mdxContext).BlockQuote ?? c.mdxBlockQuote)(data, children);
};

export const Abbr = (data?: c.IMdxAbbrData, children?: b.IBobrilChildren) => {
    return (b.useContext(mdxContext).Abbr ?? c.mdxAbbr)(data, children);
};

export const Table = (data?: c.IMdxData, children?: b.IBobrilChildren) => {
    return (b.useContext(mdxContext).Table ?? c.mdxTable)(data, children);
};

export const Thead = (data?: c.IMdxData, children?: b.IBobrilChildren) => {
    return (b.useContext(mdxContext).Thead ?? c.mdxThead)(data, children);
};

export const Tbody = (data?: c.IMdxData, children?: b.IBobrilChildren) => {
    return (b.useContext(mdxContext).Tbody ?? c.mdxTbody)(data, children);
};

export const Col = (data?: c.IMdxColData, children?: b.IBobrilChildren) => {
    return (b.useContext(mdxContext).Col ?? c.mdxCol)(data, children);
};

export const Tr = (data?: c.IMdxData, children?: b.IBobrilChildren) => {
    return (b.useContext(mdxContext).Tr ?? c.mdxTr)(data, children);
};

export const Th = (data?: c.IMdxTdData, children?: b.IBobrilChildren) => {
    return (b.useContext(mdxContext).Th ?? c.mdxTh)(data, children);
};

export const Td = (data?: c.IMdxTdData, children?: b.IBobrilChildren) => {
    return (b.useContext(mdxContext).Td ?? c.mdxTd)(data, children);
};

export const Dl = (data?: c.IMdxData, children?: b.IBobrilChildren) => {
    return (b.useContext(mdxContext).Dl ?? c.mdxDl)(data, children);
};

export const Dt = (data?: c.IMdxData, children?: b.IBobrilChildren) => {
    return (b.useContext(mdxContext).Dt ?? c.mdxDt)(data, children);
};

export const Dd = (data?: c.IMdxData, children?: b.IBobrilChildren) => {
    return (b.useContext(mdxContext).Dd ?? c.mdxDd)(data, children);
};

export const Figcaption = (data?: c.IMdxData, children?: b.IBobrilChildren) => {
    return (b.useContext(mdxContext).Figcaption ?? c.mdxFixcaption)(data, children);
};

export const Footer = (data?: c.IMdxData, children?: b.IBobrilChildren) => {
    return (b.useContext(mdxContext).Footer ?? c.mdxFooter)(data, children);
};
