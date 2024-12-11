import { Link } from "react-scroll";
import { navLinks } from "../../pages/data";

const Footer = () => {
  return (
    <footer className="pt-[50px] bg-[url('/image/footer-bg.png')] bg-center bg-no-repeat bg-cover">
      <div className="flex flex-col items-center justify-center xl:w-[1150px] lg:w-[960px] md:w-[75%] sm:w-[580px] w-[90%] mx-auto">
        <h3 className="xl:text-[50px] text-[30px] font-medium text-white cursor-pointer font-stylish ">
          <span className="text-primary">Ad</span>nan
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-x-4 xl:gap-6">
          {navLinks.map((link) => (
            <Link
              to={link?.href}
              spy={true}
              smooth={true}
              duration={500}
              key={link?.title}
              className="relative cursor-pointer text-[13px] text-white font-medium uppercase transitions font-secondary hover:text-primary before:absolute before:bottom-[-10px] before:left-1/2 before:-translate-x-1/2 before:w-[6px] before:h-[6px] before:rounded-full before:bg-primary before:opacity-0 hover:before:opacity-100 before:transitions hover:scale-[1.1] "
            >
              {link?.title}
            </Link>
          ))}
        </div>
        <p className="mb-0 font-light text-center sm:text-base text-xs text-white pb-[20px] sm:pt-[50px] pt-[40px] cursor-pointer">
          Copyright © 2023 <span className="text-primary">Adnan Tariq</span>.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
