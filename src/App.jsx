
import imgSrc from "../src/assets/react-core-concepts.png"
import Header from "./components/Header/Header";
import { CORE_CONCEPTS } from "./data";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";


function App() {
    function handleSelect(selectedButton) {
        console.log(selectedButton);
    };

    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Time to get started!</h2>

                    <ul>
                        <CoreConcept {...CORE_CONCEPTS[0]} />
                        <CoreConcept {...CORE_CONCEPTS[1]} />
                        <CoreConcept {...CORE_CONCEPTS[2]} />
                        <CoreConcept {...CORE_CONCEPTS[3]} />
                    </ul>       
                </section>

                
            </main>
        </div>
    );
};

export default App;