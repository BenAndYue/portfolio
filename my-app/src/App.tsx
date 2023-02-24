import React from 'react';
import './App.css';
import ContactMe from "./Component/ContactMe";
import MyProjects from "./Component/MyProjects";


function App() {
    return (
        <div className="App">
            <header>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section id="home">
                    <h1>Welcome to my portfolio</h1>
                    Hi there! I'm Ben Nguyen, a fourth-year software engineering student at <b>Amsterdam University of Applied Sciences</b>.

                </section>
                <section id="about">
                    <h2>About Me</h2>

                    I have a solid foundation in programming and software engineering principles, and I'm proficient in
                    Java, Python, JavaScript, and TypeScript.

                    Last year, I completed an internship at Foleon, where I gained hands-on experience in
                    developing software applications for real-world use cases. It was a great learning experience, and
                    it reinforced my passion for software engineering.

                    In my free time, I enjoy working on personal coding projects and exploring new programming languages
                    and frameworks. Thanks for checking out my portfolio, and feel free to contact me if you have any
                    questions or collaboration opportunities!
                </section>

                <section id="projects">
                    <h2>Projects</h2>
                <MyProjects></MyProjects>

                </section>
                <section id="contact">
                    <ContactMe></ContactMe>
                </section>

            </main>
            <footer>
                <p>Copyright © [2023] Ben Nguyen</p>
            </footer>
        </div>
    );
}

export default App;
