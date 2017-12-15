import {Fetch_User} from '../Action/type';
export default (state=null,action)=>{
    switch(action.type){
        
    case Fetch_User:
    return action.payload||false;
        default:
 return state

    }
}