import axios from 'axios'
import { GET_PLATAFORMS } from '.'

const getPlatforms =  () =>{
    return async function(dispatch){
        try {
            let result =( await axios.get('http://localhost:3001/platforms')).data
        dispatch({
            type: GET_PLATAFORMS,
            payload: result
        })
        } catch (error) {
          console.log(error)  
        }
    }
}


export default getPlatforms;