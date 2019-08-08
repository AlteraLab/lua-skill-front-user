import React from 'react';
import './DevBtnBoard.css';
import { Link } from 'react-router-dom';
import devices from '../../img/devices.jpg';
import { MdDeviceHub , MdPersonAdd, MdSettings, MdDevicesOther} from 'react-icons/md';
import Moment from 'react-moment';
import log from '../../img/log.jpg';


const DevAddButton = () => {
    return (
        <Link className="dev-add-btn" to="/dadd">
            <img src={devices}  style={{position:'absolute', top:'-5px', marginLeft:'58%'}}
            id="devices"></img>
        </Link>
    )
}

const DevBtnBoard = ({ children, hubInfo, title}) => {
    console.log('In DevBtnBoard');
    console.log(hubInfo);

    return (
        <article className="BasicBoard">
            <section className="basic-container">
                <header className="basic-header">
                    <h3>
                        <span>
                            {title} 
                            {<DevAddButton />} 
                        </span>
                    </h3>
                    
                </header>
                <div className="basic-field">
                    <div className="HubMInfo">
                <header>
                <div className="hub-name">
                    <span className="title">
                        <MdDeviceHub size={21} style={{
                            position: 'relative',
                            top: '3px',
                            marginRight: '5px',
                            borderRadius: '5px',
                            backgroundColor: '#2A2C2B',
                            color: 'white'
                        }} />
                        <strong>{hubInfo.hub_name}</strong>
                        </span>
                    {/* <span className="subtitle">{hubInfo.search_id}</span> */}
                
                        </div>
                </header>            
                <section>
                    <article>
                        <div className="hub-row">
                        <div className="hub-label">연결된 NAT라우터</div>
                        <div className="hub-content">{hubInfo.external_ip}</div>
                    </div>
                    <div className="hub-row">
                        <div className="hub-label">허브 MAC주소</div>
                        <div className="hub-content">{'b8:27:eb:96:e5:b4'.toUpperCase()}</div>
                    </div>
                    <div className="hub-row">
                        <div className="hub-label">검색용 아이디</div>
                        <div className="hub-content">{hubInfo.search_id}</div>
                    </div>
                    <div className="hub-row">
                        <div className="hub-label">허브 상태</div>
                        <div className="hub-content">on</div>
                    </div>
                    <div className="hub-row">
                        <div className="hub-label">허브</div>
                        <div className="hub-content">ㅣㅣㅣ</div>
                    </div>
                    <div className="hub-row division">
                        <div className="hub-label">허브 생성시간</div>
                        <div className="hub-content">
                            <Moment format="YYYY-MM-DD HH:mm (UTCZ)">
                                {hubInfo.createdAt}
                            </Moment>
                        </div>
                    </div>

                    <div className="box-row">
                        <Link className="log-btn" 
                            to={
                                {
                                    pathname: '/log',
                                    state: {
                                        hubMac: hubInfo.hubMac
                                    }
                                }
                            }
                        >
                            <div className="box-one">
                                <img src={log} id={log} size={37}/>
                                <br/>
                                로그 조회    
                            </div>
                        </Link>
                        
                        <Link className="set-btn" 
                            to="/set"
                        >
                            <div className="box-two">
                                <MdSettings size={37} />
                                <br/>
                                허브 설정
                            </div>
                        </Link>
                        
                        <Link className="friadd-btn" 
                            to="/friadd"
                        >
                            <div className="box-three">
                                <MdPersonAdd size={37} />
                                <br/>
                                친구 추가
                            </div>
                        </Link>
                    </div>
                </article>
            </section> 
            <footer>
                <div className="device-list">
                    <span className="devlist-title">
                        <MdDevicesOther size={25} style={{position:'relative', top:'3px'}}/>
                        <strong style={{fontSize:'16px',paddingLeft:'6px'}}>
                            디바이스 목록</strong>
                   </span>
                        
                    <div className="dev-column">
                        <div className="dev-row">
                            <Link to="/devInfo">
                                <div className="devlist">
                                    디바이스1
                                </div>
                            </Link>
                            
                            <div className="devlist">
                                디바이스2
                            </div>
                        </div>
                        
                        <div className="dev-row">
                            <div className="devlist">
                            디바이스3
                            </div>
                            <div className="devlist">
                                디바이스4
                            </div>
                        </div>
                        <div className="dev-row">
                            <div className="devlist">
                            디바이스5
                            </div>
                            <div className="devlist">
                                디바이스6
                            </div>
                        </div>
                        <div className="dev-row">
                            <div className="devlist">
                            디바이스7
                            </div>
                            <div className="devlist">
                                디바이스8
                            </div>
                        </div>
                        <div className="dev-row">
                            <div className="devlist">
                            디바이스9
                            </div>
                            <div className="devlist">
                                디바이스10
                            </div>
                        </div>
                        
                    </div>

                </div>
            </footer>
                </div>
                {children}
                </div>
            </section>
        </article>
    );
};

export default DevBtnBoard;