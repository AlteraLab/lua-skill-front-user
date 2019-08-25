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
		console.log('');
		return (
			<div className="scanDev-Box">
				<div className="scanDev-list" >
					<div className="devlist-row" >
						<div className="scanDev-label">
								이름
						</div>
						<div className="scanDev-content"> 
							{scanDev.name}
						</div>
					</div>
					<div className="devlist-row" style={{borderTop:'1px solid rgba(158, 158, 158, 0.548)'}}>
						<div className="scanDev-label">
								MAC 주소
							</div>
							<div className="scanDev-content">
								{scanDev.address}
							</div>
						</div>
				</div>
				<div className="conBtn">
					<button
						type="radio" 
						id="conbtn"
						onClick={this._connectDev}
					> 연결
					</button>
				</div>
			</div>
		);
	}
}

export default ScanDev; 