import { configureStore } from '@reduxjs/toolkit'


const initialstate = {
    users : [],
    
}

const reducer = (state =initialstate, action)=>{
    switch(action.type){
        case 'Register':
            return {
                ...state,
                users :[...state.users,action.payload]
            }

        case 'Login':
            return{
                ...state,
                user:action.payload
            }   
            case 'Logout':
            return{
                ...state,
                user : null
            }  
            default :
            return state;
    }
}
const store =configureStore({reducer});
export default store;