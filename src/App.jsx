import "./App.css";
import Header from "./components/Header/Header";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import AccordionLined from "./components/AccordionLined/AccordionLined";
import Card from "./components/Card/Card";
import CodeBlock from "./components/CodeBlock/CodeBlock";
import Chip from "./components/Chip/Chip";
import xIcon from "./assets/icons/X.png";

import { chipComponentCode, chipUsageCode } from "./CodeSnippets";

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <HeroBanner />
        <div className="all-sections">
          <AccordionLined label="PROPS">
            <div className="cards-row">
              <Card highlighted title="PROPS">
                <p>Props allow the components to accept information to use.</p>
                <p>
                  This is why not every component made from a template looks the
                  same, they receive different data.
                </p>
                <p>
                  The data could be text to display, link to use, or even what
                  action to take on click.
                </p>
              </Card>
              <Card title="Chips">
                <p>This element is commonly called "Chips"</p>
                <p>Common Features:</p>
                <ul>
                  <li>Optional Icons</li>
                  <li>Highlighted State</li>
                  <li>
                    often deletable, a nice visual way to pick options from a
                    form
                  </li>
                </ul>
                <div className="chips-example-row">
                  <Chip text={`{Chip Text}`} />
                  <Chip text="Props" />
                  <Chip text="Map" />
                  <Chip highlight text="Highlighted" />
                  <Chip text="Icons" icon={xIcon} />
                </div>
              </Card>
            </div>
            <Card>
              <div className="code-example-row">
                <CodeBlock
                  title="Component Internals"
                  code={chipComponentCode}
                />
                <div className="horizontal-divider" />
                <CodeBlock title="Usage Example" code={chipUsageCode} />
              </div>
            </Card>
          </AccordionLined>
          <AccordionLined label="STATE">
            <Card highlighted title="STATE">
              <p>
                State is very similar to a variable, with one key difference.
              </p>
              <p>
                When state changes, react will notice, and re-draw the part of
                the page that uses the state.
              </p>
            </Card>
            <Card
              title="Accordion"
              tags={["Props", "State", "Conditional Rendering"]}
            >
              <p>
                Common name for a component that shows/hides content is the
                "accordion"
              </p>
              <AccordionLined label="CLICK ME, I'M AN ACCORDION">
                <p>This text will be shown only when accordion is open.</p>
                <p>
                  Accordions are very common on pages with a lot of information.
                  <br />
                  For example <b>FAQ</b> pages.
                </p>
              </AccordionLined>
            </Card>
          </AccordionLined>
        </div>
      </main>
    </>
  );
}

export default App;
