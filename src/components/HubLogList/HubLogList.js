import React ,{Component} from 'react';
import './HubLogList.css';
import Moment from 'react-moment';

const HubLog = ( { recordedAt, hrdwrName, requesterName, content, logType } ) => {
	return (
		<div>
            <Moment format="YYYY-MM-DD HH:mm (UTCZ)">
                {/* 
                    실제로 꾸며줄때는 hrdwrName / requesterName / 
                    content / logType 등을 이용해서 꾸며주면됨
                */}
                {recordedAt}
            </Moment>
		</div>
	);
};

class HubLogList extends Component {
/* 
- recordedAt: 1565246191000
- hrdwrId: 1001
- hrdwrName: "testDev2"
- requesterName: "test"
- content: "Test Content"
- logType: false 
*/
    _setPrintLogWithAllLog = () => {
        const { HubActions } = this.props;
        HubActions.setPrintLogWithAllLog();
    }

    _setPrintLogWithTrueLog = () => {
        const { HubActions } = this.props;
        HubActions.setPrintLogWithTrueLog();
    }

    _setPrintLogWithFalseLog = () => {
        const { HubActions } = this.props;
        HubActions.setPrintLogWithFalseLog();
    }

    _renderLog = () => {
        const { printLogs } = this.props;

        return printLogs.map(
            log => {
                return <HubLog
                            key={log.recordedAt}
                            recordedAt={log.recordedAt}
                            hrdwrName={log.hrdwrName}
                            requsterName={log.requsterName}
                            content={log.content}
                            logType={log.logType}
                        />
            }
        )
    }

    render() {

		return (
            <div className="main">
                <div className="tab">
                    <input 
                        id="tab1" 
                        type="radio" 
                        name="tabs" 
                        value='tab1'
                        onClick={this._setPrintLogWithAllLog} 
                    /> 
                    <label for="tab1">전체</label>

                    <input 
                        id="tab2" 
                        type="radio" 
                        name="tabs" 
                        value='tab2' 
                        onClick={this._setPrintLogWithTrueLog}
                    />
                    <label id="true" for="tab2">성공</label>

                    <input 
                        id="tab3" 
                        type="radio" 
                        name="tabs"  
                        value='tab3' 
                        onClick={this._setPrintLogWithFalseLog}
                    />
                    <label id="false"for="tab3">실패</label>
                </div>
                <div>
                    {this._renderLog()}
                </div>                
                <div className="LogList">
                    <div className="logarticle" style={{padding:'0'}}>
                        <div className="logRow">
                                <div className="llabel">하드웨어이름</div>
                                <div className="ccontent">testDev2</div>
                        </div>
                        <div className="logRow">
                                <div className="llabel">요청자</div>
                                <div className="ccontent">test</div>
                        </div>
                        
                        <div className="logContent">
                                <div className="llabel">내용</div>
                                <div className="content-box" >Test Content Test Content Test Content 
                                Test Content Test Content Test Content Test 
                                </div>
                        </div>
                        <div className="logRow-bot">
                        <div className="llabel-time">생성 시간</div>
                            <div className="ccontent-time">1565246191000</div>
                                <div className="ccontent">
                                    <div className="LogType-false">
                                        <span>fail</span>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="logarticle" style={{padding:'0'}}>
                        <div className="logRow">
                                <div className="llabel">하드웨어이름</div>
                                <div className="ccontent">testDev2</div>
                        </div>
                        <div className="logRow">
                                <div className="llabel">요청자</div>
                                <div className="ccontent">test</div>
                        </div>
                        
                        <div className="logContent">
                                <div className="llabel">내용</div>
                                <div className="content-box" >Test Content Test Content Test Content 
                                Test Content Test Content Test Content Test 
                                </div>
                        </div>
                        <div className="logRow-bot">
                        <div className="llabel-time">생성 시간</div>
                            <div className="ccontent-time">1565246191000</div>
                                <div className="ccontent">
                                    <div className="LogType-true">
                                        <span>success</span>
                                    </div>
                                </div>
                        </div>
                    </div>
            </div>
            </div>
		)
	}
}

export default HubLogList;
