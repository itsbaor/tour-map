import {combineReducers} from 'redux'
import reducerMovies from './reducerMovie'

const rootReducer = combineReducers({
    inforMovies: reducerMovies
})
export default rootReducer