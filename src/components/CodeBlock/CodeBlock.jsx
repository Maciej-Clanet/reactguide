import "./CodeBlock.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// This component uses a third party library to create code syntax highlighting.
// Don't worry about it, not important to understand it, just important to be able to use it
export default function CodeBlock({
  language = "jsx",
  title,
  code,
  showLineNumbers = false,
}) {
  return (
    <div className="code-block scrollable">
      {title && <div className="code-block-title">{title}</div>}

      <SyntaxHighlighter
        language={language}
        style={oneDark}
        showLineNumbers={showLineNumbers}
        customStyle={{
          background: "transparent",
          margin: 0,
        }}
        codeTagProps={{
          style: {
            background: "transparent",
          },
        }}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  );
}
