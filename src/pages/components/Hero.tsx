import { FaArrowDown } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import { socialLinks } from "../data";

const Hero = () => {
  return (
    <main className="relative w-full overflow-x-hidden " id="hero">
      {/* Gradient colors */}
      <div>
        <section className="lg:w-[350px] sm:w-[250px] w-[200px] lg:h-[350px] sm:h-[250px] h-[200px] rounded-full bg-gradient-to-r from-[#08d66592] to-[#32de8536] lg:blur-[190px] blur-[150px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute z-[-1]"></section>
      </div>

      {/* Hero  Section */}
      <div className="h-full w-full dark:bg-grid-white/[0.05] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#08d66514]"></div>
        {/* Hero Image */}
        <section className="flex flex-col items-center justify-center w-full h-full xl:pt-[130px] pt-[100px] pb-[80px]">
          <Tilt>
            <div className="relative mb-3 border-4 xl:w-[210px] w-[170px] xl:h-[210px] h-[170px] rounded-full hero-img border-secondary mb-md-5">
              <span className="hero-img-animation absolute xl:w-[210px] w-[170px] xl:h-[210px] h-[170px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full block"></span>
              <img
                src="/image/logo.jpg"
                className="xl:w-[200px] w-[160px] xl:h-[200px] h-[160px] rounded-full object-cover  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                alt="hero image"
                loading="lazy"
              />
            </div>
          </Tilt>
          {/* Hero Content */}
          <div className="text-center hero-body">
            <h1 className="my-md-4 xl:text-[45px] sm:text-[40px] text-[30px] font-bold text-white leading-none">
              Hi, I am <br className="d-md-none d-block" />{" "}
              <span className="text-primary">
                <Typewriter
                  cursor
                  loop={0}
                  cursorStyle="|"
                  words={[
                    "Adnan Tariq",
                    "ReactJS Developer",
                    "Fullstack Developer",
                  ]}
                  // loop={5}
                  typeSpeed={120}
                  deleteSpeed={90}
                />
              </span>
            </h1>
            <p className="sm:w-[60%] w-[85%] mx-auto my-4 text-center hero_content sm:text-base text-sm text-content font-light">
              I am a Freelance Frontend React Developer Based in Pakistan with
              one year of Expertise in Crafting Digital Experiences.
            </p>
            {/* Icons */}
            <div className="flex items-center justify-center gap-4 mt-5 hero-icons">
              {socialLinks?.map((element, index) => {
                return (
                  <a
                    key={index}
                    href={element?.link}
                    className="text-[15px] w-[35px] h-[35px] flex items-center justify-center text-white border border-content rounded-lg overflow-hidden relative z-[1] transitions group hover:border-primary focus:border-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="hero-icon-inner-first w-[35px] h-[35px] flex items-center justify-center rounded-lg transitions absolute top-0 left-0 text-content bg-transparent group-hover:top-[-110%] group-focus:top-[-110%]">
                      {element?.icon}
                    </span>
                    <span className="hero-icon-inner-second w-[35px] h-[35px] flex items-center justify-center rounded-lg transitions absolute left-0 bottom-[-110%] group-hover:bottom-0 group-focus:bottom-0 group-hover:bg-primary group-focus:bg-primary text-content">
                      {element?.icon}
                    </span>
                  </a>
                );
              })}
            </div>
            <div className="mouse-animation ">
              <Link
                to="about"
                offset={50}
                spy={true}
                smooth={true}
                duration={500}
                className="inline-block mouse-btn mt-[30px] text-content relative transitions hover:text-primary focus:text-primary  select-none"
                style={{ cursor: "pointer" }}
              >
                {" "}
                <span className="mouse-icon text-sm absolute top-0 left-[-2rem] cursor-pointer inline-block">
                  <FaArrowDown />
                </span>{" "}
                SCROLL DOWN
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Hero;
