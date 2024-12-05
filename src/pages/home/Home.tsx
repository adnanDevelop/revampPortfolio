import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Service from "../components/Service";
import Portfolio from "../components/Portfolio";
import Testmonial from "../components/Testmonial";
import Experience from "../components/Experience";
import Footer from "../../components/global/Footer";
import Certificate from "../components/Certificate";
import Navbar from "../../components/global/Navbar";
import CallToAction from "../components/CallToAction";
import TopButton from "../../components/global/TopButton";

const Home = () => {
  return (
    <div>
      <TopButton />
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
