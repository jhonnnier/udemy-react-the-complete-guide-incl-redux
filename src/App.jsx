import {useState} from 'react'
import {CORE_CONCEPTS} from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreComponent/CoreConcept.jsx";
import CoreConceptDestructure from "./components/CoreComponent/CoreConceptDestructure.jsx";
import TapButton from "./components/TabButton/TapButton.jsx";
import Card from "./components/Card/Card.jsx";
import {EXAMPLES} from './data-with-examples.js'

function App() {
    const [selectedTopic, setSelectedTopic] = useState('components');

    function handleSelect(selectedButton) {
        // selectedButton => 'components', 'jsx', 'props', 'state'
        setSelectedTopic(selectedButton);
    }

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
                               label="Components"
                               onSelect={() => handleSelect('components')}
                    ></TapButton>
                    <TapButton id="tap-button-2"
                               dataCy="tap-button-2"
                               label="JSX"
                               onSelect={() => handleSelect('jsx')}
                    ></TapButton>
                    <TapButton id="tap-button-3"
                               dataCy="tap-button-3"
                               label="Props"
                               onSelect={() => handleSelect('props')}
                    ></TapButton>
                    <TapButton id="tap-button-4"
                               dataCy="tap-button-3"
                               label="State"
                               onSelect={() => handleSelect('state')}
                    ></TapButton>
                </menu>
                <div id="tab-content">
                    <h3>{EXAMPLES[selectedTopic].title}</h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre>{EXAMPLES[selectedTopic].code}</pre>
                </div>
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