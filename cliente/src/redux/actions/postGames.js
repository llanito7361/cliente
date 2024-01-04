import axios from 'axios'
import { ADD_VIDEOGAMES } from '.'

let postGames = async (dispatch) => {
    try {
        let results = (await axios.post('/videogames',{ withCredentials: true })).data
    dispatch({
        type: ADD_VIDEOGAMES,
        payload: results
    })
    } catch (error) {
    console.log('el error fue ',error)        
    }
}

export default postGames; 