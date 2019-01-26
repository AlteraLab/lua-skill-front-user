import axios from 'axios';

//skill 서버로 데이터 전송
export const redirectWithAuth = (authCode) =>{

    let baseURL = `http://localhost:8083/kakaotest/${authCode}`

    return axios.post(baseURL)
    .then(res=> {
        console.log(res);
        return res;
    });
}