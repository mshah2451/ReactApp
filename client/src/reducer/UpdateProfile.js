import { Get_Profile } from '../Action/type';
export default (state = null, action) => {
    switch (action.type) {

        case Get_Profile:
            return action.payload || false;
        default:
            return state

    }
}