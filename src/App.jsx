import "./App.css";
import Header from "./components/Header/Header";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import Card from "./components/Card/Card";


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
              </Card>

            </div>
          </section>

        </div>
      </main>
    </>
  );
}

export default App;
