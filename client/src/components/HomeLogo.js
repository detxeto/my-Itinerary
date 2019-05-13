import React from 'react';
import HomeLogo from '../Images/homeIcon.png';
import {Link} from 'react-router-dom';

const homeLogo=()=>{
return(

<div >
  <Link to='./Home'><img src={HomeLogo} alt="homeLogo" className='HomeLogo'/></Link>
</div>
)

}
export default homeLogo ;