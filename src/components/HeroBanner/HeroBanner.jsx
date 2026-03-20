import "./HeroBanner.css";
import LightCard from "../LightCard/LightCard";

import { codeBlockUseExample } from "../../CodeSnippets";
import CodeBlock from "../CodeBlock/CodeBlock";

export default function HeroBanner() {
  return (
    <>
      <section id="hero-section" className="hero-banner">
        <div className="hero-text">
          <h1>REACT</h1>
          <h2>COMPONENT GUIDE</h2>
        </div>
      </section>
      <LightCard>
        A visual guide to REACT features with component examples.
        <CodeBlock language="jsx" code={codeBlockUseExample} />
      </LightCard>
    </>
  );
}
