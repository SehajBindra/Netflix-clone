import React, { useState ,useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";
function Nav() {
   const [show, handleShow] = useState(false);
   const history = useHistory();

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
            onClick={() => history.push('/')}
          className="nav_logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />

        <img
          onClick={() => history.push('/profile')}
          className="nav_Avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
