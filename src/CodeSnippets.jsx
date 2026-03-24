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

export const AccordionComponentCode = `
function Accordion({ label, children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="accordion">
      <div className="accordion-top">{label}</div>
      {isOpen ? <div className="accordion-content">
        {children}
      </div> : null}
    </div>
  );
}
`

export const AccordionUsageCode = `
<Accordion label="my first accordion">
  Some stuff that can be hidden!
</Accordion>;
`

export const TabsComponentCode = `
export default function Tabs({ children }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const tabs = Children.toArray(children);

    return (
        <Card>
            <div className="tab-labels">
                {tabs.map((child, index) => (
                     <>
                        <div
                            key={index}
                            className={index === activeIndex ? "tab-label active" : "tab-label"}
                            onClick={() => setActiveIndex(index)}
                        >
                            {child.props.label}
                        </div>
                        {
                            index < tabs.length - 1 ? <div className="vertical-divider" /> : null
                        }
                    </>
                ))}
            </div>
            <div className="tab-content">
                {tabs[activeIndex]}
            </div>
        </Card>
    )
}

export function Tab({label, children}){
    return(
        <div className="tab" label={label}>
            {children}
        </div>
    )
}
`

export const TabsUsageCode = `
 <Tabs>
  <Tab label="tab 1">
    <p>Content visible when tab 1 is selected</p>
    <p>This is very useful when:</p>
    <ul>
      <li>You need to provide a lot of informaiton</li>
      <li>need to switch between different versions of something (ex: a graph)</li>
    </ul>
  </Tab>
  <Tab label="tab 2">
    tab 2 content
  </Tab>
</Tabs>
`