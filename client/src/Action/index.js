import axios from 'axios'
import { Fetch_User } from './type'

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/currentuser');
    dispatch({ type: Fetch_User, payload: res.data })
};

export const ProfileUpdate = (userDetails) => async dispatch => {
    debugger;
    const res = await axios.put('/api/Userdetail',{
        
            UserId: userDetails.UserId,
            About: userDetails.About,
            Phone: userDetails.Phone,
            Email: userDetails.Email
    }
    );
    debugger;
    dispatch({ type: Fetch_User, payload: res.data })
};


export const ProfileGet = (userDetails) => async dispatch => {
    debugger;
    const res = await axios.get('/api/Userdetail',{
        params: {
            ID: userDetails
          }
        })
    dispatch({ type: Fetch_User, payload: res.data })
};
