import { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [open, setOpen] = useState<boolean>(false);
  const [sideBar, showSideBar] = useState<boolean>(false);
  const navLinks = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Skill", href: "#skills" },
    { title: "Service", href: "#service" },
    { title: "Experience", href: "#experience" },
    { title: "Portfolio", href: "#portfolio" },
    { title: "Testmonials", href: "#testmonials" },
    { title: "Contact", href: "#contact" },
  ];

  // Scroll Animation
  useEffect(() => {
    const windowScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && window.scrollY > 50) {
        document.querySelector("nav")?.classList.add("nav-hide");
        document.querySelector("nav")?.classList.remove("nav-show");
      } else {
        document.querySelector("nav")?.classList.add("nav-show");
        document.querySelector("nav")?.classList.remove("nav-hide");
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", windowScroll);

    return () => window.removeEventListener("scroll", windowScroll);
  }, [lastScrollY]);

  const openSidebar = () => {
    showSideBar(!sideBar);
    setOpen(!open);
  };

  return (
    <div>
      {/* Large Screen Navbar */}
      <nav className="2xl:w-[1200px] bg-transparent xl:w-[1150px] lg:w-[960px] md:w-[75%] sm:w-[580px] w-[90%] sm:h-[60px] h-[50px] fixed top-4 flex items-center justify-between -translate-x-1/2 border rounded-full left-1/2 border-primary z-10 shadow-purple">
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
              <a
                key={link?.title}
                href={link?.href}
                className="relative xl:text-sm text-[13px] text-white uppercase transitions font-secondary hover:text-primary before:absolute before:bottom-[-10px] before:left-1/2 before:-translate-x-1/2 before:w-[6px] before:h-[6px] before:rounded-full before:bg-primary before:opacity-0 hover:before:opacity-100 before:transitions"
              >
                {link?.title}
              </a>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="lg:pe-[8px] pe-[15px] flex items-center gap-4">
          <button className="hidden btn-primary sm:block">Download CV</button>
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
        className={`fixed w-[250px] h-screen bg-secondary border-r-2 border-r-primary rounded-tr-xl top-0 transitions overflow-y-auto z-[60] ${
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
        {/* <div className="flex items-center justify-center w-full h-full"> */}
        <div className="flex flex-col items-center justify-center gap-6 pt-[100px]">
          {navLinks.map((link) => (
            <a
              key={link?.title}
              href={link?.href}
              className="relative text-[18px] text-white uppercase transitions font-secondary hover:text-primary before:absolute before:bottom-[-10px] before:left-1/2 before:-translate-x-1/2 before:w-[6px] before:h-[6px] before:rounded-full before:bg-primary before:opacity-0 hover:before:opacity-100 before:transitions"
            >
              {link?.title}
            </a>
          ))}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Navbar;
