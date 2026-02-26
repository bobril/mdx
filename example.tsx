import * as b from "bobril";
import * as mdxSyntaxHighlighter from "./highlighter";
import * as styles from "@bobril/highlighter/styles";
import * as mdx from "./index";

mdxSyntaxHighlighter.setDefaultCodeBlock(styles.docco);

const cardSnippet = [
    "type CardProps = {",
    "    title: string;",
    "    body: string;",
    "};",
    "",
    "export function Card({ title, body }: CardProps) {",
    "    return (",
    "        <article className=\"card\">",
    "            <h3>{title}</h3>",
    "            <p>{body}</p>",
    "        </article>",
    "    );",
    "}",
].join("\n");

b.init(() => (
    <>
        <mdx.H level={1}>{"MDX Component Playground"}</mdx.H>
        <mdx.P>
            {"This page shows how "}
            <mdx.Code>{"@bobril/mdx"}</mdx.Code>
            {" can render rich article-like content with overridable components."}
        </mdx.P>
        <mdx.P>
            <mdx.Strong>{"Quick links: "}</mdx.Strong>
            <mdx.A href="https://bobril.com/mdx/" target="_blank">
                {"Live example"}
            </mdx.A>
            {" | "}
            <mdx.A href="https://github.com/bobril/mdx" target="_blank">
                {"GitHub"}
            </mdx.A>
            {" | "}
            <mdx.A href="https://github.com/bobril/highlighter" target="_blank">
                {"Syntax highlighter"}
            </mdx.A>
        </mdx.P>
        <mdx.H level={2}>{"Inline formatting"}</mdx.H>
        <mdx.P>
            {"Mix "}
            <mdx.Em>{"emphasis"}</mdx.Em>
            {", "}
            <mdx.Strong>{"strong text"}</mdx.Strong>
            {", "}
            <mdx.Mark>{"highlighting"}</mdx.Mark>
            {", "}
            <mdx.Ins>{"insertions"}</mdx.Ins>
            {" and "}
            <mdx.Del>{"deletions"}</mdx.Del>
            {" in one paragraph. Formula example: H"}
            <mdx.Sub>{"2"}</mdx.Sub>
            {"O and x"}
            <mdx.Sup>{"2"}</mdx.Sup>
            {" + y"}
            <mdx.Sup>{"2"}</mdx.Sup>
            {" = z"}
            <mdx.Sup>{"2"}</mdx.Sup>
            {"."}
        </mdx.P>
        <mdx.BlockQuote>
            <mdx.P>
                {"\"Keep the markdown simple, move behavior into components.\" "}
                <mdx.Cite>{"Bobril MDX principle"}</mdx.Cite>
            </mdx.P>
        </mdx.BlockQuote>
        <mdx.H level={2}>{"Checklist"}</mdx.H>
        <mdx.Ul>
            <mdx.Li>
                <mdx.Task done={true} />{" Install "}
                <mdx.Code>{"@bobril/mdx"}</mdx.Code>
            </mdx.Li>
            <mdx.Li>
                <mdx.Task done={true} />{" Enable "}
                <mdx.Code>{"@bobril/highlighter"}</mdx.Code>
                {" for fenced code blocks"}
            </mdx.Li>
            <mdx.Li>
                <mdx.Task done={false} />{" Add project-specific component overrides"}
            </mdx.Li>
        </mdx.Ul>
        <mdx.H level={2}>{"Code block"}</mdx.H>
        <mdx.CodeBlock info="tsx" args="linenum from:Card.tsx:1:13">
            {cardSnippet}
        </mdx.CodeBlock>
        <mdx.H level={2}>{"Glossary"}</mdx.H>
        <mdx.Dl>
            <mdx.Dt>
                <mdx.Code>{"P"}</mdx.Code>
            </mdx.Dt>
            <mdx.Dd>{"Paragraph renderer used for plain markdown text blocks."}</mdx.Dd>
            <mdx.Dt>
                <mdx.Code>{"CodeBlock"}</mdx.Code>
            </mdx.Dt>
            <mdx.Dd>{"Block-level code renderer that can be replaced by syntax highlighting."}</mdx.Dd>
            <mdx.Dt>
                <mdx.Code>{"Task"}</mdx.Code>
            </mdx.Dt>
            <mdx.Dd>{"Disabled checkbox component used for markdown task lists."}</mdx.Dd>
        </mdx.Dl>
        <mdx.H level={2}>{"Feature Matrix"}</mdx.H>
        <mdx.Hr />
        <mdx.Table>
            <mdx.Thead>
                <mdx.Tr>
                    <mdx.Th align="left">{"Capability"}</mdx.Th>
                    <mdx.Th align="center">{"Component"}</mdx.Th>
                    <mdx.Th align="right">{"Status"}</mdx.Th>
                </mdx.Tr>
            </mdx.Thead>
            <mdx.Tbody>
                <mdx.Tr>
                    <mdx.Td>{"Headings, paragraphs, lists"}</mdx.Td>
                    <mdx.Td align="center">
                        <mdx.Code>{"H, P, Ul, Ol"}</mdx.Code>
                    </mdx.Td>
                    <mdx.Td align="right">{"Ready"}</mdx.Td>
                </mdx.Tr>
                <mdx.Tr>
                    <mdx.Td>{"Tables and definition lists"}</mdx.Td>
                    <mdx.Td align="center">
                        <mdx.Code>{"Table, Dl"}</mdx.Code>
                    </mdx.Td>
                    <mdx.Td align="right">{"Ready"}</mdx.Td>
                </mdx.Tr>
                <mdx.Tr>
                    <mdx.Td>{"Code highlighting integration"}</mdx.Td>
                    <mdx.Td align="center">
                        <mdx.Code>{"CodeBlock"}</mdx.Code>
                    </mdx.Td>
                    <mdx.Td align="right">{"Optional"}</mdx.Td>
                </mdx.Tr>
            </mdx.Tbody>
        </mdx.Table>
        <mdx.Footer>
            <mdx.P>
                <mdx.A href="https://bobril.com/mdx/" target="_blank">
                    {"Open this playground on bobril.com/mdx"}
                </mdx.A>
            </mdx.P>
        </mdx.Footer>
    </>
));
