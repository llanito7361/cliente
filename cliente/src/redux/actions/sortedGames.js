
import { SORT_VGAMES } from ".";

const sortVideogames = (sortingOption) => {
  return {
    type: SORT_VGAMES,
    payload: sortingOption,
  };
};

export default sortVideogames