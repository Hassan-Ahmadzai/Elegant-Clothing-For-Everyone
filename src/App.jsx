
import React from "react";
import imgSrc from "../src/assets/react-core-concepts.png"
import componentsImg from './assets/components.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
};


function Header() {
    const description = reactDescriptions[getRandomInt(2)];

    return (
        <div>
            <header>
                <img src={imgSrc} alt="Stylized atom" />

                <h1>React Essentials</h1>

                <p>
                    {description} React concepts you will need for almost any app you are
                    going to build!
                </p>
            </header>
        </div>
    );
};

function CoreConcept({ title, description, image }) {
    return (
        <li>
            <img src={image} alt={description} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
};

function App() {
    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Time to get started!</h2>

                    <ul>
                        <CoreConcept 
                            title="Components" 
                            description="The core UI building block." 
                            image={componentsImg}
                        />
                        <CoreConcept 
                            title="Props"
                            description={}
                        />
                        <CoreConcept />
                        <CoreConcept />
                    </ul>
                </section>
            </main>
        </div>
    );
};

export default App;