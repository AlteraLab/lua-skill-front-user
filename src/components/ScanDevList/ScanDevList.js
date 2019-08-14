import React  from 'react';
import './ScanDevList.css';
import ScanDev from '../ScanDev/ScanDev';

const ScanDevList = ( { scanDevs, DevActions } ) => {
	return (
		<div>
			{
				scanDevs.map(
					dev => {
						return <ScanDev
									key={dev.address}
									scanDev={dev}
									DevActions={DevActions}
								/>
					}
				)
			}
		</div>
	);
};

export default ScanDevList;