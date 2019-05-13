import React from 'react';
import MainLinkLogo  from '../Images/circled-right-2.png';
import {Link} from 'react-router-dom';
class MainLink extends React.Component{
render(){
    return(
        <div className='Main-Link'>
            <h4>Start browsing</h4>
            <div>
               <Link to='/Cities'> <img src={MainLinkLogo} alt="link-Icon" className='MainLinkLogo'/></Link>
               </div>
        </div>
    )
}

}





export default MainLink; 