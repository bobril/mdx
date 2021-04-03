import * as b from "bobril";

export interface IMdxData extends b.IDataWithChildren {
    id?: string;
    classes?: string[];
}

export function mdxP(data: IMdxData, children?: b.IBobrilChildren): b.IBobrilChildren {
    var res = { tag: "p", children: children ?? data.children } as b.IBobrilNode;
    if (data.id) {
        res.attrs = { id: data.id };
    }
    if (data.classes) {
        res.className = data.classes.join(" ");
    }
    return res;
}
