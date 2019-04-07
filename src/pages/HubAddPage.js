import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as userActions from '../store/modules/user';
import * as hubActions from '../store/modules/hub';
import ip from 'ip';
import publicIp from 'public-ip';
import {
    BasicNav,
    BasicBoard,
    InputContainer,
    InputItem,
    BasicFooter,
    LinkBtn,
    SubmitBtn
} from '../components';
import scanBtnImg from '../img/scan-button-img.jpg';

class HubAddPage extends Component {

    _scanHub = () => {
        const { HubActions } = this.props;
        HubActions.scanHub();
    }

    _createHub = () => {
        const { HubActions } = this.props;
        console.log(ip.address())
        publicIp.v4().then(res => {
            console.log(res)
            HubActions.registerHub(res);
        })
    }

    componentDidMount() {
    }

    render() {
        const { user, scanHubInfo } = this.props;
        const {
            status,
            ipv4,
            mac
        } = scanHubInfo;
        console.log(scanHubInfo.ipv4);
        return (
            <Fragment>
                <BasicNav user={user} />
                <BasicBoard title="새로운 허브 추가하기">
                    <InputContainer 
                        title="허브 스캔"
                        descriptions={{
                            title: '스캔 가이드',
                            lists: ['사용자 디바이스를 허브가 연결된 공유기랑 연결하세요.',
                            '연결 후 스캔 버튼을 클릭합니다.']
                            }}>
                        <InputItem 
                            name='연결된 공유기' 
                            label='hubNat' 
                            must={true} 
                            disabled={true}
                            placeholder='스캔후에 자동설정'
                            value={ipv4}
                        />
                        <InputItem 
                            name='허브 mac주소' 
                            label='hubMac' 
                            must={true} 
                            disabled={true}
                            placeholder='스캔후에 자동설정'
                            value={mac}
                        />
                        <SubmitBtn onClick={this._scanHub} context='스캔'/>
                    </InputContainer>
                    <InputContainer title="허브 정보 설정" bold={true}>
                        <InputItem 
                            name='허브 이름' 
                            label='hubName' 
                            must={true} 
                            placeholder='16자 이내'
                        />
                        <InputItem 
                            name='검색용 아이디' 
                            label='hubId' 
                            must={true} 
                            placeholder='20자 이내, 변경불가'
                        />
                        <InputItem 
                            name='허브 설명' 
                            label='hubDesc' 
                            placeholder='60자 이내'
                        />
                        <SubmitBtn onClick={this._createHub} context='확인'/>
                    </InputContainer>
                    <LinkBtn to='/main' context="이전"/>
                </BasicBoard>
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
            scanHubInfo: {
                status: state.hub.getIn(['scanHubInfo','status']),
                ipv4: state.hub.getIn(['scanHubInfo','ipv4']),
                mac: state.hub.getIn(['scanHubInfo','mac'])
            }
        }),
        // props 로 넣어줄 액션 생성함수
        dispatch => ({
            UserActions: bindActionCreators(userActions, dispatch),
            HubActions: bindActionCreators(hubActions, dispatch),
        })
    )(HubAddPage)
);