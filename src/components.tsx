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
