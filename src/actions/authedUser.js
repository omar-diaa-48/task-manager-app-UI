export const SET_AUTHED_USER = 'SET_AUTHED_USER' 
export const REMOVE_AUTHED_USER = 'REMOVE_AUTHED_USER'

export function setAuthedUser(id, token) {
    return {
        type:SET_AUTHED_USER,
        authedUser:{
            id,
            token
        }
    }
}

export function removeAuthedUser() {
    return {
        type : REMOVE_AUTHED_USER,
        authedUser : null
    }
}