import React from 'react';
import MultipleRows from'./Carrousel';
import { Transition } from 'react-transition-group';
import { Collapse, Button, CardBody, Card ,Container} from 'reactstrap';
import {connect} from 'react-redux';
import {getItineraries} from '../actions/itineraryActions';
import { PropTypes } from 'prop-types';




class ItinerariesDetail extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false,
      isLoaded:false,
      itineraries:[],

     };
  }

  
  componentDidMount(){
   
this.props.getItineraries();
}
toggle() {
  this.setState(state => ({ collapse: !state.collapse }));
}

  render() {
   
   
      
    const {itineraries} = this.props.itinerary;
 
    console.log({itineraries});
  



     return (
      <div>
      
      <div >
        {itineraries.map((itinerary)=>
        <div key={itinerary._id}>{itinerary.cityName}</div>)}
      </div>
      <Container>
     <Button  className='buttonViewAll' onClick={this.toggle} style={{ marginBottom: '1rem',backgroundColor:'white',color:'black' }}> view all</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
            <MultipleRows/>
            </CardBody>
          </Card>
        </Collapse>
        </Container>
      
      </div>
    );
  }
}

ItinerariesDetail.propTypes ={
  getItineraries: PropTypes.func.isRequired,
  itinerary: PropTypes.object.isRequired
}


const mapStateToProps = (state)=> ({
itinerary: state.itinerary
});

export default  connect(mapStateToProps,{getItineraries})(ItinerariesDetail);
