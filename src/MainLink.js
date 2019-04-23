import React from 'react';
import MainLinkLogo  from './Images/circled-right-2.png';

class MainLink extends React.Component{
render(){
    return(
        <div className='Main-Link'>
            <div><h4>Find your perfect trip,designed by insiders who know and love their cities</h4></div>
            <div><img src={MainLinkLogo} alt="link-Icon" className='MainLinkLogo'/></div>
        </div>
    )
}

}





export default MainLink; 