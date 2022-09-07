import React, { useEffect, useState } from "react";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";
import Main from "./Layouts/Main";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const listenToScroll = () => {
    let heightToHideFrom = 400;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };
  useEffect(() => {
    AOS.init({});
    AOS.refresh();
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, [listenToScroll]);

  const [toggle, setToggle] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  const NavToggle = () => {
    setToggle((toggle) => !toggle);
  };

  return (
    <>
      <Header NavToggle={NavToggle} toggle={toggle} />
      <Main isVisible={isVisible} />
      <Footer />
    </>
  );
};

export default App;
