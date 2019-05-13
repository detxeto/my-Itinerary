import React from 'react';






class allCities extends React.Component{
   constructor(props){
       super(props);
       this.state={
           items:[],
           isLoaded:false,
           cityFilter: ""
       }
   }
   componentDidMount(){
       fetch ('/api/cities')
       .then(res => res.json())
       .then(json => 
            {this.setState({
           isLoaded : true,
           items :json,
       })
    });
   }
   handleChange = (e) => {
    this.setState({
      cityFilter: e.target.value
    })
    
  }

    render (){
        let { isLoaded } = this.state;
      
        //let filteredCities = this.state.cities;
        let filteredCities = this.state.items.filter(item => {
          let cityName = item.city.toLowerCase();
         
          return cityName.startsWith(this.state.cityFilter.toLowerCase());
        });
        if (!isLoaded){
            return <div>Loading...</div>
        }
        
        else{
            return(
                <div>
                    <div><h3>Cities</h3></div>
                    <div className="searchForm ">
                        
                        <form action="">
                            <div className="searchCityLabel"><label htmlFor="" >Filter our cuttent cities</label></div>
                            <div><input type="text" className="searchCityInput" placeholder="search..."value={this.state.cityFilter}
              onChange={this.handleChange}/> </div>
                        </form>
                    </div>
                    <div className="cityListAllDivs">
                        {filteredCities.map((item) =>(
                           <div key={item._id} className="cityListDiv">
                               {item.city}
                               </div> 
                        ))}
                    </div>

                </div>
            );
        }

   



}
}

export default allCities