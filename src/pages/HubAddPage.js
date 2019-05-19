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

    //동일 네트워크에 허브가 존재하는지를 식별하고, 존재한다면 값을 받아옴
    _scanHub = () => {
        const { HubActions } = this.props;
        HubActions.scanHub();
    }

    //스킬서버로 요청하여 허브 생성을 하기 위한 함수
    _registerHub = () => {
        const { 
            HubActions, 
            editHubInfo,
            scanHubInfo 
        } = this.props;
        
        //form validation 우선적으로 수행해야


        HubActions.registerHub({
            external_ip: scanHubInfo.external_ip,
            external_port: scanHubInfo.external_port,
            before_ip: scanHubInfo.before_ip,
            mac_addr: scanHubInfo.mac_addr,
            hub_name: editHubInfo.hub_name,
            search_id: editHubInfo.search_id,
            hub_descript: editHubInfo.hub_descript
        })
    }

    //type이 text인 input의 값을 갱신하기 위함
    _changeInputText = (e) => {
        const { HubActions } = this.props;
        const { name, value } = e.target;

        HubActions.changeInput({
            name, //input tag의 name, redux store의 상태값과 일치해야
            value
        })
    }

    componentDidMount() {
        const { HubActions } = this.props;
        HubActions.clearScanHub(); // 페이지 진입 시 scanHubInfo의 값을 초기 값으로 설정
    }

    render() {
        const { user, scanHubInfo } = this.props;

        const {
            status,
            external_ip,
            mac_addr
        } = scanHubInfo;

        return (
            <Fragment>
                <BasicNav user={user} />
                <BasicBoard title="새로운 허브 추가하기">
                    <InputContainer 
                        title="허브 스캔"
                        descriptions={{
                            title: '스캔 가이드',
                            lists: [
                                '허브에 파란색 LED가 점등되어 있는지 확인하세요.',
                                '사용자 디바이스를 허브가 연결된 공유기랑 연결하세요.',
                                '연결 후 스캔 버튼을 클릭합니다.']
                            }}>
                        <InputItem 
                            name='연결된 공유기' 
                            label='external_ip' 
                            must={true} 
                            disabled={true}
                            placeholder='스캔후에 자동설정'
                            value={external_ip}
                        />
                        <InputItem 
                            name='허브 mac주소' 
                            label='mac_addr' 
                            must={true} 
                            disabled={true}
                            placeholder='스캔후에 자동설정'
                            value={mac_addr}
                        />
                        <SubmitBtn onClick={this._scanHub} context='스캔'/>
                    </InputContainer>
                    <InputContainer title="허브 정보 설정" bold={true}>
                        <InputItem 
                            name='허브 이름' 
                            label='hub_name' 
                            must={true} 
                            placeholder='16자 이내'
                            onChange={(this._changeInputText)}
                        />
                        <InputItem 
                            name='검색용 아이디' 
                            label='hub_id' 
                            must={true} 
                            placeholder='20자 이내, 변경불가'
                            onChange={this._changeInputText}
                        />
                        <InputItem 
                            name='허브 설명' 
                            label='hub_descript' 
                            placeholder='20자 이내'
                            onChange={this._changeInputText}
                        />
                        <SubmitBtn onClick={this._registerHub} context='확인'/>
                    </InputContainer>
                    <LinkBtn to='./main' context="이전"/>
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
                external_ip: state.hub.getIn(['scanHubInfo','external_ip']),
                external_port: state.hub.getIn(['scanHubInfo','external_port']),
                mac_addr: state.hub.getIn(['scanHubInfo','mac_addr']),
                before_ip: state.hub.getIn(['scanHubInfo','before_ip']),
            },
            editHubInfo: {
                hub_name: state.hub.getIn(['editHubInfo','hub_name']),
                search_id: state.hub.getIn(['editHubInfo','search_id']),
                hub_descript: state.hub.getIn(['editHubInfo','hub_descript'])
            }
        }),
        // props 로 넣어줄 액션 생성함수
        dispatch => ({
            UserActions: bindActionCreators(userActions, dispatch),
            HubActions: bindActionCreators(hubActions, dispatch),
        })
    )(HubAddPage)
);