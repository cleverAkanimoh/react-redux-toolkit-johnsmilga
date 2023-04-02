import { ACTION_TYPE } from "./actionType";

export const actionCreator = payload => ({
    type: ACTION_TYPE, 
    payload: payload
})
