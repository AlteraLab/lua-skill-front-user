import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as userActions from '../store/modules/user';
import * as hubActions from '../store/modules/hub';
import {
    BasicNav,
    BasicBoard,
    BasicFooter
} from '../components';
import {MdArrowBack} from 'react-icons/md';
import '../components/HubLogList/HubLogList.css';

class HubLogPage extends Component {
    
    _changePage = (event) => {
        const {UserActions} = this.props
        UserActions.changePage(event.target.value)
    }

    render() {
        const { 
            user,
            page
        } = this.props;

        return (
            <Fragment>
                <BasicNav user={user} />
                <BasicBoard
                title="허브 로그" >
                <div className="HubLogPage">
                    <div className="tab">
                        <input id="tab1" type="radio" name="tabs" value='1' 
                        onChange={e=>this._changePage(e)} checked={page==='1'}/> 
                        <label for="tab1">전체</label>

                        <input id="tab2" type="radio" name="tabs" value='2' 
                        onChange={e=>this._changePage(e)} checked={page==='2'}/>
                        <label for="tab2">성공</label>

                        <input id="tab3" type="radio" name="tabs"  value='3' 
                        onChange={e=>this._changePage(e)} checked={page==='3'}/>
                        <label for="tab3">실패</label>
                    </div>

                    <div className="logtable">
                        {page==='1' && 
                            <section id="content1">
                                <div className="log-row">
                                    <div className="log-label" ><h4> 로그 타입</h4> </div>
                                    <div className="log-content" > type </div>
                                </div>
                                <div className="log-row">
                                    <div className="log-label" ><h4> 내용 </h4> </div>
                                    <div className="log-content" > 로그로그로그</div>
                                </div>
                                <div className="log-row">
                                    <div className="log-label" ><h4> 하드웨어 아이디</h4> </div>
                                    <div className="log-content" > air </div>
                                </div>
                                <div className="log-row">
                                    <div className="log-label" ><h4> 하드웨어 이름 </h4> </div>
                                    <div className="log-content" >에어컨</div>
                                </div>
                                <div className="log-row">
                                    <div className="log-label" ><h4> 요청자 이름 </h4></div>
                                    <div className="log-content" >홍길동</div>
                                </div>
                            </section>}

                        {page==='2' && 
                            <section id="content2">
                                <div className="log-row">
                                    <div className="log-label" ><h4> 내용 </h4> </div>
                                    <div className="log-content" >로그로그로그</div>
                                </div>
                                
                                <div className="log-row">
                                    <div className="log-label" ><h4>요청자 이름 </h4></div>
                                    <div className="log-content" >홍길동</div>
                                </div>
                            </section> }

                        {page==='3' && 
                            <section id="content3">
                                <div className="log-row">
                                    <div className="log-label" ><h4> 하드웨어 아이디</h4> </div>
                                    <div className="log-content" > air </div>
                                </div>
                                <div className="log-row">
                                    <div className="log-label" ><h4> 하드웨어 이름 </h4> </div>
                                    <div className="log-content" >에어컨</div>
                                </div>
                            </section> }
                            </div>
                </div>
                </BasicBoard>
                <BasicFooter />
            </Fragment>
        )
    }
}

export default withRouter(
    //subscribe redux store
    connect(
        state => ({
            isAuthenticated: state.auth.getIn(['userState', 'isAuthenticated']),
            user: {
                userId: state.user.getIn(['userInfo', 'user', 'userId']),
                name: state.user.getIn(['userInfo', 'user', 'name']),
            },
            
            hubs: state.user.getIn(['userInfo', 'hubs']),
            page: state.user.get('page'),
        }),
        dispatch => ({
            UserActions: bindActionCreators(userActions, dispatch),
            hubActions : bindActionCreators(hubActions, dispatch)
        })
    )(HubLogPage)
);