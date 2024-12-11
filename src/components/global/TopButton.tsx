import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";

const TopBtn = () => {
  const [iconAnimation, setIconAnimation] = useState(false);
  const [buttonAnimation, setAnimation] = useState(0);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      setIconAnimation(true);
    } else {
      setIconAnimation(false);
    }
  });

  const scrollAnimation = () => {
    const windowHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientScroll = document.documentElement.scrollTop;
    const currentScroll = (clientScroll / (scrollHeight - windowHeight)) * 100;
    setAnimation(currentScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollAnimation);
    return () => window.removeEventListener("scroll", scrollAnimation);
  }, []);

  return (
    <Link
      to="hero"
      duration={500}
      smooth={true}
      className={`top-btn fixed bottom-[15px] right-[20px] w-[50px] h-[50px] rounded-full grid place-items-center text-sm text-white z-[1000]  opacity-0 cursor-pointer transitions hover:scale-[1.1] overflow-hidden ${
        iconAnimation ? "animate" : ""
      }  `}
      style={{
        background: `conic-gradient(#22cd6f ${buttonAnimation}%, #ffffff1a ${buttonAnimation}%)`,
      }}
    >
      <div
        className={`top-icon position-relative w-[50px] h-[50px] flex items-center justify-center rounded-full`}
      >
        <span className="icon-animation">
          <FaArrowUp className="text-lg" />
        </span>
      </div>
    </Link>
  );
};

export default TopBtn;
