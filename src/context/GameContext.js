import React, {useReducer} from "react";
import createDataContext from "./createDataContext";
import SearchScreen from "../screens/SearchScreen";

const gameReducer = (state, action) => {
    switch(action.type){
        //case 'get_game':
         //   return action.payload;
        case 'add_game':
            return [...state,{ 
                    id: action.payload.id,
                    images_api_url: action.payload.images_api_url,
                    name: action.payload.name,
                    release_date: action.payload.release_date
                   // releases_api_url: action.payload.releases_api_url,
                    //reviews_api_url: action.payload.reviews_api_url,
                    //site_detail_url: action.payload.site_detail_url,
                    //themes: action.payload.themes,
                    //videos_api_url: action.payload.videos_api_url
                 } 
            ]
        case 'delete_hero':
            return state.filter((hero) => {
                return hero.id !== action.payload
            });
        case 'edit_blogpost':
            return state.map((blogPost) => {
                if (blogPost.id === action.payload.id) {
                    return action.payload;
                }
                else{
                    return blogPost;
                }
            })
        case 'level_cost':
            return state.map((hero) => {
                if (hero.id === action.payload.id){
                    return action.payload;
                }
                else{
                    return hero;
                }
            })
        default:
            return state;
    }
}

//const getGame = dispatch => {
  //  return dispatch({type: 'get_game', payload: response.data})
//}

const addGame= (dispatch) => {
    return (id,images_api_url,name,release_date) => {
        dispatch( {type: "add_game", payload: {id,images_api_url,name,release_date} } )
    }
}

const deleteGame = (dispatch) => {
    return async (id) => {
        dispatch({ type: 'delete_game', payload: id  })
    }
}

const editBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`, {title: title, content: content})
        dispatch({type: 'edit_blogpost', payload: { id: id, title: title, content: content}})
        callback();
    }
}

const levelUpHero = (dispatch) => {
    return (id, name, level, power,maxHealth,currentHealth,gold ) => {
        dispatch( {type: "level_cost", payload: {id: id, name:name, level:level, power: power, 
            maxHealth:maxHealth,currentHealth:currentHealth, gold:gold } } )
    }
}

export const {Context, Provider} = createDataContext(gameReducer, {addGame,deleteGame}, [] );