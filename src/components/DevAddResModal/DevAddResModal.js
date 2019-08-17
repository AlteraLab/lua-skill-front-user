import React from 'react';
import './DevAddResModal.css'

const DevAddResModal = ({ isResult, _handleIsModal }) => {

	let title = null;
	let content = null;
	if(isResult) {
		title = `등록 성공`;
		content = '디바이스가 성공적으로 등록되었습니다.';
	} else {
		title = `등록 실패`;
		content = '다시 시도해주세요.';
	}

	return (
		<div className="DevAddResModal">
			<div className="content">
				<h3>{title}</h3>
				<p>{content}</p>
				<button
					onClick={_handleIsModal}
				>
					close
				</button>
			</div>
		</div>
	);
};

export default DevAddResModal;