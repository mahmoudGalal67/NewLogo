import About from "../components/About";
import Brands from "../components/Brands";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Projects from "../components/Projects";

function Home() {
  return (
    <div className="home ">
      {" "}
      <Header />
      <About />
      <Projects />
      <Brands />
      <Contact />
    </div>
  );
}

export default Home;
