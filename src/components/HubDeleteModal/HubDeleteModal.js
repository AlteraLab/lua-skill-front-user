import React from 'react';
import './HubDeleteModal.css'

const HubDeleteModal = ({ _handleIsModal, msg }) => {
	return (
		<div className="HubDeleteModal">
			<div className="content">
				<p>{msg}</p>
				<button
					onClick={_handleIsModal}
				>
					close
				</button>
			</div>
		</div>
	)
};

export default HubDeleteModal;