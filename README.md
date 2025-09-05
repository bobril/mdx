# mdx

Helper library of components for mdx in Bobril-build

## Change log

### 1.2.0

-   Added optional support for mermaid diagrams

### 1.0.0

-   Fixed javascript xss in a href attribute

## Optional parts

### Syntax highlighter

Add `@bobril/highlighter` to dependencies.

```ts
import * as mdxCodeBlock from "@bobril/mdx/highlighter";
import * as styles from "@bobril/highlighter/styles";

mdxCodeBlock.setDefaultCodeBlock(styles.docco);
```

### Mermaid diagrams

It should be combined with `@bobril/highlighter` by installing it after highlighter. Add `@bobril/mermaid` to dependencies if you want to customize options for mermaid.

```ts
import { install } from "@bobril/mdx/mermaid.tsx";

install();

// this is optional
import * as mermaid from "@bobril/mermaid";
mermaid.setTheme("forest");
```
