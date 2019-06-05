import {GET_CITIES, ADD_CITY ,DELETE_CITY,CITIES_LOADING} from './types';
import axios from 'axios';


export const getCities = ()=> dispatch =>{
    dispatch(setCitiesLoading());
    axios
       .get('/api/cities')
       .then(res=>
        dispatch({
           type : GET_CITIES,
           payload: res.data 
        })
        )
    };
    
   

export const deleteCity = id => {
    return {
        type:DELETE_CITY,
        payload: id
    };
};
export const addCity = item => {
    return {
        type:ADD_CITY,
        payload: item
    };
};
export const setCitiesLoading =()=> {
    return{
        type: CITIES_LOADING
    }
}