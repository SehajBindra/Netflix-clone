import React, { useState ,useEffect } from "react";
import "./Nav.css";
function Nav() {
   const [show, handleShow] = useState(false);

   const transitionNavbar = () => {
       if (Window.scrollY > 100){
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
    <div className="nav nav_black">
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
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
