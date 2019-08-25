import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as hubActions from '../store/modules/hub';
import {MdClear,MdSearch, MdSubdirectoryArrowLeft} from 'react-icons/md';
import  { Redirect } from 'react-router-dom';
import {
    BasicFooter,
    GroupAddResModal
} from '../components';
import '../components/FriendAdd/FriendAdd.css';

class FriendAddPage extends Component {
    componentDidMount() {
    }

    //type이 text인 input의 값을 갱신하기 위함
    _changeInputText = (e) => {
        const { HubActions } = this.props;
        const { value } = e.target;
        HubActions.changeInputWhenFriendAdd(value);
    }

    _handleOnClick = () => {
        const { editUserEmail, HubActions, externalIp } = this.props;
        console.log('editUserName');
        console.log(editUserEmail);
        HubActions.searchUser(externalIp, editUserEmail);
    }

    render() {
        const { isGroupPage, HubActions, editUserEmail, isModal, modalMsg } = this.props;
        let menuStatus = isGroupPage ? 'isopen' : '';

        return (
            <Fragment>
                <div className="main">
                    <div className={menuStatus} id='menu'>
                        <header>
                            <div className="fri-title">
                                <h3 style={
                                    {
                                            color:"black",
                                            padding:'14px',
                                            margin:'0'
                                    }
                                }> 카카오톡 E-mail로 친구 추가</h3>
                                <MdClear
                                    size={40} 
                                    style={
                                        {
                                            marginTop:'7px',
                                            marginRight:'5px',
                                            marginLeft:'auto',
                                            color:'black'
                                        }
                                    }
                                    onClick={HubActions.setIsGroupPageWithFalse}
                                /> 
                            </div>
                        </header>
                        <section>
                            <article>
                                <div className="incontent">
                                    <label>
                                        <h4> 친구 카카오톡 E-mail </h4> 
                                    </label>
                                    <form>
                                        <MdSearch 
                                            size={35} 
                                            style={
                                                {
                                                    color:'black',
                                                    padding:'7px 4px 0',
                                                    position:'relative'
                                                }
                                            }
                                        />
                                        <input 
                                            type="text" 
                                            name="e-mail" 
                                            placeholder="E-mail" 
                                            value={editUserEmail}
                                            onChange={this._changeInputText}
                                        />
                                        <MdSubdirectoryArrowLeft
                                            size={35}
                                            style={
                                                {
                                                    color: '#666',
                                                    padding: '7px 4px 0',
                                                    position: 'relative',
                                                    marginLeft: 'auto'
                                                }
                                            }
                                            onClick={this._handleOnClick}
                                        />
                                    </form> 
                                    {
                                        isModal && (
                                                        <GroupAddResModal
                                                            _handleIsModal={HubActions.setIsModalWithFalse}
                                                            msg={modalMsg}
                                                        />
                                                    )
                                    }
                                    <div className="incontent2">
                                        <div id="one">
                                            이메일로 친구를 추가하세요</div>    
                                        <div id="two" >
                                            상대가 이메일을 등록하고, <br/>
                                            검색허용을 한 경우 찾기가 가능합니다.</div>   
                                    </div>
                                </div>
                            </article>
                        </section>
                    </div>
                </div>
                <BasicFooter />
            </Fragment>
        )
    }
}

export default withRouter(
    //subscribe redux store
    connect(
        state => ({
            isGroupPage: state.hub.getIn(['isGroupPage']),
            editUserEmail: state.hub.getIn(['editUserEmail']),
            isModal: state.hub.getIn(['isModal']),
            modalMsg: state.hub.getIn(['modalMsg']),
        }),
        dispatch => ({
            HubActions: bindActionCreators(hubActions, dispatch)
        })
    )(FriendAddPage)
);