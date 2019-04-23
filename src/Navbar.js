import React from 'react';
import HomeLogo from './Images/homeIcon.png';
import loginIcon from './Images/login-icon.png';


class Navbar extends React.Component {
 
render (){
    return(
<div className="AppNavbar">
         <img src={loginIcon} alt="LoginIcon" className='LoginIcon'/>
         <img src={HomeLogo} alt="homeLogo" className='HomeLogo'/>
         
       </div>
       );
       }
    }
      export default Navbar; 