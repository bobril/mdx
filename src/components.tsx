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
