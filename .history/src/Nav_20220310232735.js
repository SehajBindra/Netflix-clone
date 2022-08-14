import React, { useState ,useEffect } from "react";
import "./Nav.css";
function Nav() {
   const [show, handleShow] = useState(false);

   const transitionNavbar = () => {
       if (window.scrollY > 100){
           handleShow(true);
       } else{
           handleShow(false);
       }
   }
//   code only renders when component Mounts
   useEffect(() => {
       window.addEventListener("scroll", transitionNavbar);
       return () => window.removeEventListener("scroll", transitionNavbar);
   }, [])

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <div className="nav_contents">
        <img
          className="nav_logo"
          src= "https://e7.pngegg.com/pngimages/529/88/png-clipart-logo-netflix-nasdaq-nflx-streaming-media-premium-accoun-television-text.png"
          alt=""
        />

        <img
          className="nav_Avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
