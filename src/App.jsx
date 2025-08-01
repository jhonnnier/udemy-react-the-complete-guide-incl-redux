import {useState} from 'react'
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreComponent/CoreConcept.jsx";
import TapButton from "./components/TabButton/TapButton.jsx";
import Card from "./components/Card/Card.jsx";
import {CORE_CONCEPTS, EXAMPLES} from './data-with-examples.js'
import CoreConceptDestructure from "./components/CoreComponent/CoreConceptDestructure.jsx";

function App() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        // selectedButton => 'components', 'jsx', 'props', 'state'
        setSelectedTopic(selectedButton);
    }

    let tabContent = <p>Please, select a topic.</p>;

    if (selectedTopic) {
        tabContent = (<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>{EXAMPLES[selectedTopic].code}</pre>
        </div>);
    }

    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map(cc =>
                            <CoreConcept key={cc.title}
                                         title={cc.title}
                                         description={cc.description}
                                         image={cc.image}
                            ></CoreConcept>
                        )}
                    </ul>

                    <ul>{CORE_CONCEPTS.map(cc => <CoreConceptDestructure key={cc.title} {...cc}/>)}</ul>

                </section>
            </main>

            <section id="examples">
                <h2>Examples</h2>
                <menu type="context">
                    <TapButton id="tap-button-1"
                               dataCy="tap-button-1"
                               label="Components"
                               onSelect={() => handleSelect('components')}
                               isSelected={selectedTopic === 'components'}
                    ></TapButton>
                    <TapButton id="tap-button-2"
                               dataCy="tap-button-2"
                               label="JSX"
                               onSelect={() => handleSelect('jsx')}
                               isSelected={selectedTopic === 'jsx'}
                    ></TapButton>
                    <TapButton id="tap-button-3"
                               dataCy="tap-button-3"
                               label="Props"
                               onSelect={() => handleSelect('props')}
                               isSelected={selectedTopic === 'props'}
                    ></TapButton>
                    <TapButton id="tap-button-4"
                               dataCy="tap-button-3"
                               label="State"
                               onSelect={() => handleSelect('state')}
                               isSelected={selectedTopic === 'state'}
                    ></TapButton>
                </menu>

                {tabContent}

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