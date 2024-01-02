import axios from 'axios'
import { ADD_VIDEOGAMES } from '.'

let postGames = async (dispatch) => {
    try {
        let results = (await axios.post('http://localhost:3001/videogames')).data
    dispatch({
        type: ADD_VIDEOGAMES,
        payload: results
    })
    } catch (error) {
    console.log('el error fue ',error)        
    }
}

export default postGames; 