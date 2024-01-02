import { ADD_VIDEOGAMES, DELETE_GAME, GENRES_FILTER, GET_GENRES, GET_PAGINATED_GAMES, GET_PLATAFORMS, GET_VGAMES_BY_NAME, GET_VGAME_BY_ID, GET_VIDEOGAMES, GET_VIDEOGAMES_ORIGIN, SET_PAGE, SET_PAGE_SIZE, SORT_VGAMES } from "../actions/index.js"

const initialState = {
    videogames : [], //estos dos buenos hombres, originalmente comparten la misma data, asignada en el case GETVIDEOGAMES
    gameDetail: [],
    vgfilter: [], //estos dos buenos hombres, originalmente comparten la misma data, asignada en el case GETVIDEOGAMES
    genres: [],
    platforms: [],
    sortedGames: [],
    gameByName: [],
    gameById: [],
    pagination: {
        currentPage: 1,
        pageSize: 10,
        totalItems: 0
    },
    paginatedGames: []
}

//miremos y remiremos el SORTED games, q es el q mas nos costo


const rootReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_VIDEOGAMES:{
            // console.log('get games action', action)
            return {
                ...state,
                videogames: action.payload,
                vgfilter: action.payload,
                sortedGames: action.payload
            }
        }
        case ADD_VIDEOGAMES: {
            return {
                ...state,
                videogames: [...state.videogames, action.payload]
            }
        }
        case GET_GENRES:{
            // console.log('get genres action', action)
            return{
                ...state,
                genres: action.payload
            }
        }
        case GET_PLATAFORMS:{
            // console.log('get platform action', action)
            return{
                ...state,
                platforms: action.payload
            }
        }
        case GENRES_FILTER:{
            const allGames = state.vgfilter;
            const genresfilter = 
            action.payload === 'All' ? allGames : allGames.filter(vgame => vgame.genres.includes(action.payload))
            if(genresfilter.length === 0) {alert(`no videogames found por ${action.payload} genre`)
            return state
        }else{
                return{
                    ...state,
                    vgfilter : genresfilter
                }
            }
        }
        case GET_VIDEOGAMES_ORIGIN : {
            const gamesByOrigin = state.videogames;
                    action.payload.created === true ?  
                    gamesByOrigin.filter( game => game.created === true) :
                    gamesByOrigin.filter( game => game.created === false)
            return {
                    ...state,
                    videogames: action.payload === 'All' ? state.videogames : gamesByOrigin
            }
        }
        case GET_PAGINATED_GAMES: {
            return{
                ...state,
                paginatedGames: action.payload
            }
        }
    
        case SORT_VGAMES: {
            let sortedArr;
      
            if (action.payload === 'rating') {
              // Ordenar por rating
              sortedArr = state.videogames.slice().sort((a, b) => b.rating - a.rating);
            } else {
              // Ordenar por nombre
              sortedArr = state.videogames.slice().sort((a, b) => {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
      
                return action.payload === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
              });
            }
      
            return {
              ...state,
              videogames: sortedArr,
            };
          }
        case GET_VGAMES_BY_NAME:{
            const filteredByName = state.vgfilter.slice().filter(game =>
                    game.name.toLowerCase().includes(action.payload.toLowerCase())
                )
                return{
                    ...state,
                    gameByName: filteredByName
                }
        }
        case GET_VGAME_BY_ID :{
            
            return{
                ...state, 
                gameById: [action.payload]
            }
        }
        case DELETE_GAME: {
            const updatedGames = state.videogames.filter(game => game.id !== action.payload)
            return{
                ...state,
                videogames: updatedGames
            }
        }
        case SET_PAGE: {
            return{
                ...state,
                pagination: {
                    ...state.pagination,
                    currentPage: action.payload
                }
            }
        }
        case SET_PAGE_SIZE: {
                return {
                    ...state,
                    pagination: {
                        ...state.pagination,
                        pageSize: action.payload
                    }
                }
        }
        default: 
        return state
    }
}

export default rootReducer