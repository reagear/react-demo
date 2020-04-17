import './index.less';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Timer from './components/timer';
import LoginControl from './components/login';

const Test = React.lazy(() => import('./components/test'));

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    render() {
        return (
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <Test />
                </Suspense>
                <Timer />
                <LoginControl />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
