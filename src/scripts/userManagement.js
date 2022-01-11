import {reactive} from 'vue'

export const auth = reactive({
    user: null
})

export function authUser(username){
    if(auth.user===null){
        auth.user = username;
    }
    return auth;
}

export function clearUser(){
    auth.user = null;
}