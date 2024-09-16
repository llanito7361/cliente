import axios from "axios";
import { GET_VIDEOGAMES } from "./index.js";

const getGames = () => {
  return async function (dispatch) {
    try {
      let result = (await axios.get("/games"
        // , { withCredentials: true }
    )).data;
      // console.log(result)
      dispatch({
        type: GET_VIDEOGAMES,
        payload: result,
      });
    } catch (error) {
      console.log("error fetching data: ", error);
    }
  };
};

export default getGames;
