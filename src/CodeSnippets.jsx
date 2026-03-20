// We will add more code snippets here later so our main page doesn't get unreadable because of them

export const codeBlockUseExample = `
// Use the code block component for highlighting code in examples
<CodeBlock 
    language="jsx" //Optional, jsx by default
    title="Text above code snippet" //Optional
    code={codeBlockUseExample} //import snippets from CodeSnippets.jsx
/>
`;

export const chipComponentCode = `
export default function Chip({ text, isSpecial = false }) {
  let classText = '';
  if (isSpecial) {
    classText = 'tag-btn special';
  } else {
    classText = 'tag-btn';
  }

  return <button className={classText}>{text}</button>;
}
`;

export const chipUsageCode = `
<div className="categories">
  <Chip text="Best Sellers" isSpecial />
  <Chip text="New Releases" isSpecial />
  <Chip text="Fashion" />
  <Chip text="Tech" />
</div>;
`;
