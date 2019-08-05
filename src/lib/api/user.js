import axios from 'axios';
import {API_BASE_URL} from '../../constants';

//skill 서버로 데이터 전송
export const getUserInfo = () =>{

    let baseURL = `${API_BASE_URL}/user`

    // https://backend-intro.vlpt.us/6/01.html / https://velopert.com/3401
    return axios.get(baseURL)
    .then(res=> {
        console.log('getUserInfo -> ' + res);
        return res;
    });
}