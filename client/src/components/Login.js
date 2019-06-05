import React from 'react';
import ams from '../Images/cities/amsterdam.jpg';
import MultipleRows from './Carrousel';
import {Container}from 'reactstrap';


const logIn=()=>{
    return(
<div>
    
<div>   
    <h2>log in page</h2>
</div>
<Container>
   <div> <img src={ams} alt="amsterdam"className='CarouselImg' /></div>
    
    <MultipleRows/>
    </Container>
</div>

    )
}
export default logIn