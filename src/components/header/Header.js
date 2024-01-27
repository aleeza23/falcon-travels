import React, { useState } from "react";
import Container from "../../constant/Container";
import Logo from "./Logo";
import DesktopHeader from "./DesktopHeader";
import MobileNavs from "./MobileNavs";

const Header = () => {
    const [toggleNav, settoggleNav] = useState(false);
    const [dropDown, setdropDown] = useState(false);
    
    
  return <>
     <Container>
        <Logo toggleNav={toggleNav} settoggleNav={settoggleNav} />
        <DesktopHeader dropDown={dropDown} setdropDown={setdropDown} />
        {toggleNav && <MobileNavs /> }
     </Container>
  </>;
};

export default Header;
