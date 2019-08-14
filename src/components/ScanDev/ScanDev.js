import React, { Component } from 'react';
import './ScanDev.css';

class ScanDev extends Component {

	_connectDev = (e) => {
		e.preventDefault();
		const { scanDev, DevActions, externalIp, externalPort } = this.props;
		//DevActions.setRequestDev(scanDev.address);
		DevActions.setRequestDev(scanDev);
		DevActions.connectDev(externalIp, externalPort, scanDev.address);
	}

	render() {

		const { scanDev } = this.props;

		return (
			<div>
	 			<br/>
					macAddr : {scanDev.address}
 				<br/>
					name : {scanDev.name}
				<br/>
 				<button
					type="radio" 
                    onClick={this._connectDev}
				>연결</button>
			</div>
		);
	}
}

export default ScanDev; 