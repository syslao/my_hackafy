import axios from 'axios';
import { API_URL } from '../config/constants';
import {
USER_SIGN_IN_SUCCESS,
USER_SIGN_IN_FAILURE,
} from './actionTypes';

export const userSignIn = (credentials) => (dispatch) => {
  return axios({
    method: 'post',
    url: '{$API_URL}/users/signin',
    data: {
      email: credentials.email,
      password: credentials.password,
    }
  })
  .then(({ data }) =>{
      console.log('sucessfully signed in', data );
      dispatch({
        type: USER_SIGN_IN_SUCCESS,
        payload: data.user,
      });
      // dispatch(push('/'));
  })
  .catch(response => {
    console.log('signin failed', response);
    dispatch({
      type: USER_SIGN_IN_FAILURE,
    })
  });
}
