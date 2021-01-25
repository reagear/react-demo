import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';

import Test from './components/local-store'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Test/>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,

    document.getElementById('app')
);
