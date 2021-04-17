import * as b from "bobril";

export interface IMdxData extends b.IDataWithChildren {
    id?: string;
    classes?: string[];
}

function htmlElement(tag: string, data?: IMdxData, children?: b.IBobrilChildren) {
    var res = { tag, children: children ?? data?.children } as b.IBobrilNode;
    if (data?.id) {
        res.attrs = { id: data.id };
    }
    if (data?.classes) {
        res.className = data.classes.join(" ");
    }
    return res;
}

export function mdxP(data?: IMdxData, children?: b.IBobrilChildren): b.IBobrilChildren {
    return htmlElement("p", data, children);
}

export interface IMdxHeadingData extends IMdxData {
    level: number;
}

export function mdxH(data?: IMdxHeadingData, children?: b.IBobrilChildren): b.IBobrilChildren {
    return htmlElement("h" + data?.level ?? 1, data, children);
}

export function mdxUl(data?: IMdxData, children?: b.IBobrilChildren): b.IBobrilChildren {
    return htmlElement("ul", data, children);
}

export interface IMdxOrderedListData extends IMdxData {
    type?: "a" | "A" | "i" | "I" | "1";
    start?: number;
}

export function mdxOl(data?: IMdxOrderedListData, children?: b.IBobrilChildren): b.IBobrilChildren {
    var res = htmlElement("ol", data, children);
    if (data?.type) {
        if (res.attrs == undefined) res.attrs = { type: data.type };
        else res.attrs["type"] = data.type;
    }
    if (data?.start != undefined) {
        if (res.attrs == undefined) res.attrs = { start: data.start };
        else res.attrs["start"] = data.start;
    }
    return res;
}

export function mdxLi(data?: IMdxData, children?: b.IBobrilChildren): b.IBobrilChildren {
    return htmlElement("li", data, children);
}

export interface IMdxCodeData extends IMdxData {
    info?: string;
    args?: string;
}

export function mdxCodeBlock(data?: IMdxCodeData, children?: b.IBobrilChildren): b.IBobrilChildren {
    return { tag: "pre", children: htmlElement("code", data, children) };
}

export function mdxHr(data?: IMdxData, children?: b.IBobrilChildren): b.IBobrilChildren {
    return htmlElement("hr", data, children);
}

export function mdxEm(data?: IMdxData, children?: b.IBobrilChildren): b.IBobrilChildren {
    return htmlElement("em", data, children);
}

export function mdxStrong(data?: IMdxData, children?: b.IBobrilChildren): b.IBobrilChildren {
    return htmlElement("strong", data, children);
}

export function mdxSup(data?: IMdxData, children?: b.IBobrilChildren): b.IBobrilChildren {
    return htmlElement("sup", data, children);
}

export function mdxSub(data?: IMdxData, children?: b.IBobrilChildren): b.IBobrilChildren {
    return htmlElement("sub", data, children);
}

export function mdxIns(data?: IMdxData, children?: b.IBobrilChildren): b.IBobrilChildren {
    return htmlElement("ins", data, children);
}

export function mdxDel(data?: IMdxData, children?: b.IBobrilChildren): b.IBobrilChildren {
    return htmlElement("del", data, children);
}

export function mdxMark(data?: IMdxData, children?: b.IBobrilChildren): b.IBobrilChildren {
    return htmlElement("mark", data, children);
}

export function mdxCode(data?: IMdxData, children?: b.IBobrilChildren): b.IBobrilChildren {
    return htmlElement("code", data, children);
}

export interface IMdxImgData extends IMdxData {
    src: string;
    alt?: string;
    title?: string;
}

export function mdxImg(data?: IMdxImgData, children?: b.IBobrilChildren): b.IBobrilChildren {
    if (data == undefined) return undefined;
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

export function mdxA(data?: IMdxAData, children?: b.IBobrilChildren): b.IBobrilChildren {
    if (data == undefined) return undefined;
    var res = htmlElement("a", data, children);
    if (res.attrs == undefined) res.attrs = { href: data.href };
    else res.attrs["href"] = data.href;
    if (data.title) {
        res.attrs["title"] = data.title;
    }
    return res;
}

export function mdxBlockQuote(data?: IMdxData, children?: b.IBobrilChildren): b.IBobrilChildren {
    return htmlElement("blockquote", data, children);
}

export interface IMdxAbbrData extends IMdxData {
    title: string;
}

export function mdxAbbr(data?: IMdxAbbrData, children?: b.IBobrilChildren): b.IBobrilChildren {
    if (data == undefined) return undefined;
    var res = htmlElement("abbr", data, children);
    if (res.attrs == undefined) res.attrs = { title: data.title };
    else res.attrs["title"] = data.title;
    return res;
}

export function mdxTable(data?: IMdxData, children?: b.IBobrilChildren): b.IBobrilChildren {
    return htmlElement("table", data, children);
}

export function mdxThead(data?: IMdxData, children?: b.IBobrilChildren): b.IBobrilChildren {
    return htmlElement("thead", data, children);
}

export function mdxTbody(data?: IMdxData, children?: b.IBobrilChildren): b.IBobrilChildren {
    return htmlElement("tbody", data, children);
}

export interface IMdxColData extends IMdxData {
    width: string;
}

export function mdxCol(data?: IMdxColData, children?: b.IBobrilChildren): b.IBobrilChildren {
    if (data == undefined) return undefined;
    var res = htmlElement("col", data, children);
    b.style(res, { width: data.width });
    return res;
}

export function mdxTr(data?: IMdxData, children?: b.IBobrilChildren): b.IBobrilChildren {
    return htmlElement("tr", data, children);
}

export interface IMdxTdData extends IMdxData {
    align?: "left" | "center" | "right";
    colspan?: number;
    rowspan?: number;
}

function applyTdData(res: b.IBobrilNode, data?: IMdxTdData) {
    if (data?.align) b.style(res, { textAlign: data.align });
    if (data?.colspan) {
        if (res.attrs == undefined) res.attrs = { colspan: data.colspan };
        else res.attrs["colspan"] = data.colspan;
    }
    if (data?.rowspan) {
        if (res.attrs == undefined) res.attrs = { rowspan: data.rowspan };
        else res.attrs["rowspan"] = data.rowspan;
    }
}

export function mdxTh(data?: IMdxTdData, children?: b.IBobrilChildren): b.IBobrilChildren {
    var res = htmlElement("th", data, children);
    applyTdData(res, data);
    return res;
}

export function mdxTd(data?: IMdxTdData, children?: b.IBobrilChildren): b.IBobrilChildren {
    var res = htmlElement("td", data, children);
    applyTdData(res, data);
    return res;
}

export function mdxDl(data?: IMdxData, children?: b.IBobrilChildren): b.IBobrilChildren {
    return htmlElement("dl", data, children);
}

export function mdxDt(data?: IMdxData, children?: b.IBobrilChildren): b.IBobrilChildren {
    return htmlElement("dt", data, children);
}

export function mdxDd(data?: IMdxData, children?: b.IBobrilChildren): b.IBobrilChildren {
    return htmlElement("dd", data, children);
}

export function mdxFixcaption(data?: IMdxData, children?: b.IBobrilChildren): b.IBobrilChildren {
    return htmlElement("figcaption", data, children);
}

export function mdxFooter(data?: IMdxData, children?: b.IBobrilChildren): b.IBobrilChildren {
    return htmlElement("footer", data, children);
}

export function mdxCite(data?: IMdxData, children?: b.IBobrilChildren): b.IBobrilChildren {
    return htmlElement("cite", data, children);
}
