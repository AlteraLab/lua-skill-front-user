import React ,{Component} from 'react';
import './HubLogList.css';

class HubLogList extends Component {

    state ={
        selected:'tab1'
    }
    
	render() {
		return (
        <div className="main">
            <div className="tab">
    <input id="tab1" type="radio" name="tabs" value='tab1'
    checked={this.state.selected === 'tab1'}
    onChange={(e) => this.setState({ selected: e.target.value })} /> 
    <label for="tab1">전체</label>

    <input id="tab2" type="radio" name="tabs" value='tab2' 
    checked={this.state.selected === 'tab2'} 
    onChange={(e) => this.setState({ selected: e.target.value })} />
    <label for="tab2">성공</label>

    <input id="tab3" type="radio" name="tabs"  value='tab3' 
    checked={this.state.selected === 'tab3'} 
    onChange={(e) => this.setState({ selected: e.target.value })} />
    <label for="tab3">실패</label>
    </div>

    <section id="content1">
        <p> <h3 style={{marginRight:'20px'}}> 로그 타입</h3> type </p>
        <p> <h3 style={{marginRight:'20px'}}> 내용 </h3> 로그로그로그 </p>
        <p> <h3 style={{marginRight:'20px'}}> 하드웨어 아이디</h3> air </p>
        <p> <h3 style={{marginRight:'20px'}}> 하드웨어 이름 </h3> 에어컨</p>
        <p> <h3 style={{marginRight:'20px'}}> 요청자 이름 </h3> 홍길동</p>
    </section>

    <section id="content2">
    <p> <h3 style={{marginRight:'20px'}}> 내용 </h3> 로그로그로그 </p>
        <p> <h3 style={{marginRight:'20px'}}> 요청자 이름 </h3> 홍길동</p>
    </section>

    <section id="content3">
        <p> <h3 style={{marginRight:'20px'}}> 하드웨어 아이디</h3> air </p>
        <p> <h3 style={{marginRight:'20px'}}> 하드웨어 이름 </h3> 에어컨</p>
    </section>

</div>
		)
	}
}

export default HubLogList;
