import * as b from "bobril";

export interface IMdxData extends b.IDataWithChildren {
    id?: string;
    classes?: string[];
}

function htmlElement(tag: string, data: IMdxData, children?: b.IBobrilChildren) {
    var res = { tag, children: children ?? data.children } as b.IBobrilNode;
    if (data.id) {
        res.attrs = { id: data.id };
    }
    if (data.classes) {
        res.className = data.classes.join(" ");
    }
    return res;
}

export function mdxP(data: IMdxData, children?: b.IBobrilChildren): b.IBobrilChildren {
    return htmlElement("p", data, children);
}

export interface IMdxHeadingData extends IMdxData {
    level: number;
}

export function mdxH(data: IMdxHeadingData, children?: b.IBobrilChildren): b.IBobrilChildren {
    return htmlElement("h" + data.level, data, children);
}

export function mdxUl(data: IMdxData, children?: b.IBobrilChildren): b.IBobrilChildren {
    return htmlElement("ul", data, children);
}

export interface IMdxOrderedListData extends IMdxData {
    type?: "a" | "A" | "i" | "I" | "1";
    start?: number;
}

export function mdxOl(data: IMdxOrderedListData, children?: b.IBobrilChildren): b.IBobrilChildren {
    var res = htmlElement("ol", data, children);
    if (data.type) {
        if (res.attrs == undefined) res.attrs = { type: data.type };
        else res.attrs["type"] = data.type;
    }
    if (data.start != undefined) {
        if (res.attrs == undefined) res.attrs = { start: data.start };
        else res.attrs["start"] = data.start;
    }
    return res;
}

export function mdxLi(data: IMdxData, children?: b.IBobrilChildren): b.IBobrilChildren {
    return htmlElement("li", data, children);
}

export interface IMdxCodeData extends IMdxData {
    info?: string;
    args?: string;
}

export function mdxCodeBlock(data: IMdxCodeData, children?: b.IBobrilChildren): b.IBobrilChildren {
    return { tag: "pre", children: htmlElement("code", data, children) };
}

export function mdxHr(data: IMdxData, children?: b.IBobrilChildren): b.IBobrilChildren {
    return htmlElement("hr", data, children);
}

export function mdxEm(data: IMdxData, children?: b.IBobrilChildren): b.IBobrilChildren {
    return htmlElement("em", data, children);
}

export function mdxStrong(data: IMdxData, children?: b.IBobrilChildren): b.IBobrilChildren {
    return htmlElement("strong", data, children);
}

export function mdxCode(data: IMdxData, children?: b.IBobrilChildren): b.IBobrilChildren {
    return htmlElement("code", data, children);
}

export interface IMdxImgData extends IMdxData {
    src: string;
    alt?: string;
    title?: string;
}

export function mdxImg(data: IMdxImgData, children?: b.IBobrilChildren): b.IBobrilChildren {
    var res = htmlElement("img", data, children);
    if (res.attrs == undefined) res.attrs = { src: data.src };
    else res.attrs["src"] = data.src;
    if (data.alt) {
        res.attrs["alt"] = data.alt;
    }
    if (data.title) {
        res.attrs["title"] = data.title;
    }
    return res;
}

export interface IMdxAData extends IMdxData {
    href: string;
    title?: string;
}

export function mdxA(data: IMdxAData, children?: b.IBobrilChildren): b.IBobrilChildren {
    var res = htmlElement("a", data, children);
    if (res.attrs == undefined) res.attrs = { href: data.href };
    else res.attrs["href"] = data.href;
    if (data.title) {
        res.attrs["title"] = data.title;
    }
    return res;
}
