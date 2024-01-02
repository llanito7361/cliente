import { GET_GENRES } from ".";
import axios from 'axios';

const getGenres = () => {
    return async function (dispatch) {
       try {
        let result = (await axios.get('http://localhost:3001/genres')).data
        dispatch( {
            type: GET_GENRES,
            payload: result
        })
       } catch (error) {
        console.log(error.message)
       }
    }
}

export default getGenres;