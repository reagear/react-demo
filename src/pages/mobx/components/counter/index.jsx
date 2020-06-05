import './index.less';
import React from 'react';

import { observer, inject } from 'mobx-react';
import { computed } from 'mobx';

@inject((stores) => ({
    count: stores.counterStore.count,
    danger: stores.counterStore.danger,
    increase: stores.counterStore.increase,
    decrease: stores.counterStore.decrease
}))
@observer
class Counter extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    @computed
    get countClassName() {
        if (this.props.danger) {
            return 'count danger';
        } else {
            return 'count';
        }
    }

    render() {
        let { count, increase, decrease } = this.props;

        return (
            <div className="m-counter">
                <div className={this.countClassName}>{count}</div>
                <div className="count-right">
                    <div className="increase" onClick={increase}>
                        +
                    </div>
                    <div className="decrease" onClick={decrease}>
                        -
                    </div>
                </div>
            </div>
        );
    }
}

export default Counter;
