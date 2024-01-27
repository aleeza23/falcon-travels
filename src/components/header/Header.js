import React, { useEffect, useState } from "react";
import Container from "../../constant/Container";
import Logo from "./Logo";
import DesktopHeader from "./DesktopHeader";
import MobileNavs from "./MobileNavs";

const Header = () => {
    const [toggleNav, settoggleNav] = useState(false);
    const [dropDown, setdropDown] = useState(false);
    const [navBar, setnavBar] = useState(false);
    
    useEffect(() => {
      
    window.addEventListener('scroll' , () => {
      if (window.scrollY >= 500) {
         setnavBar(true)
      } else{
         setnavBar(false)
      }
    })
     
    }, []);
    
    
    
  return <>
     <Container>
        <Logo toggleNav={toggleNav} settoggleNav={settoggleNav} />
        <DesktopHeader dropDown={dropDown} navBar={navBar} setdropDown={setdropDown} />
        {toggleNav && <MobileNavs /> }
     </Container>
  </>;
};

export default Header;
