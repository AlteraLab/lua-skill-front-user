import React from 'react'
import './HubBox.css'
import { MdDeviceHub, MdTagFaces, MdGroup } from 'react-icons/md';
import Moment from 'react-moment';
import { LinkBtn } from '../';

const HubBox = ({ hubInfo, userId }) => {
    return (
        <div className="HubBox" >
            <header>
                <div className="hub-name">
                    <span className="title">
                        <MdDeviceHub size={17} style={{
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
                    <div className="hub-info">
                        <div className="hub-info-item">
                            <div className="hub-state on">
                                <span><strong>on</strong></span>
                            </div>
                        </div>
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
                        <div className="hub-content">{hubInfo.mac_address}</div>
                    </div>
                    <div className="hub-row">
                        <div className="hub-label">검색용 아이디</div>
                        <div className="hub-content">{hubInfo.search_id}</div>
                    </div>
                    <div className="hub-row division">
                        <div className="hub-label">허브 생성시간</div>
                            <div className="hub-content">
                                <Moment format="YYYY-MM-DD HH:mm (UTCZ)">
                                    {hubInfo.createdAt}
                                </Moment>
                            </div>
                    </div>
                </article>
            </section>
            <footer>
                <div className="wrap-btn">
                    <div className="short-info">
                        <div className="short-info-item">
                            <MdTagFaces size={14} className="short-info-ico" />
                            <span className="short-info-label">
                                {hubInfo.adminId === userId ? '관리자' : '사용자'}
                            </span>
                        </div>
                        <div className="short-info-item">
                            <MdGroup size={14} className="short-info-ico" />
                            <span className="short-info-label">4</span>
                        </div>
                    </div>
                    
                    <LinkBtn 
                        to={
                            {
                                pathname: `/hub/${hubInfo.hubId}`,
                                state: {
                                    hubInfo: hubInfo,
                                    userId: userId
                                }
                            }
                        } 
                        context='접속' 
                    /> 
                </div>
            </footer>
        </div>)
}

export default HubBox;