import { DELETE_GAME } from "."

const deleteGame = (gameId) =>{
    return function (dispatch){
        dispatch({
            type: DELETE_GAME,
            payload: gameId
        })
    }
} 

export default deleteGame