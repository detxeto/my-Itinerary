import { GET_ITINERARIES,ADD_ITINERARY ,DELETE_ITINERARY,ITINERARIES_LOADING} from './types';
import axios from 'axios';



    
 export const getItineraries =()=>dispatch =>{
     dispatch(setItinerariesLoading());
     axios
            .get('/api/itineraries')
            .then(res=>
                dispatch({
                    type: GET_ITINERARIES,
                    payload: res.data
                })
                )
 };   

export const deleteIinerary = id => {
    return {
        type:DELETE_ITINERARY,
        payload: id
    };
};
export const addItinerary = itinerary => {
    return {
        type:ADD_ITINERARY,
        payload: itinerary
    };
};
export const setItinerariesLoading =()=> {
    return{
        type: ITINERARIES_LOADING
    }
}