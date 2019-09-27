import axios from 'axios';
import {API_BASE_URL} from '../../constants';

//skill 서버로 데이터 전송
export const redirectWithAuth = (authCode) =>{

    console.log('AuthCode ->',authCode);
    let baseURL = `${API_BASE_URL}/kakaotest/${authCode}`
    
    return axios.post(baseURL)
    .then(res=> {
        console.log('Axios :: RedirectWithAuth Result =====');
        console.log(res.data);
        return res;
    });
}