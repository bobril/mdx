import * as b from "bobril";
import * as mdx from "./index";
import * as high from "@bobril/highlighter";

function noop() {
    return undefined;
}

export function buildCodeBlock(style?: high.HighlightStyle | undefined, showLineNumbers?: boolean, wrap?: boolean) {
    return (data?: mdx.IMdxCodeData, children?: b.IBobrilChildren) => {
        var lang = data?.info;
        var reallyShowLineNumbers = showLineNumbers || false;
        var args = data?.args || "";
        var lineNumIdx = args.indexOf("linenum");
        var startingLineNumber = 1;
        if (lineNumIdx >= 0) {
            reallyShowLineNumbers = true;
            if (args[lineNumIdx + 7] == ":") {
                startingLineNumber = parseInt(args.substr(lineNumIdx + 8));
            }
        }
        return (
            <high.Highlighter
                language={lang}
                style={style}
                showLineNumbers={reallyShowLineNumbers}
                startingLineNumber={startingLineNumber}
                lineContentStyle={wrap ? undefined : noop}
            >
                {"" + children}
            </high.Highlighter>
        );
    };
}

export function setDefaultCodeBlock(
    style?: high.HighlightStyle | undefined,
    showLineNumbers?: boolean,
    wrap?: boolean
) {
    mdx.defaultComponents.CodeBlock = buildCodeBlock(style, showLineNumbers, wrap);
}
