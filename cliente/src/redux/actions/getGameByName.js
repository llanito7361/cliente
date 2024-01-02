import { GET_VGAMES_BY_NAME } from "."

const getGameByName = (name) => {
    return function(dispatch) {
            dispatch({
                type: GET_VGAMES_BY_NAME,
                payload: name
            })
    }
}

export default getGameByName
;