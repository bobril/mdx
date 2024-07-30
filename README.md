# mdx

Helper library of components for mdx in Bobril-build

# Change log

## 1.0.0

-   Fixed javascript xss in a href attribute

# Optional parts

## Syntax highlighter

Add `@bobril/highlighter` to dependencies.

```
import * as mdxCodeBlock from "@bobril/mdx/highlighter";
import * as styles from "@bobril/highlighter/styles";

mdxCodeBlock.setDefaultCodeBlock(styles.docco);
```
