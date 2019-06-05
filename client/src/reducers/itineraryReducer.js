import {GET_ITINERARIES, ADD_ITINERARY ,DELETE_ITINERARY,ITINERARIES_LOADING} from '../actions/types';









const initialState = {
   itineraries:[],
   
    loading: false
};

export default function (state= initialState, action){
    switch(action.type){
        case GET_ITINERARIES:
        return{
            ...state,
            itineraries: action.payload,
            loading: false
        };
       
        case DELETE_ITINERARY:
            return{
                ...state,
                itineraries:state.itineraries.filter
            };
            case ADD_ITINERARY:
                return{
                  ...state,
                  itineraries : [action.payload, ...state.itineraries] 
                };
                case ITINERARIES_LOADING:
                    return{
                        ...state,
                        loading: true
                    }
        default:
            return state;
    }
}