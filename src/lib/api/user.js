import axios from 'axios';
import {API_BASE_URL} from '../../constants';

//skill 서버로 데이터 전송
export const getUserInfo = () => {

    const baseURL = `${API_BASE_URL}/user`;

    return axios.get(baseURL)
    .then(res=> {
        console.log('Axios :: GetUserInfo =====');
        console.log(res.data);
        return res;
    });
}

// 허브 삭제
export const deleteHub = (hubId) => {
    const baseURL = `${API_BASE_URL}/hub/${hubId}`;

    return axios.delete(baseURL)
    .then(res => {
        console.log('Axios :: DeleteHub =====');
        console.log(res);
        return res;
    });
}