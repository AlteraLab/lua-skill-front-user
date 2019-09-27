import React from 'react';
import './HubDeleteModal.css';
import {MdDelete} from 'react-icons/md';

const HubDeleteModal = ({ _handleIsModal, msg }) => {
	return (
		<div className="HubDeleteModal">
			<div className="hubdelete-content">
				<div className="delete-content">
				<MdDelete size={22} style={{ marginRight:'10px', color:'rgb(87, 87, 87)'}} /> 
					<p id="message"> {msg} </p>
				</div>
				<div className="close-btn">
					<button
						id="deletebtn"
						onClick={_handleIsModal}
					>
						close
					</button>
				</div>
			</div>
		</div>
	)
};

export default HubDeleteModal;