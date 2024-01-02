import { SET_PAGE } from "."

const setPage = (page) => {
    return function(dispatch){
        dispatch({
            type: SET_PAGE,
            payload: page
        })
    }
}
export default setPage;