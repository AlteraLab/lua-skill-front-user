import React from 'react';
import './NotAdminModal.css'

const NotAdminModal = ({ _handleIsModal }) => {
	return (
		<div className="NotAdminModal">
			<div className="content">
				<p>권한이 없습니다.</p>
				<button
					onClick={_handleIsModal}
				>
					close
				</button>
			</div>
		</div>
	);
};

export default NotAdminModal;