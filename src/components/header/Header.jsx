import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import { useEffect, useRef } from "react";
import { init } from "ityped";

const Header = () => {
  const titleRef = useRef();

  useEffect(() => {
    init(titleRef.current, {
      backDelay: 1000,
      showCursor: true,
      strings: ["Abraham Reta", "Fullstack Developer"],
    });
  }, []);

  return (
    <header>
      <div class="container header__container">
        <h5>
          Hello I'm
        </h5>
        <h1> <span ref={titleRef}></span></h1>
        {/* <h5 className="text-light">Fullstack Developer</h5> */}
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
