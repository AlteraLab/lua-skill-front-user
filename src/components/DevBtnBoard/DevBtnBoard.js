import React from 'react';
import './DevBtnBoard.css';
import { Link } from 'react-router-dom';
import { MdDeviceHub , MdPersonAdd, MdSettings, MdDevicesOther, MdAddCircleOutline} from 'react-icons/md';
import Moment from 'react-moment';
import log from '../../img/log.jpg';
import { connectDev } from '../../store/modules/dev';

const Dev = ({ connectedDev }) => {
    const devType = connectedDev.devType;
    console.log('connectDev')
    console.log(connectedDev)
    return (
        <Link to={
            {
                pathname: '/devInfo',
                state: {
                    devType: {devType}
                }
            }
        }>
            <div className="devlist">
                {connectedDev.name}
                <br/>
                {/* {connectedDev.address} */}
                <br/>
                {/* {connectedDev.devType} */}
            </div>
        </Link>
    )
}

const DevRowList = ({ connectedDevs }) => {
    return (
        <div className="dev-row">
            {
                connectedDevs.map(
                    dev => {
                        return <Dev
                                    key={dev.address}
                                    connectedDev={dev}
                                />
                    }
                )
            }
        </div>
    )
}

const DevColumnList = ({ connectedDevs }) => {
    // 2차원 배열로 만들어서, 2차원 배열의 각 요소를 넘겨줘야겠다!
    // Dimensional Array ConnectedDevs : connectedDevs(1차원 배열) 을 2차원 배열 형태로 만든 버전
    let dimenArrConnectedDevs = [];
    let i = 0;
    let devs = [];
    for(const dev of connectedDevs) {
        devs.push(dev)
        i++;
        if(i === 2) {
            dimenArrConnectedDevs.push(devs);
            i = 0;
            devs = [];
        }
    }
    if(i === 1){
        dimenArrConnectedDevs.push(devs);
    }

    let index = 0;
    return (
        <div className="dev-column">
            {
                dimenArrConnectedDevs.map(
                    devs => {
                        return <DevRowList
                                    key={index++}
                                    connectedDevs={devs}
                                />
                    }
                )
            }
        </div>
    )
}

const DevBtnBoard = ({ children, hubInfo, title, connectedDevs }) => {
    return (
        <article className="DevBtnBoard">
            <section className="basic-container">
                <header className="basic-header">
                    <h3>
                        <span>
                            {title} 
                            {/* {
                                <DevAddButton
                                    to={
                                        {
                                            pathname: `/dadd`,
                                            state: {
                                                hubInfo: {
                                                    externalIp: hubInfo.externalIp,
                                                    externalPort: hubInfo.externalPort
                                                }
                                            }
                                        }
                                    } 
                                />
                            }  */}
                        </span>
                    </h3>
                </header>
                <div className="basic-field">
                    <div className="HubMInfo">
                        <header>
                            <div className="hub-name">
                                <span className="title">
                                    <MdDeviceHub 
                                        size={21} 
                                        style={
                                            {
                                                position: 'relative',
                                                top: '3px',
                                                marginRight: '5px',
                                                borderRadius: '5px',
                                                backgroundColor: '#2A2C2B',
                                                color: 'white'
                                            }
                                        } 
                                    />
                                    <strong>{hubInfo.hubName}</strong>
                                </span>
                            </div>
                            <div className="hubdelete">
                                삭제
                            </div>
                        </header>

                        <section>
                            <article>
                                <div className="hub-row">
                                    <div className="hub-label">연결된 NAT라우터</div>
                                    <div className="hub-content">{hubInfo.externalIp}</div>
                                </div>
                                <div className="hub-row">
                                    <div className="hub-label">허브 MAC주소</div>
                                    <div className="hub-content">{'b8:27:eb:96:e5:b4'.toUpperCase()}</div>
                                </div>
                                <div className="hub-row">
                                    <div className="hub-label">검색용 아이디</div>
                                    <div className="hub-content">{hubInfo.searchId}</div>
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
                                            <MdPersonAdd size={37}/>
                                    {/*className="hambclicker" 
                                    onClick={ this._menuToggle } */}
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
                                        연결 디바이스</strong>
                                </span>
                                <Link 
                                    to={
                                        {
                                            pathname: `/dadd`,
                                            state: {
                                                hubInfo: {
                                                    externalIp: hubInfo.externalIp,
                                                    externalPort: hubInfo.externalPort
                                                }
                                            }
                                        }
                                    }
                                    style={
                                        {
                                            marginLeft:'auto', 
                                            color:'black'
                                        }
                                    }
                                >
                                    <MdAddCircleOutline 
                                        size={25} 
                                        style={
                                            {
                                                position:'relative',
                                                bottom:'2px',
                                                marginLeft:'auto'
                                            }
                                        }
                                    />
                                </Link>
                                <DevColumnList
                                    connectedDevs={connectedDevs}
                                />
                            </div>
                        </footer>
                        {children}
                    </div>
               </div>
            </section>
        </article>
    );
};

export default DevBtnBoard;