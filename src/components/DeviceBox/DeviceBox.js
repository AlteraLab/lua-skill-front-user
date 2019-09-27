import React from 'react'
import './DeviceBox.css'
import { MdDevicesOther, MdInfo} from 'react-icons/md';


const DeviceBox = ({ devInfo}) => {
    return (
        <div className="DeviceBox" >
            <div className="BigTitle">
                <h3>
                    <span>디바이스 상세 정보</span>
                    <MdInfo size={25} style={{position:'relative', float:'right'}} />
                </h3> 
            </div>
            <header>
                <div className="dev-name">
                    <span className="dtitle">
                        <MdDevicesOther size={20} style={{
                                position: 'relative',
                                top: '4px',
                                marginRight: '5px'
                            }} />
                        <strong>{devInfo.dev_name}</strong>
                    </span>
                </div>           
            </header>            
            <section>
                <article>
                    <div className="dev-row">
                        <div className="dev-label">* 모델명</div>
                        <div className="dev-content">{devInfo.dev_model}</div>
                    </div>
                    <div className="dev-row">
                        <div className="dev-label">* 디바이스 타입</div>
                        <div className="dev-content">{devInfo.dev_type}</div>
                    </div>
                    <div className="dev-row">
                        <div className="dev-label">* 디바이스 아이디</div>
                        <div className="dev-content">{devInfo.dev_id}</div>
                    </div>
                    <div className="dev-row division">
                        <div className="dev-label">* 제조사</div>
                        <div className="dev-content">{devInfo.dev_make}</div>
                    </div>
                    <div className="dev-row division">
                        <div className="dev-label">* MAC 주소</div>
                        <div className="dev-content">{devInfo.dev_mac}</div>
                    </div>    
                </article>
            </section>
        </div>
        )
}

export default DeviceBox;