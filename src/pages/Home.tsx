import Footer from "../components/global/Footer";
import Navbar from "../components/global/Navbar";
import About from "./components/About";
import CallToAction from "./components/CallToAction";
import Certificate from "./components/Certificate";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";
import Skills from "./components/Skills";
import Testmonial from "./components/Testmonial";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Skills />
      <Portfolio />
      <Experience />
      <Testmonial />
      <Certificate />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
