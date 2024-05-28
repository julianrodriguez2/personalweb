import Header from "./Components/Header";
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import Extra from "./Components/Extra";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Extra />
      <Contact />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;
