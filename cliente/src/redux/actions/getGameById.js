import { GET_VGAME_BY_ID } from ".";
import axios from "axios";
const getGameById = (id) => {
  return async function (dispatch) {
    // const idd = parseInt(id)
    try {
      const response = await axios.get(`/videogames/${id}`)
        const gameData = await response.data
      dispatch({
        type: GET_VGAME_BY_ID,
        payload: gameData
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export default getGameById;
