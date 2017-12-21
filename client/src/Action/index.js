import axios from 'axios'
import { Fetch_User, Get_Profile } from './type';
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/currentuser');
    dispatch({ type: Fetch_User, payload: res.data })
};

export const ProfileUpdate = (userDetails) =>  dispatch => {
    debugger
    return  new   Promise(async  (resolve, reject) => {
    const res = await axios.put('/api/Userdetail', {
        UserId: userDetails.UserId,
        About: userDetails.About,
        Phone: userDetails.Phone,
        Email: userDetails.Email
    })
   resolve(res.data)    
    console.log(res.data)
   dispatch({ type: Get_Profile, payload: res.data  })
});

};


export const ProfileGet = (userDetails) => async dispatch => {
    const res = await axios.get('/api/GetUserdetail', {
        params: {
            ID: userDetails
        }
    })
    dispatch({ type: Get_Profile, payload: res.data })
};
