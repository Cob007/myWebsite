import About from "../../component/About/About";
import Header from "../../component/Header/Header";
import Hero from "../../component/Hero/Hero";
import Projects from "../../component/Projects/Projects";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <section id="Home">
        <Header />
        <Hero />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Project">
        <Projects />
      </section>

    </div>
  );
};

export default Home;
