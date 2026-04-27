import "./App.css";
import Header from "./components/Header/Header";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import Card from "./components/Card/Card";
import Chip from "./components/Chip/Chip";
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

        </div>
      </main>
    </>
  );
}

export default App;
