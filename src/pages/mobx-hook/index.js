import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './components/counter/index';
import NumberCom from './components/number/index'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h3>mobx</h3>
                <Counter />
                <NumberCom/>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,

    document.getElementById('app')
);
