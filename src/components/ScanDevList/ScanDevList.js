import React from 'react';
import './ScanDevList.css';
import ScanDev from '../ScanDev/ScanDev';

const ScanDevList = ( { scanDevs, DevActions, externalIp, externalPort } ) => {
	return (
		<div>
			{
				scanDevs.map(
					dev => {
						return <ScanDev
									key={dev.address}
									scanDev={dev}
									DevActions={DevActions}
									externalIp={externalIp}
									externalPort={externalPort}
								/>
					}
				)
			}
		</div>
	);
};

export default ScanDevList;