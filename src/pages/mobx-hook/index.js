import './index.less';
import { hot } from 'react-hot-loader/root';
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

const AppWrap = hot(App)

ReactDOM.render(
    <AppWrap />,

    document.getElementById('app')
);
