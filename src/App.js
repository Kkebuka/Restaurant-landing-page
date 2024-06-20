import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Testimonials from "./components/Testimonials";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
