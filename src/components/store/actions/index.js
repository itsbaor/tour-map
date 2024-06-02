import axios from "axios";
import * as Type from '../Type'

const API_KEY='b976e2775ee39fe774d5e84a9609fa15'
const BASE_URL='https://api.themoviedb.org/3'

// struct for api key=BaseURL/API_KEY/TYPEORRGIN
export const getNetflixOriginal=()=>async dispatch =>{
    try{
        const result=await axios.get(
           `${BASE_URL}/discover/tv?api_key=${API_KEY}&width_networks=213`
        );
        dispatch({type: Type.GET_NETFLIX_ORRIGINAL, payload:result.data.results})
    } catch(error){
        console.log("get original movie err",error)
    }

}

export const getTrendingMovie=()=>async dispatch =>{
    try{
        const result=await axios.get(
           `${BASE_URL}/trending/all/week?api_key=${API_KEY}`
        );
        dispatch({type: Type.GET_TRENDING_MOVIE, payload:result.data.results})
    } catch(error){
        console.log("get trending movie err",error)
    }

}

export const getTopRateMovie=()=>async dispatch =>{
    try{
        const result=await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=80`
        );
        dispatch({type: Type.GET_TOPRATED_MOVIE, payload:result.data.results})
    } catch(error){
        console.log("get top Rate movie err",error)
    }

}

export const getActionMovie=()=>async dispatch =>{
    try{
        const result=await axios.get(
           `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`
        );
        dispatch({type: Type.GET_ACTION_MOVIE, payload:result.data.results})
    } catch(error){
        console.log("get action movie err",error)
    }
}

export const getComedyMovie=()=>async dispatch =>{
    try{
        const result=await axios.get(
           `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`
        );
        dispatch({type: Type.GET_COMEDY_MOVIE, payload:result.data.results})
    } catch(error){
        console.log("get comedy movie err",error)
    }

}

export const getHorrorMovie=()=>async dispatch =>{
    try{
        const result=await axios.get(
           `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`
        );
        dispatch({type: Type.GET_HORROR_MOVIE, payload:result.data.results})
    } catch(error){
        console.log("get horror movie err",error)
    }

}

export const getRomanceMovie=()=>async dispatch =>{
    try{
        const result=await axios.get(
           `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`
        );
        dispatch({type: Type.GET_ROMANCE_MOVIE, payload:result.data.results})
        
    } catch(error){
        console.log("get romance movie err",error)
    }
}

export const getDocumentaryMovie=()=>async dispatch =>{
    try{
        const result=await axios.get(
           `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`
        );
        dispatch({type: Type.GET_DOCUMENTARY_MOVIE, payload:result.data.results})
    } catch(error){
        console.log("get documentary movie err",error)
    }

}

export const getMovieDetail=(movie)=>async dispatch=>{
    dispatch({type: Type.MOVIE_DETAIL, payload:movie})
}

export const getSearchMovie=(keywords) =>async dispatch =>{
    try{
        const result=await axios.get(
            `${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&include_adult=false&query=${keywords}`
        );
        dispatch({type: Type.GET_SEARCH_MOVIE, payload:result.data.results})
    } catch(error){
        console.log("get documentary movie err",error)
    }

}
