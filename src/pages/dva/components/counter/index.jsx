import './index.less';
import React from 'react';
import { connect } from 'dva';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    increase = () => {
        this.props.dispatch({ type: 'count/add' });
    };

    decrease = () => {
        this.props.dispatch({ type: 'count/minus' });
    };

    render() {
        // 对应model中的state
        let { count } = this.props;

        return (
            <div className="m-counter">
                <div className="count">{count.count}</div>
                <div className="count-right">
                    <div className="increase" onClick={this.increase}>
                        +
                    </div>
                    <div className="decrease" onClick={this.decrease}>
                        -
                    </div>
                </div>
            </div>
        );
    }
}

export default connect((state) => ({ count: state.count }))(Counter);
