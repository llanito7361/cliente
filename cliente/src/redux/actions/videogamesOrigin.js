import { GET_VIDEOGAMES_ORIGIN } from ".";

const getVideoGamesOrigin = (created) => {
    return function (dispatch){
        dispatch({
            type: GET_VIDEOGAMES_ORIGIN,
            payload: created
        })
    } 
}
export default getVideoGamesOrigin;


