import React from 'react'
import './DeviceBox.css'
import { MdDeviceHub} from 'react-icons/md';


const DeviceBox = ({ devInfo}) => {
    return (
        
        <div className="DeviceBox" >
            <header>
                <div className="dev-name">
                    <span className="dtitle">
                    <MdDeviceHub size={17} style={{
                            position: 'relative',
                            top: '2px',
                            marginRight: '5px',
                            borderRadius: '5px',
                            backgroundColor: '#2A2C2B',
                            color: 'white'
                        }} />
                        <strong>{devInfo.dev_name}</strong>
                        </span>
                    {/* <span className="subtitle">{hubInfo.search_id}</span> */}
                
                        </div>
                        
                </header>            
                <section>
                    <article>
                        <div className="dev-row">
                        <div className="dev-label">모델명</div>
                        <div className="dev-content">LG TV</div>
                    </div>
                    <div className="dev-row">
                        <div className="dev-label">디바이스 상태</div>
                        <div className="dev-content">ON</div>
                    </div>
                    <div className="dev-row">
                        <div className="dev-label">디바이스 타입</div>
                        <div className="dev-content">(제어, 센싱, 복합)</div>
                    </div>
                    <div className="dev-row division">
                        <div className="dev-label">제조사</div>
                        <div className="dev-content">LG</div>
                    </div>
                    <div className="dev-row division">
                        <div className="dev-label">MAC 주소</div>
                        <div className="dev-content">12121212</div>
                    </div>
                    
                    </article>
            </section>
            
        </div>)
}

export default DeviceBox;