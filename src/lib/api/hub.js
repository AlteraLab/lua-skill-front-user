import axios from 'axios';
import ip from 'ip'

//skill 서버로 데이터 전송
export const registerHub = (natAddress) =>{
    

    let baseURL = `http://${natAddress}:12345/hub`

    return axios.post(baseURL,{natAddress: natAddress})
    .then(res=> {
        console.log(res);
        return res;
    });
}