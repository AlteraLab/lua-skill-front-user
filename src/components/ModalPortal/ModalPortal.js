import React from 'react';
import ReactDOM from 'react-dom';


const DevAddModalPortal = ({ children }) => {
	const el = document.getElementById('modal');
	return ReactDOM.createPortal(children, el);
};

export default DevAddModalPortal;