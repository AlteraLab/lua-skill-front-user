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
                {/* <header>
                    <div className="number">
                        <strong>#</strong>
                    </div>
                    <div className="logtitle">
                        <strong>logs</strong>
                    </div>
                    <div className="logstitle">
                        <strong>contents</strong>
                    </div>
                </header> */}
                <section>
                    <article>
                        <div className="logRow">
                            <div className="order">1</div>
                            <div className="llabel">recordeAt</div>
                            <div className="ccontent">1565246191000</div>
                        </div>
                        <div className="logRow">
                            <div className="order">2</div>
                                <div className="llabel">hrdwrName</div>
                                <div className="ccontent">testDev2</div>
                        </div>
                        <div className="logRow">
                            <div className="order">3</div>
                                <div className="llabel">requesterName</div>
                                <div className="ccontent">test</div>
                        </div>
                        <div className="logRow">
                            <div className="order">4</div>
                                <div className="llabel">content</div>
                                <div className="ccontent">Test Content</div>
                        </div>
                        <div className="logRow">
                            <div className="order">5</div>
                                <div className="llabel">logType</div>
                                <div className="ccontent">
                                    <div className="LogType">
                                        <div className="false">
                                        <span>false</span>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </article>
                    <article>
                    <div className="logRow">
                            <div className="order">1</div>
                            <div className="llabel">recordeAt</div>
                            <div className="ccontent">1565246191000</div>
                        </div>
                        <div className="logRow">
                            <div className="order">2</div>
                                <div className="llabel">hrdwrName</div>
                                <div className="ccontent">testDev2</div>
                        </div>
                        <div className="logRow">
                            <div className="order">3</div>
                                <div className="llabel">requesterName</div>
                                <div className="ccontent">test</div>
                        </div>
                        <div className="logRow">
                            <div className="order">4</div>
                                <div className="llabel">content</div>
                                <div className="ccontent">Test Content</div>
                        </div>
                        <div className="logRow">
                        <div className="order">5</div>
                            <div className="llabel">logType</div>
                            <div className="ccontent">
                                <div className="LogType">
                                    <div className="true">
                                        <span>true</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article>
                    <div className="logRow">
                            <div className="order">1</div>
                            <div className="llabel">recordeAt</div>
                            <div className="ccontent">1565246191000</div>
                        </div>
                        <div className="logRow">
                            <div className="order">2</div>
                                <div className="llabel">hrdwrName</div>
                                <div className="ccontent">testDev2</div>
                        </div>
                        <div className="logRow">
                            <div className="order">3</div>
                                <div className="llabel">requesterName</div>
                                <div className="ccontent">test</div>
                        </div>
                        <div className="logRow">
                            <div className="order">4</div>
                                <div className="llabel">content</div>
                                <div className="ccontent">Test Content</div>
                        </div>
                        <div className="logRow">
                        <div className="order">5</div>
                            <div className="llabel">logType</div>
                            <div className="ccontent">
                                <div className="LogType">
                                    <div className="true">
                                        <span>true</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article>
                    <div className="logRow">
                            <div className="order">1</div>
                            <div className="llabel">recordeAt</div>
                            <div className="ccontent">1565246191000</div>
                        </div>
                        <div className="logRow">
                            <div className="order">2</div>
                                <div className="llabel">hrdwrName</div>
                                <div className="ccontent">testDev2</div>
                        </div>
                        <div className="logRow">
                            <div className="order">3</div>
                                <div className="llabel">requesterName</div>
                                <div className="ccontent">test</div>
                        </div>
                        <div className="logRow">
                            <div className="order">4</div>
                                <div className="llabel">content</div>
                                <div className="ccontent">Test Content</div>
                        </div>
                        <div className="logRow">
                        <div className="order">5</div>
                            <div className="llabel">logType</div>
                            <div className="ccontent">
                                <div className="LogType">
                                    <div className="true">
                                        <span>true</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
            </div>
            </div>
		)
	}
}

export default HubLogList;
