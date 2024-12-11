import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { Link } from "react-scroll";
import { navLinks } from "../../pages/data";

const Navbar = () => {
  const [navAnimation, setNavAnimation] = useState(false);
  const [open, setOpen] = useState<boolean>(false);
  const [sideBar, showSideBar] = useState<boolean>(false);

  // Scroll Animation
  window.addEventListener("scroll", () => {
    if (window.scrollY) {
      setNavAnimation(true);
    } else {
      setNavAnimation(false);
    }
  });

  const openSidebar = () => {
    showSideBar(!sideBar);
    setOpen(!open);
  };

  return (
    <div>
      {/* Large Screen Navbar */}
      <nav
        className={`2xl:w-[1200px] bg-[#08d6650e] backdrop-blur-sm custom-width sm:h-[60px] h-[50px] fixed top-4 flex items-center justify-between -translate-x-1/2 border rounded-full left-1/2 border-primary z-10 shadow-green ${
          navAnimation && "nav-animation"
        }`}
      >
        {/* Logo */}
        <div className="ps-[14px]">
          <h3 className="xl:text-[35px] text-[30px] font-medium text-white cursor-pointer font-stylish">
            <span className="text-primary">Ad</span>nan
          </h3>
        </div>

        {/* Links */}
        <div className="hidden lg:block">
          <div className="flex items-center gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <Link
                to={link?.href}
                spy={true}
                smooth={true}
                duration={500}
                key={link?.title}
                className="relative cursor-pointer text-[13px] text-white uppercase transitions font-secondary hover:text-primary before:absolute before:bottom-[-10px] before:left-1/2 before:-translate-x-1/2 before:w-[6px] before:h-[6px] before:rounded-full before:bg-primary before:opacity-0 hover:before:opacity-100 before:transitions hover:scale-[1.1] "
              >
                {link?.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="lg:pe-[8px] pe-[15px] flex items-center gap-4">
          <a
            href="/image/my-cv.pdf"
            download={"/image/my-cv.pdf"}
            rel="noreferrer"
            className="hidden btn-primary sm:block"
          >
            Download CV
          </a>
          {/* Hamburger */}
          <div className="block lg:hidden">
            <button
              type="button"
              className="flex flex-col hamburger "
              onClick={openSidebar}
            >
              <span
                className={`w-[30px] h-[2px] bg-primary rounded-full transform transitions mb-1.5 ${
                  open
                    ? "rotate-45 md:translate-y-[0.5rem] translate-y-[0.5rem]"
                    : ""
                }`}
              ></span>
              <span
                className={`w-[30px] h-[2px] bg-primary rounded-full transform transitions mb-1.5 ${
                  open ? " opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-[30px] h-[2px] bg-primary rounded-full transform transitions ${
                  open
                    ? " -rotate-45 md:translate-y-[-.5rem] translate-y-[-.45rem]"
                    : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </nav>
      {/*  Sidebar */}
      <div
        className={`fixed w-[250px] h-screen bg-[#08d6650e] border-r-2 border-r-primary rounded-tr-xl top-0 transitions overflow-y-auto z-[60] backdrop-blur-sm ${
          sideBar ? " left-[0%]" : "left-[-200%]"
        } `}
      >
        {/* Logo section */}
        <div className="pt-[10px] px-4">
          <div className="flex items-center justify-between menu_header">
            <div className="logo">
              <h3 className="xl:text-[35px] text-[30px] font-medium text-white cursor-pointer font-stylish">
                <span className="text-primary">Ad</span>nan
              </h3>
            </div>
            <button
              className="close_btn text-[16px] text-white p-2 border  border-white rounded-md transition duration-300 hover:border-white hover:text-white "
              onClick={() => {
                showSideBar(false);
                setOpen(false);
              }}
            >
              <GrClose />
            </button>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center justify-center gap-6 pt-[100px]">
          {navLinks.map((link) => (
            <Link
              to={link?.href}
              spy={true}
              smooth={true}
              duration={500}
              key={link?.title}
              className="relative cursor-pointer text-[18px] text-white uppercase transitions font-secondary hover:text-primary before:absolute before:bottom-[-10px] before:left-1/2 before:-translate-x-1/2 before:w-[6px] before:h-[6px] before:rounded-full before:bg-primary before:opacity-0 hover:before:opacity-100 before:transitions hover:scale-[1.1]"
            >
              {link?.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
