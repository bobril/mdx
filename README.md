# mdx

Helper library of components for mdx in Bobril-build

## Example

Live example: [https://bobril.com/mdx/](https://bobril.com/mdx/)

## Change log

### 2.0.0

-   Removed built-in Mermaid integration from `@bobril/mdx`.
-   Mermaid integration moved to `@bobril/mdx-mermaid`.

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

Mermaid support is now provided by `@bobril/mdx-mermaid`.

Migration:
-   old import: `@bobril/mdx/mermaid.tsx`
-   new import: `@bobril/mdx-mermaid`

It should be combined with `@bobril/highlighter` by installing Mermaid support after highlighter.

```ts
import { install } from "@bobril/mdx-mermaid";

install();

// this is optional
import * as mermaid from "@bobril/mermaid";
mermaid.setTheme("forest");
```
