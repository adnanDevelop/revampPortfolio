import { useEffect, useState } from "react";
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
    <button
      className={`top-btn ${iconAnimation ? "animate" : ""}  `}
      style={{
        background: `conic-gradient(#8750f7 ${buttonAnimation}%, #ffffff1a ${buttonAnimation}%)`,
      }}
    >
      <div className={`top-icon position-relative`}>
        <span className="icon-animation">
          <FaArrowUp className="text-lg" />
        </span>
      </div>
    </button>
  );
};

export default TopBtn;
