import { GENRES_FILTER } from "."

const genresFilter = (selectedGenre) => {
    return function (dispatch) {
        dispatch({
            type: GENRES_FILTER,
            payload: selectedGenre
        })
    }
}
export default genresFilter;