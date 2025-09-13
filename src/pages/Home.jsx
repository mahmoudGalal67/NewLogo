import About from "../components/About";
import Header from "../components/Header";
import Projects from "../components/Projects";

function Home() {
  return (
    <div className="home ">
      {" "}
      <Header />
      <About />
      <Projects />
    </div>
  );
}

export default Home;
