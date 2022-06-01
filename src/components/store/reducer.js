//reducer

import {PLAYING_FALSE,DRAW_TRUE,USER_PLAYING,BOARD_NEW,PLAYING_TRUE,DRAW_FALSE,USER_A,BOARD_RESTART} from '../store/types'

const initialState={
    playing: true,
    draw: false,
    user: 'A',
    board:
      [
        [null,null,null],
        [null,null,null],
        [null,null,null]
      ]
  }

const reducer= (state=initialState,action)=>{
    switch(action.type){
        case PLAYING_FALSE:
            return{
                ...state, playing:false
            }
        case DRAW_TRUE:
            return{
                ...state, draw:true
            }
        case USER_PLAYING:
            return{
                ...state, user:'A'?'B':'A'
            }
        case BOARD_NEW:
            return{
                ...state, board:[...state.board]
            }
        case PLAYING_TRUE:
            return{
                ...state, playing:true
            }
        case DRAW_FALSE:
            return{
                ...state, draw:false
            }
        case USER_A:
            return{
                ...state, user:'A'
            }
        case BOARD_RESTART:
            return{
                ...state, board:[[null,null,null],
                                [null,null,null],
                                [null,null,null]]
            }
        default:
            return state;
    }
    
}

export default reducer;