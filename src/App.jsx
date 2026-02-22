
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
            
        </div>
    );
};

export default App;