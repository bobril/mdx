import * as b from "bobril";
import * as mdxCodeBlock from "./highlighter";
import * as styles from "@bobril/highlighter/styles";

mdxCodeBlock.setDefaultCodeBlock(styles.docco);

import * as mdx from "./index";

b.init(() => (
    <>
        <mdx.H level={1}>{"Example for @bobril/mdx"}</mdx.H>
        <mdx.P>
            {"Author "}
            <mdx.A href="mailto:boris.letocha@gmail.com">{"boris.letocha@gmail.com"}</mdx.A>
        </mdx.P>
        <mdx.P>
            <mdx.A href="https://bobril.com" target="_blank">
                bobril.com
            </mdx.A>
        </mdx.P>
        <mdx.Ol>
            <mdx.Li>{"agggg"}</mdx.Li>
            <mdx.Li>{"dfgsdhf"}</mdx.Li>
            <mdx.Li>{"ffdsfgf"}</mdx.Li>
        </mdx.Ol>
        <mdx.P>
            {"sin"}
            <mdx.Sup>{"2"}</mdx.Sup>
            {"x + cos"}
            <mdx.Sup>{"2"}</mdx.Sup>
            {"x = 1"}
        </mdx.P>
        <mdx.CodeBlock info="ts" args="linenum:99">
            {'let nice = "code";\nconsole.log(nice);'}
        </mdx.CodeBlock>
        <mdx.CodeBlock info="tsx" args="linenum from:app.tsx:9:14">
            {'<Sample name="boris" />);'}
        </mdx.CodeBlock>
        <mdx.CodeBlock info="tsx" args="linenum">
            {
                "function Lazy({ import: from }: { import: () => Promise<b.IComponentFactory<any>> }) {\n    var factory = b.useState<b.IComponentFactory<any> | undefined>(undefined);\n    b.useEffect(() => {\n        from().then((f) => factory(f));\n    });\n    return factory() != undefined ? factory()!() : <div>Loading ...</div>;\n}\n\nfunction Blog({ blog }: { blog: readonly [() => Promise<b.IComponentFactory<any>>, { name: string }] }) {\n    return (\n        <div>\n            <h2>{blog[1].name}</h2>\n            <Lazy import={blog[0]} />\n        </div>\n    );\n}"
            }
        </mdx.CodeBlock>
        <mdx.Hr />
        <mdx.Table>
            <mdx.Thead>
                <mdx.Tr>
                    <mdx.Th>{"asdsa"}</mdx.Th>
                    <mdx.Th>{"asdad"}</mdx.Th>
                </mdx.Tr>
            </mdx.Thead>
            <mdx.Tbody>
                <mdx.Tr>
                    <mdx.Td>{"asdsda"}</mdx.Td>
                    <mdx.Td>{"asd dda"}</mdx.Td>
                </mdx.Tr>
            </mdx.Tbody>
        </mdx.Table>
    </>
));
