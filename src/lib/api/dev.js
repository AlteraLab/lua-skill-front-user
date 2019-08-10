import axios from 'axios';
import {API_BASE_URL} from '../../constants';

// IoT Hub로 데이터 연결 가능한 디바이스 스캔 요청
export const scanDev = (hubIp, hubPort) => {
	//let hubURL = `http://${hubIp}:${hubPort}/hub/scan`
	let hubURL = `http://localhost:8083/hub/scan`

	return axios.get(hubURL)
	.then(res => {
		console.log('Axios :: Scan Devs =====');
		console.log(res.data);
		return res;
	})
}

// IoT Hub로 디바이스 연결 요청
export const connectDev = (macAddr) => {
	//let hubURL = `http://${hubIp}:${hubPort}/hub/connect/${madAddr}`;
	let hubURL = `http://localhost:8083/hub/connect/${macAddr}`;

	return axios.post(hubURL)
	.then(res => {
		console.log('Axios :: Connect Dev =====');
		console.log(res.data);
		return res;
	})
}