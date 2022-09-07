import React from "react";

import Headercomp from "../components/header/Headercomp";

const Header = ({ NavToggle, toggle }) => {
  return (
    <div>
      <header data-aos="slide-down" className="z-30">
        <Headercomp NavToggle={NavToggle} toggle={toggle} />
      </header>
    </div>
  );
};

export default Header;
