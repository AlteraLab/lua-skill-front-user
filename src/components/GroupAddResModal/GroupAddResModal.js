import React from 'react';
import './GroupAddResModal.css';
import { MdErrorOutline } from 'react-icons/md';

const GroupAddResModal = ( { msg, _handleIsModal } ) => {
	return (
		<div className="GroupAddResModal">
			<div className="addRes-content">
				<div className="add-content">
					<MdErrorOutline size={21} style={{ 
												marginRight:'10px', 
												color:'red', 
												fontWeight:'bold'
											}} 
					/> 
					<p id="resMsg"> { msg } </p>
				</div>
				<div className="close-btn">
					<button
						id="addresbtn"
						onClick={_handleIsModal}
					>
						close
					</button>
				</div>
			</div>
		</div>
	);
};

export default GroupAddResModal;
