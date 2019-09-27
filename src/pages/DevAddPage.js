import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as userActions from '../store/modules/user';
import * as hubActions from '../store/modules/hub';
import * as devActions from '../store/modules/dev';
import { css } from '@emotion/core';
import { BeatLoader } from 'react-spinners';

import {
    BasicNav,
    BasicFooter,
    DevAddResModal,
    ScanDev
} from '../components';
import ScanDevList from '../components/ScanDevList/ScanDevList';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class DevAddPage extends Component {
    
    componentDidMount() {
        // const { DevActions, location } = this.props;
        // const { hubInfo } = location.state;
        // DevActions.scanDev(hubInfo.externalIp, hubInfo.externalPort);
    }

    _getScanDevs = () => {
        const { DevActions, location } = this.props;
        const { hubInfo } = location.state;
        DevActions.scanDev(hubInfo.externalIp, hubInfo.externalPort);
    }
    
    render() {
        const { isLoading, user, scanDevs, DevActions, isModal, isResult, location } = this.props;
        const { hubInfo } = location.state;

        return (
            <Fragment>
                <BasicNav user={user} />    
                <div className="devAdd-main" style={{padding:'50px 27px', height:'100%'}}>
                    <header>
                        <div className="add-title" style={{  
                                                            display: 'flex',
                                                            flexDirection: 'row',
                                                            borderBottom: '2px solid #666',
                                                            marginBottom : '12px'
                                                        }}
                        >
                            <h3 style={
                                            {
                                                    marginTop:'15px'
                                            }
                                        }> 새로운 디바이스 추가하기</h3>
                                <button
                                    id="scanbtn"
                                    style={{
                                        marginLeft:'auto', width:'45px',height:'30px',
                                        marginTop:'10px',border:'1px dashed #666',
                                        borderRadius:'10px',backgroundColor:'#f7f7f7'
                                    }}
                                    onClick={this._getScanDevs}
                                >
                                    <p style={{fontSize:'15px'}}> scan </p>
                                </button>
                            </div>
                    </header>
                    <section>
                        <article>
                            <div className="devAdd-content" >
                                <div className='sweet-loading' style={{textAlign:'center'}}>
                                    <BeatLoader
                                        css={override}
                                        sizeUnit={"px"}
                                        size={20}
                                        color={'rgba(65, 65, 65, 0.541)'}
                                        loading={isLoading}
                                    />
                                </div>  
                                    <ScanDevList
                                        scanDevs={scanDevs}
                                        DevActions={DevActions}
                                        externalIp={hubInfo.externalIp}
                                        externalPort={hubInfo.externalPort}
                                    /> 
                                {
                                    isModal && (
                                                    <DevAddResModal
                                                        isResult={isResult}
                                                        _handleIsModal={DevActions.setIsModalWithFalse}
                                                    />
                                                )
                                }
                            </div>
                        </article>
                    </section>
                    
                </div>
                <BasicFooter />
            </Fragment>
        )
    }
}

export default withRouter(
    //subscribe redux store
    connect(
        // props 로 넣어줄 스토어 상태값
        state => ({
            isAuthenticated: state.auth.getIn(['userState', 'isAuthenticated']),
            user: {
                name: state.user.getIn(['userInfo', 'user','name']),
                profileImage:state.user.getIn(['userInfo', 'user','profileImage']),
            },
            hubs: state.user.getIn(['userInfo', 'hubs']),
            scanDevs: state.dev.getIn(['dev', 'scanDevs']),
            isModal: state.dev.get('isModal'),
            isResult: state.dev.get('isResult'),
            isLoading: state.dev.get('isLoading'),
        }),
        // props 로 넣어줄 액션 생성함수
        dispatch => ({
            UserActions: bindActionCreators(userActions, dispatch),
            HubActions: bindActionCreators(hubActions, dispatch),
            DevActions: bindActionCreators(devActions, dispatch),
        })
    )(DevAddPage)
);