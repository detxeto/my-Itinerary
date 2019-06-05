import React from 'react';
import {Button} from 'reactstrap';

import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getCities, deleteCity,addCity,} from '../actions/cityActions';
import { PropTypes } from 'prop-types';






class allCities extends React.Component{
   constructor(){
       super();
     
       this.state={
        //    items:[],
           isLoaded:false,
           cityFilter: "",
           
           
       }
   }
   componentDidMount(){
   
    this.props.getCities();
    console.log(this.props);
   }
   handleChange = (e) => {
    this.setState({
      cityFilter: e.target.value
    })
    
  }
 
  
    render (){
        
       
        const {cities} = this.props.city;
       
        //let filteredCities = this.state.cities;
        console.log({cities});
        let filteredCities = cities.filter(city => {
          let cityName = city.city.toLowerCase();
          
          return cityName.startsWith(this.state.cityFilter.toLowerCase());
        });
        // let { isLoaded } = this.props.city;
        // if (!isLoaded){ 
        //     return <div>Loadiing...</div>
            
        // }
       
        // else{
            return(
           <div>
           
           <div className="searchForm ">
                        
                        <form action="">
                            <div className="searchCityLabel"><label htmlFor="" >Filter our cuttent cities</label></div>
                            <div><input type="text" className="searchCityInput" placeholder="search..."value={this.state.cityFilter}
              onChange={this.handleChange}/> </div>
                        </form>
                    </div>  
                
                
                
                
                
                
                
                
                <div  >
                        {filteredCities.map((city) =>(
                            <div  key={city._id} className="cityListAllDivs"  > 
                             <div outline color="secondary" className="cityListDiv  "  >  
                           < Link to='./Itineraries' className='link'  >
                               {city.city}
                               </Link> 
                             
                               </div> 
         
                               
                               
                               
                               
                               
                               </div> 
                        ))}
                    
                    
                </div>
            
            
           
                             
                </div>
               
            );
        
                        } 

}

allCities.propTypes ={
    getCities: PropTypes.func.isRequired,
    city: PropTypes.object.isRequired
}


const mapStateToProps = (state)=> ({
city: state.city
});

export default  connect(mapStateToProps,{getCities})(allCities);