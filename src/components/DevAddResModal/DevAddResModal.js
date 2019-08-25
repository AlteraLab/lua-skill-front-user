import React from 'react';
import './DevAddResModal.css';
import {MdCheckCircle, MdErrorOutline} from 'react-icons/md';

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
			<div className="DevRes-content">
				<div className="devres-content">
					{
						isResult ?
						(
							<MdCheckCircle size={21} style={{ marginRight:'10px', 
							color:'blue', fontWeight:'bold'}} /> 
						)
						:
						(
							<MdErrorOutline size={21} style={{ marginRight:'10px', 
							color:'red', fontWeight:'bold'}} /> 
						)
					}
					<div className="resModal">
						<h3 id="res-title">{title}</h3>
						<p id="res-subtitle">{content}</p>
					</div>
				</div>
				<div className="close-btn">
					<button
						id="devAddResbtn"
						onClick={_handleIsModal}
					>
						close
					</button>
				</div>
			</div>
		</div>
	);
};

export default DevAddResModal;