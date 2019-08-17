import React from 'react';
import './DevBtnBoard.css';
import { Link, Redirect } from 'react-router-dom';
<<<<<<< HEAD
import { MdDeviceHub, MdPersonAdd, MdSettings, 
        MdDevicesOther, MdAddCircleOutline, MdDescription 
} from 'react-icons/md';
import Moment from 'react-moment';
import log from '../../img/log.jpg';
import { connectDev } from '../../store/modules/dev';
import { NotAdminModal } from '..';
import {NotAdminModal,
    HubDeleteModal,} from '..';
import { css } from '@emotion/core';
import { RingLoader } from 'react-spinners';

=======
import { MdDeviceHub, MdPersonAdd, MdSettings, MdDevicesOther, MdAddCircleOutline } from 'react-icons/md';
import Moment from 'react-moment';
import log from '../../img/log.jpg';
import { connectDev } from '../../store/modules/dev';
import { css } from '@emotion/core';
import { RingLoader } from 'react-spinners';
import {
    NotAdminModal,
    HubDeleteModal,
} from '..';


>>>>>>> 2620c0134cfc248d1713dac26ed639340965e601
const override = css`
                    display: block;
                    margin: 0 auto;
                    border-color: red;
                `;

const Dev = ({ connectedDev }) => {
    const devType = connectedDev.devType;
    console.log('connectDev')
    console.log(connectedDev)
    return (
        <Link to={
            {
                pathname: '/devInfo',
                state: {
                    devType: { devType }
                }
            }
        }>
            <div className="devlist">
                {connectedDev.name}
                <br />
                {/* {connectedDev.address} */}
                <br />
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
<<<<<<< HEAD
                        />  
=======
                        />
>>>>>>> 2620c0134cfc248d1713dac26ed639340965e601
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

    for (const dev of connectedDevs) {
        devs.push(dev)
        i++;
        if (i === 2) {
            dimenArrConnectedDevs.push(devs);
            i = 0;
            devs = [];
        }
    }
    if (i === 1) {
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

<<<<<<< HEAD
const DevBtnBoard = ({ children, hubInfo, title, connectedDevs,
            HubActions, isModalAboutNotAdmin, isModalAboutHubDelete,
            isLoadAboutHubDelete, _handleMethods, userId, msg }) => {
=======
const DevBtnBoard = ({ children, hubInfo, title, connectedDevs, HubActions, isModalAboutNotAdmin, isModalAboutHubDelete, isLoadAboutHubDelete, _handleMethods, userId, msg }) => {
>>>>>>> 2620c0134cfc248d1713dac26ed639340965e601

    const isAdmin = (hubInfo.adminId === userId) ? true : false;
    return (
        <article className="DevBtnBoard">
            <section className="basic-container">
                <header className="basic-header">
                    <h3>
                        <span>
<<<<<<< HEAD
                            {title} 
=======
                            {title}
>>>>>>> 2620c0134cfc248d1713dac26ed639340965e601
                        </span>
                    </h3>
                </header>
                <div className="basic-field">
                    <div className="HubMInfo">
                        <header>
                            <div className="hub-name">
                                <span className="title">
<<<<<<< HEAD
                                    <MdDeviceHub 
=======
                                    <MdDeviceHub
>>>>>>> 2620c0134cfc248d1713dac26ed639340965e601
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
                            {
                                isAdmin ? 
                                (
                                    <div
                                        className="hubdelete"
                                        onClick={_handleMethods._handleDeleteHub}
                                    >
                                            삭제
                                    </div>
                                )
                                :
                                (
                                    <div
                                        className="hubdelete"
                                        onClick={HubActions.setIsModalWithTrue}
                                    >
                                        삭제
<<<<<<< HEAD
                                    </div>
                                )
                            }
=======
                                   </div>
                                )
                            }
                            
>>>>>>> 2620c0134cfc248d1713dac26ed639340965e601
                        </header>

                        <section>
                            <article>
                                <div className="Infohub" style={{borderBottom:"1px solid #red", height:'auto'}}>
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
<<<<<<< HEAD
=======
                                
>>>>>>> 2620c0134cfc248d1713dac26ed639340965e601
                                <div className='sweet-loading'>
                                    <RingLoader
                                        css={override}
                                        sizeUnit={"px"}
                                        size={150}
                                        color={'#123abc'}
                                        loading={isLoadAboutHubDelete}
                                    />
                                </div> 
<<<<<<< HEAD
                                </div>
                                {
                                    isModalAboutHubDelete && <HubDeleteModal
                                    _handleIsModal={_handleMethods._handleIsModalAboutHubDelete}
                                    msg={msg}
                                                                />
=======

                                {
                                    isModalAboutHubDelete && <HubDeleteModal
                                                                _handleIsModal={_handleMethods._handleIsModalAboutHubDelete}
                                                                msg={msg}
                                                             />
                                }

                                {
                                    isModalAboutNotAdmin && <NotAdminModal
                                                                _handleIsModal={_handleMethods._handleIsModalAboutNotAdmin}
                                                            />
>>>>>>> 2620c0134cfc248d1713dac26ed639340965e601
                                }

                                {
                                    isModalAboutNotAdmin && <NotAdminModal
                                                                _handleIsModal={_handleMethods._handleIsModalAboutNotAdmin}
                                                            />
                                }
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
<<<<<<< HEAD
                                        <MdDescription size={37} style={{ color: '#6D6D74' }} />
                                            <br />
                                            로그 조회 
                                        </div>
                                    </Link>
                                    
=======
                                            <img src={log} id={log} size={37} />
                                            <br />
                                            로그 조회
                                        </div>
                                    </Link>

>>>>>>> 2620c0134cfc248d1713dac26ed639340965e601
                                    {/* 허브 설정 페이지 블로킹 */}
                                    {
                                        isAdmin ? 
                                        (
                                            <Link 
                                                className="set-btn"
                                                to="/set"
                                            >
                                                <div className="box-two">
<<<<<<< HEAD
                                                    <MdSettings size={37} style={{ color: '#6D6D74' }} />
=======
                                                    <MdSettings size={37} />
>>>>>>> 2620c0134cfc248d1713dac26ed639340965e601
                                                    <br />
                                                    허브 설정
                                                </div>
                                            </Link>
                                        )
                                        :
                                        (
                                            <div className="set-btn box-two">
                                                <MdSettings 
                                                    size={37}
                                                    onClick={HubActions.setIsModalWithTrue}
<<<<<<< HEAD
                                                    style={{ color: '#6D6D74' }} 
=======
>>>>>>> 2620c0134cfc248d1713dac26ed639340965e601
                                                />
                                                <br />
                                                허브 설정
                                            </div>
                                        )
                                    }

                                    {/* 친구 추가 페이지 */}
                                    <div className="friadd-btn box-three">
                                        <MdPersonAdd
                                            size={37}
                                            onClick={_handleMethods._handleGroupUserPage}
<<<<<<< HEAD
                                            style={{ color: '#6D6D74' }} 
=======
>>>>>>> 2620c0134cfc248d1713dac26ed639340965e601
                                        />
                                        <br />
                                        유저 관리
                                    </div>
                                </div>
                            </article>
<<<<<<< HEAD
                        </section> 
                        <footer>
                            <div className="device-list">
                                <div className="devlist-title">
                                    <MdDevicesOther size={25} style={{ position: 'relative' }}/>
                                    <strong style={{ fontSize: '16px', paddingLeft: '6px', marginTop: '3px' }}>
                                        연결 디바이스</strong>
=======
                        </section>

                        <footer>
                            <div className="device-list">
                                <div className="devlist-title">
                                    <MdDevicesOther size={25} style={{ position: 'relative', top: '3px' }} />
                                    <strong style={{ fontSize: '16px', paddingLeft: '6px' }}>
                                        연결 디바이스</strong>
                                

>>>>>>> 2620c0134cfc248d1713dac26ed639340965e601
                                    {/* 디바이스 추가 페이지 블로킹 */}
                                    {
                                        isAdmin ?
                                            (
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
                                                            marginLeft: 'auto',
                                                            color: 'black'
                                                        }
                                                    }
                                                >
<<<<<<< HEAD
=======
                                                    <MdAddCircleOutline
                                                        size={25}
                                                        style={
                                                            {
                                                                position: 'relative',
                                                                bottom: '2px',
                                                                marginLeft: 'auto'
                                                            }
                                                        }
                                                    />
                                                </Link>
                                            )
                                            :
                                            (
>>>>>>> 2620c0134cfc248d1713dac26ed639340965e601
                                                <MdAddCircleOutline
                                                    size={25}
                                                    style={
                                                        {
                                                            position: 'relative',
                                                            bottom: '2px',
                                                            marginLeft: 'auto'
                                                        }
                                                    }
<<<<<<< HEAD
                                                />
                                            </Link>
                                        )
                                        :
                                        (
                                            <MdAddCircleOutline
                                                size={25}
                                                style={
                                                    {
                                                        position: 'relative',
                                                        bottom: '2px',
                                                        marginLeft: 'auto'
                                                    }
                                                }
                                                onClick={HubActions.setIsModalWithTrue}
                                            />
                                        )
                                }
                                </div>
                                
=======
                                                    onClick={HubActions.setIsModalWithTrue}
                                                />
                                            )
                                    }
                                </div>
>>>>>>> 2620c0134cfc248d1713dac26ed639340965e601
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