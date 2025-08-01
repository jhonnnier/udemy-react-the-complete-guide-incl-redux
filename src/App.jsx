import {CORE_CONCEPTS} from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreComponent/CoreConcept.jsx";
import CoreConceptDestructure from "./components/CoreComponent/CoreConceptDestructure.jsx";
import TapButton from "./components/TabButton/TapButton.jsx";
import Card from "./components/Card/Card.jsx";

function App() {
    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept title={CORE_CONCEPTS[0].title}
                                     description={CORE_CONCEPTS[0].title}
                                     image={CORE_CONCEPTS[0].image}/>

                        <CoreConcept {...CORE_CONCEPTS[1]}/>
                        <CoreConceptDestructure {...CORE_CONCEPTS[2]}/>
                        <CoreConceptDestructure {...CORE_CONCEPTS[3]}/>
                    </ul>
                </section>
            </main>

            <section id="examples">
                <h2>Examples</h2>
                <menu type="context">
                    <TapButton id="tap-button-1"
                               dataCy="tap-button-1"
                               label="Components">
                    </TapButton>
                    <TapButton id="tap-button-2"
                               dataCy="tap-button-2"
                               label="JSX"
                    ></TapButton>
                    <TapButton id="tap-button-3"
                               dataCy="tap-button-3"
                               label="Props">
                    </TapButton>
                    <TapButton id="tap-button-4"
                               dataCy="tap-button-3"
                               label="State"
                    ></TapButton>
                </menu>
            </section>

            <section id="cars">
                <div id="app">
                    <h1>Available Experts</h1>
                    <Card name="Maria"
                          children="Miles"/>
                </div>
            </section>
        </div>
    );
}

export default App;