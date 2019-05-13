import React from 'react';
import HomeLogo from '../Images/homeIcon.png';
import {Link} from 'react-router-dom';



class Footer extends React.Component{
    render (){
 return(
     <div>
      <h5>Want to build your own MYtinerary</h5>
      
      <div className='linkOnTheBottom'>
            <Link to='/logIn'>Log In </Link>
            <Link to='/CreateAccount'>Create Account</Link>
      </div>
          <div className="footerDivLogo">
              <Link to='/'><img src={HomeLogo} alt="homeLogo" className='HomeLogo'/></Link>
              </div>  
     </div>

        )
    }
}
export default Footer ;