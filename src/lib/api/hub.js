import axios from 'axios';
import ip from 'ip';
import publicIp from 'public-ip';
import { 
    HUB_EXTERNAL_PORT,
    API_BASE_URL
} from '../../constants';

//skill 서버로 데이터 전송
export const registerHub = (hubInfo) => {
    const baseURL = `${API_BASE_URL}/hub`
    return axios
        .post(baseURL, hubInfo)
        .then(res => {
            console.log(res);
            return res;
        });
}

//허브 정보 조회
export const scanHub = () => {
    return publicIp.v4().then(natAddress => {
        console.log(ip.address());
        const baseURL = `http://${natAddress}:${HUB_EXTERNAL_PORT}/hub`
        return axios.get(baseURL, {
            timeout: 8000 //5초 이내로 응답이 오지 않으면 에러로 간주
        })
        .then(res => {
            console.log(res);
            return res;
        });
    })
}