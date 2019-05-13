import React from 'react';
import {slide as Menu } from 'react-burger-menu'
import loginIcon from '../Images/login-icon.png';
import {Link} from 'react-router-dom';





class AppNavbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: true,
      
    }
    
 
  }
  
 toggle=()=>{
   this.setState({
     isOpen:!this.state.isOpen,
   })
 }
  // showSettings (event) {
  //   event.preventDefault();
    
  // }

  render () {
   
    return (
      <div className='AppNavbar'>
        <div><img src={loginIcon} alt="LoginIcon" className='LoginIcon'/></div>
      <div>
      <Menu isOpen={ this.state.isOpen}>
        <Link to='/' className="menu-item" >Home</Link>
        <Link to='/Login' className="menu-item" >Log In</Link>
        <Link to='/CreateAccount' className="menu-item" >Create Account</Link>
        <Link to='/Cities' className="menu-item" >Cities</Link>
        {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
        
      </Menu>
      </div>
      </div>
    )
  }
}

export default AppNavbar; 












/* class Navbar extends React.Component {
 
render (){
    return(
<div className=" container AppNavbar">
<img src={loginIcon} alt="LoginIcon" className='LoginIcon'/>

         
         
         <Link to='/Cities'>city</Link>
       </div>
       );
       }
    } */
      