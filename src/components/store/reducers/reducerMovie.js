import * as Type from '../Type'
const reducerMoviesInnitialState={
    NetFlixOriginal: null,
    TrendingMovie:null,
    TopRateMovie:null,
    ActionsMovie:null,
    ComedyMovie:null,
    HorrorMovie:null,
    RomanceMovie:null,
    DocumentMovie:null,
    MovieDetail:null,
    SearchMovie:null,
}
const reducerMovies =(state=reducerMoviesInnitialState, action) =>{
    const {type, payload}=action
    switch (type){
        case Type.GET_NETFLIX_ORRIGINAL:

            return{
                ...state, NetFlixOriginal:payload
            }
        case Type.GET_TRENDING_MOVIE:

            return{
                ...state, TrendingMovie:payload
            }
        case Type.GET_TOPRATED_MOVIE:

            return{
                ...state, TopRateMovie:payload
            }
        case Type.GET_ACTION_MOVIE:

            return{
                ...state,  ActionsMovie:payload
            }
        case Type.GET_COMEDY_MOVIE:

            return{
                ...state, ComedyMovie:payload
            }
        case Type.GET_HORROR_MOVIE:

            return{
                ...state, HorrorMovie:payload
            }
        case Type.GET_ROMANCE_MOVIE:

            return{
                ...state, RomanceMovie:payload
            }
        case Type.GET_DOCUMENTARY_MOVIE:

            return{
                ...state, DocumentMovie:payload
            }
            
        case Type.MOVIE_DETAIL:
            return{
                 ...state, MovieDetail:payload
            }
        case Type.GET_SEARCH_MOVIE:

             return{
                 ...state, SearchMovie:payload
            }
      default:
            return state
    }
}

export default reducerMovies;
