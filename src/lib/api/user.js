import axios from 'axios';

//skill 서버로 데이터 전송
export const getUserInfo = () =>{

    let baseURL = `http://localhost:8083/user`

    return axios.get(baseURL)
    .then(res=> {
        console.log(res);
        return res;
    });
}