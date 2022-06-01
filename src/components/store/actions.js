
//actions
import {PLAYING_FALSE,DRAW_TRUE,USER_PLAYING,BOARD_NEW,PLAYING_TRUE,DRAW_FALSE,USER_A,BOARD_RESTART} from '../store/types'

export const playingFalse=payload=>({
    type:PLAYING_FALSE,
    payload
})

export const drawTrue=payload=>({
    type:DRAW_TRUE,
    payload
})


export const userPlaying=payload=>({
    type:USER_PLAYING,
    payload
})

export const boardNew=payload=>({
    type:BOARD_NEW,
    payload
})


export const playingTrue=payload=>({
    type:PLAYING_TRUE,
    payload
})

export const drawFalse=payload=>({
    type:DRAW_FALSE,
    payload
})


export const userA=payload=>({
    type:USER_A,
    payload
})


export const boardRestart=payload=>({
    type:BOARD_RESTART,
    payload
})