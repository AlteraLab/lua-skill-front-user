import React from 'react';
import './NotAdminModal.css';
import {MdComment} from 'react-icons/md';


const NotAdminModal = ({ _handleIsModal }) => {
	return (
		<div className="NotAdminModal">
			<div className="nAdmin-content">
				<div className="close-content">
				 <MdComment size={25} style={{ marginRight:'10px', color:'blue'}} /> 
					<p id="mes">권한이 없습니다.</p>
				</div>
				<div className="close-btn">
					<button
						id="btnclose"
						onClick={_handleIsModal}
					>
						close
					</button>
				</div>
			</div>
		</div>
	);
};

export default NotAdminModal; 