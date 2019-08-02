import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as userActions from '../store/modules/user';
import {MdClear,MdSearch} from 'react-icons/md'
import {
    BasicNav,
    BasicFooter,
    BasicBoard
} from '../components';
import { Link } from 'react-router-dom';
import '../components/FriendAdd/FriendAdd.css';

class FriendAddPage extends Component {

    componentDidMount(){

    }
    state = {
        id: ''
    }
    
    handleChange = (e) => {
        this.setState({
        [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <Fragment>
                <div className="FriendAddPage">
                    {/* <p style={{paddingTop:'400px'}}></p> */}
                    <div className="main">
                        <header>
                            <div className="fri-title">             
                                <h3 style={{padding:'14px',margin:'0'}}>
                                    카카오톡 ID로 친구 추가</h3>
                                <Link to='/main' style={{marginLeft:'auto',color:'black'}}>
                                    <div className="">
                                    <MdClear size={50} 
                                    style={{padding:'14px 10px',marginLeft:'auto',color:'black'}}/> 
                                    </div>
                                </Link>
                            </div>
                        </header>
                        <section>
                            <article>
                                <div className="incontent">
                                    <label>
                                        <h4 style={{fontWeight:'bolder'}}>친구 카카오톡 ID</h4> 
                                    </label>
                                    <form >
                                        <MdSearch size={35} style={{padding:'7px 4px 0', zIndex:'5'}} />
                                        <input type="text" name="id" placeholder="ID" 
                                        value={this.state.id} onChange={this.handleChange} />
                                    </form> 
                                    <div className="incontent2">
                                        <p id="one">
                                            아이디로 친구를 추가하세요</p>    
                                        <p id="two" >
                                            상대가 카카오 아이디를 등록하고, <br/>
                                            검색허용을 한 경우 찾기가 가능합니다.</p>   
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
            isAuthenticated: state.auth.getIn(['userState', 'isAuthenticated']),
            user: {
                userId: state.user.getIn(['userInfo', 'user', 'userId']),
                name: state.user.getIn(['userInfo', 'user', 'name']),
                profileImage: state.user.getIn(['userInfo', 'user', 'profileImage']),
            },
            hubs: state.user.getIn(['userInfo', 'hubs']),
        }),
        dispatch => ({
            UserActions: bindActionCreators(userActions, dispatch)
        })
    )(FriendAddPage)
);