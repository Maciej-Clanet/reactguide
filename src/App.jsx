import "./App.css";
import Header from "./components/Header/Header";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import Card from "./components/Card/Card";
import Chip from "./components/Chip/Chip";
import Accordion from "./components/Accordion/Accordion";
import xIcon from "./assets/icons/X.png";
import CodeBlock from "./components/CodeBlock/CodeBlock";
import { chipComponentCode, chipUsageCode } from "./CodeSnippets"


function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <HeroBanner />
        <div className="all-sections">

          <PropsSection/>
          <StateSection/>

        </div>
      </main>
    </>
  );
}

function PropsSection() {
  return (
    <section className="props-section">
      <div className="props-row">
        <Card highlighted>
          <h2>PROPS</h2>
          <p>Props allow the components to accept information to use.</p>
          <p>This is why not every component made from a template looks the same,
            they receive different data.</p>
          <p>The data could be text to display, link to use,
            or even what action to take on click.</p>
        </Card>
        <Card>
          <h2>Chips</h2>
          <p>This element is commonly called "Chips"</p>
          <p>Common features:</p>
          <ul>
            <li>Optional Icons</li>
            <li>Highlighted State</li>
            <li>Often deletable, a nice visual way to represent options from a form</li>
          </ul>

          <div className="chips-example">
            {/* this is where we gonna place example chips */}
            <Chip text="test 1" />
            <Chip text="highlighted one" isHighlighted />
            <Chip text="icon test" icon={xIcon} />
          </div>
        </Card>
      </div>
      <Card isRow >
        <CodeBlock
          language="jsx"
          title="Component internals"
          code={chipComponentCode}
        />

        <div className="vertical-divider" />

        <CodeBlock
          language="jsx"
          title="Usage Example"
          code={chipUsageCode}
        />
      </Card>
    </section>
  )
}

function StateSection(){
  return(
    <section className="props-section">
      <Card highlighted>
        <h2>State</h2>
        <p>State is similar to a variable, with one key difference</p>
        <p>When state changes, react will notice, and re-draw the part of the page with the change</p>
      </Card>

      <Card tags={["Props", "State", "Conditional Rendering"]}>
        <h2>Accordion</h2>
        <p>Common name for componet that shows/hides is called "accordion"</p>
        <Accordion title="CLICK ME, I'M AN ACCORDION">
          <p>This text will be only shown when accordion is open</p>
        </Accordion>
      </Card>


    </section>
  )
}

export default App;
