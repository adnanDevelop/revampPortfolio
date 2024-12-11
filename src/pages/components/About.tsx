import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <main className="about-section pt-[50px] bg-[#32de850c]" id="about">
      <section className="custom-width">
        <div className="grid grid-cols-12 gap-4">
          {/* ABOUT IMAGE SECTION */}
          <div className="col-span-5 ">
            <Tilt>
              <div className="relative mx-auto overflow-hidden about-img">
                <div className="relative mx-auto about-img-box w-[370px] h-[420px] flex items-center justify-center rounded-lg overflow-hidden bg-[#41AD7D4D] ">
                  <div className="w-[40px] h-[10px] rounded-t-none rounded-tr-[16px] rounded-br-[16px] rounded-l-none block bg-gradient-to-r from-[rgba(63,171,122,0)] to-[rgba(63,171,122,0.9)] about-first-animation absolute top-0 left-0"></div>
                  <div className="w-[40px] h-[10px] rounded-t-none rounded-r-[16px] rounded-b-[16px] rounded-l-none block bg-gradient-to-r from-[rgba(63,171,122,0)] to-[rgba(63,171,122,0.9)] about-second-animation absolute right-[-15px] top-0"></div>
                  <div className="w-[40px] h-[10px] rounded-t-none rounded-r-[16px] rounded-b-[16px] rounded-l-none block bg-gradient-to-r from-[rgba(63,171,122,0)] to-[rgba(63,171,122,0.9)] about-third-animation absolute right-0 bottom-0"></div>
                  <div className="w-[40px] h-[10px] rounded-t-none rounded-r-[16px] rounded-b-[16px] rounded-l-none block bg-gradient-to-r from-[rgba(63,171,122,0)] to-[rgba(63,171,122,0.9)] about-fourth-animation absolute left-[-15px] bottom-0"></div>
                  <div>
                    <img
                      src="/image/about-img.webp"
                      className="w-[350px] h-[400px] rounded-lg object-cover"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </Tilt>
          </div>
          {/* ABOUT CONTENT SECTION */}
          <div className="col-span-7 mt-0 lg:px-5 lg:mt-5">
            <div className="about-content-section">
              <h2 className="text-white fw-normal text-uppercase">About me</h2>
              <div className="line"></div>
              <p className="my-5 font-light text-justify text-content">
                As a dedicated Front-End Web Developer, I specialize in crafting
                visually engaging and user-friendly web applications. I'm
                proficient in HTML, CSS, Bootstrap, Github, JavaScript, and
                TypeScript allowing me to create dynamic and responsive web
                interfaces.
              </p>
              <p className="mb-3 font-light text-justify mb-md-4 text-content">
                With a history of achievements in the computer software
                industry, I've been fortunate to make significant contributions
                to various projects. My core objective is to design captivating
                online experiences, from sleek small business websites to
                dynamic and interactive web applications.
              </p>
              <div
                className="gap-3 my-5 project-section d-flex align-items-center gap-md-5 "
                data-aos="zoom-in"
              >
                {/* PROJECT SECTION */}
                <div className="gap-3 d-flex align-items-center">
                  <h1 className="text-white fw-bolder">15+</h1>
                  <div className="project-content">
                    <p className="mb-0">Projects</p>
                    <p className="mb-0">Completed.</p>
                  </div>
                </div>
                {/* CLIENT SECTION */}
                <div className="gap-3 d-flex align-items-center">
                  <h1 className="text-white fw-bolder">5+</h1>
                  <div className="project-content">
                    <p className="mb-0">Satisfied</p>
                    <p className="mb-0">Clients.</p>
                  </div>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="buttons d-flex align-items-center gap-md-4 g-3">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=923230838837&text=phone_number "
                  className="btn btn-primary d-inline-block me-4"
                >
                  contact me
                </a>
                <a
                  href="/image/my-cv.pdf"
                  download={"/image/my-cv.pdf"}
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  Download Cv
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
