import React, { useState } from "react";
import Container from "../../constant/Container";
import Logo from "./Logo";
import DesktopHeader from "./DesktopHeader";
import MobileNavs from "./MobileNavs";

const Header = () => {
    const [toggleNav, settoggleNav] = useState(false);
    
  return <>
     <Container>
        <Logo toggleNav={toggleNav} settoggleNav={settoggleNav} />
        <DesktopHeader />
        {toggleNav && <MobileNavs /> }
     </Container>
  </>;
};

export default Header;
