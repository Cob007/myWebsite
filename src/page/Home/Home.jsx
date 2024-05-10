import About from "../../component/About/About";
import Header from "../../component/Header/Header";
import Hero from "../../component/Hero/Hero";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <section>
        <Header />
        <Hero />
      </section>
      <section>
        <About />
      </section>
    </div>
  );
};

export default Home;
