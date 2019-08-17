import React from 'react';
import './GroupAddResModal.css'

const GroupAddResModal = ( { msg, _handleIsModal } ) => {
	return (
		<div className="GroupAddResModal">
			<div className="content">
				<p>
					{msg}
				</p>
				<button
					onClick={_handleIsModal}
				>
					close
				</button>
			</div>
		</div>
	);
};

export default GroupAddResModal;
