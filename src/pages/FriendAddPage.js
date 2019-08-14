import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as userActions from '../store/modules/user';
import {MdClear,MdSearch} from 'react-icons/md'
import {
    BasicFooter,
} from '../components';
import '../components/FriendAdd/FriendAdd.css';

class FriendAddPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isOpen: false
        }
        this._menuToggle = this._menuToggle.bind(this);
        this._handleDocumentClick = this._handleDocumentClick.bind(this);
      }
      componentDidMount() {
        document.addEventListener('click', this._handleDocumentClick, false);
      }
      componentWillUnmount() {
        document.removeEventListener('click', this._handleDocumentClick, false);
      }
      _handleDocumentClick(e) {
        if (!this.refs.root.contains(e.target) && this.state.isOpen === true) {
          this.setState({
          isOpen: false
        });
        };
      }
      _menuToggle(e) {
        e.stopPropagation();
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render() {
        
    let menuStatus = this.state.isOpen ? 'isopen' : '';
        return (
            <Fragment>
                <div className="main">
        
        <div className={menuStatus} id='menu'>
                        <header>
                            <div className="fri-title">             
                                <h3 style={{color:"black",padding:'14px'}}>
                                    카카오톡 ID로 친구 추가</h3>
                                    <MdClear size={40} 
                                    style={{marginTop:'15px',marginRight:'5px',marginLeft:'auto',color:'black'}}/> 
                            </div>
                        </header>
                        <section>
                            <article>
                                <div className="incontent">
                                    <label>
                                        <h4 >친구 카카오톡 ID</h4> 
                                    </label>
                                    <form >
                                        <MdSearch size={35} 
                                        style={{color:'black',padding:'7px 4px 0',position:'relative'}} />
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