import './index.less';
import React from 'react';
import { connect } from 'dva';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }

    increase() {
        this.props.dispatch({ type: 'count/add' });
    }

    decrease() {
        this.props.dispatch({ type: 'count/minus' });
    }

    getCountClassName() {
        let { count } = this.props.count;
        if (count > 10) {
            return 'count danger';
        } else {
            return 'count';
        }
    }

    render() {
        // 对应model中的state
        let { count } = this.props;
        let countClassName = this.getCountClassName();

        return (
            <div className="m-counter">
                <div className={countClassName}>{count.count}</div>
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
