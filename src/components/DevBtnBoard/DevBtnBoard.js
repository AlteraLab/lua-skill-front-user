import React from 'react';
import './DevBtnBoard.css';
import { Link, Redirect } from 'react-router-dom';
import { MdDeviceHub, MdPersonAdd, MdSettings, 
        MdDevicesOther, MdAddCircleOutline, MdDescription, MdDevices 
} from 'react-icons/md';
import Moment from 'react-moment';
import { connectDev } from '../../store/modules/dev';
import {NotAdminModal,
    HubDeleteModal,} from '..';
import { css } from '@emotion/core';
import { ClipLoader } from 'react-spinners';

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

        <div className="devlist-content" >
            <div className="dev-box">
                <div className="device-row" >
                    <div className="device-label">
                        이름
                    </div>
                    <div className="device-content">
                        {connectedDev.name}
                    </div>
                </div>
                <div className="device-row" style={{ 
                        fontSize:'11px'
                    }} >
                    <div className="device-label" >
                        MAC주소
                    </div>
                    <div className="device-content">
                        {connectedDev.address}
                    </div>
                </div>
            </div>
            <div className="type-btn">
                <Link to={
                    {
                        pathname: '/devInfo',
                        state: {
                            devType: { devType }
                        }
                    }
                }>
                    <button
                        type="radio"
                        id="whghlBtn"
                    >
                        조회
                    </button>
                </Link>

                <button
                    type="radio"
                    id="wpdjBtn"
                >
                    제거
                </button>
            </div>
        </div>
    )
}


const DevColumnList = ({ connectedDevs }) => {

    let index = 0;
    return (
        <div className="dev-column">
            {
                connectedDevs.map(
                    dev => {
                        return <Dev
                            key={index++}
                            connectedDev={dev}
                        />
                    }
                )
            }
        </div>
    )
}

const DevBtnBoard = ({ children, hubInfo, title, connectedDevs, HubActions, isModalAboutNotAdmin, isModalAboutHubDelete, isLoadAboutHubDelete, _handleMethods, userId, msg }) => {

    const isAdmin = (hubInfo.adminId === userId) ? true : false;
    return (
        <article className="DevBtnBoard">
            <section className="basic-container">
                <header className="basic-header">
                    <h3>
                        <span>
                            {title}
                        </span>
                    </h3>
                </header>
                <div className="basic-field">
                    <div className="HubMInfo">
                        <header>
                            <div className="hub-name">
                                <span className="title">
                                    <MdDeviceHub
                                        size={20}
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
                                    null
                                )
                            }
                            
                        </header>

                        <section>
                            <article>
                                <div className="Infohub" style={{borderBottom:"1px solid #red", height:'auto'}}>
                                <div className="hub-row">
                                    <div className="hub-label">연결된 NAT 라우터</div>
                                    <div className="hub-content">{hubInfo.externalIp}</div>
                                </div>
                                <div className="hub-row">
                                    <div className="hub-label">허브 NAT라우터 포트</div>
                                    <div className="hub-content">{hubInfo.externalPort}</div>
                                </div>
                                <div className="hub-row">
                                    <div className="hub-label">허브 MAC주소</div>
                                    <div className="hub-content">{hubInfo.hubMac.toUpperCase()}</div>
                                </div>
                                <div className="hub-row">
                                    <div className="hub-label">검색용 아이디</div>
                                    <div className="hub-content">{hubInfo.searchId}</div>
                                </div>
                                <div className="hub-row">
                                    <div className="hub-label">허브 설명</div>
                                    <div className="hub-content">{hubInfo.hubDescript}</div>
                                </div>
                                <div className="hub-row">
                                    <div className="hub-label">허브 상태</div>
                                    <div className="hub-content">
                                        <div className="on">
                                            on
                                        </div>
                                    </div>
                                </div>
                                <div className="hub-row division">
                                    <div className="hub-label">허브 생성 시간</div>
                                    <div className="hub-content">
                                        <Moment format="YYYY-MM-DD HH:mm (UTCZ)">
                                            {hubInfo.createdAt}
                                        </Moment>
                                    </div>
                                </div>
                                
                                <div className='sweet-loading'>
                                    <ClipLoader
                                        css={override}
                                        sizeUnit={"px"}
                                        size={150}
                                        color={'#123abc'}
                                        loading={isLoadAboutHubDelete}
                                    />
                                </div> 
                                </div>
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
                                        <MdDescription size={37} style={{ color: '#6D6D74' }} />
                                            <br />
                                            로그 조회 
                                        </div>
                                    </Link>
                                    
                                    {/* 허브 설정 페이지 블로킹 */}
                                    {
                                        isAdmin ? 
                                        (
                                            <Link 
                                                className="set-btn"
                                                to="/set"
                                            >
                                                <div className="box-two">
                                                    <MdSettings size={37} style={{ color: '#6D6D74' }} />
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
                                                    style={{ color: '#6D6D74' }} 
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
                                            style={{ color: '#6D6D74' }} 
                                        />
                                        <br />
                                        친구 관리
                                    </div>
                                </div>
                            </article>
                        </section> 
                        <footer>
                            <div className="device-list">
                                <div className="devlist-title">
                                    <MdDevicesOther size={25} style={{ position: 'relative' }}/>
                                    <strong style={{ fontSize: '16px', paddingLeft: '6px', marginTop: '3px' }}>
                                        연결 디바이스</strong>
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
                                                null
                                            )
                                    }
                                </div>
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