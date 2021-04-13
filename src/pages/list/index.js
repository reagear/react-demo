import 'antd/dist/antd.css';
import './index.less';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Timer from './components/timer';
import LoginControl from './components/login';
import ThemedButton from './components/context';
import Form from './components/form';
import Hooks from './components/hooks';
import Rx from './components/rx-js';
import AntForm from './components/ant-form';
import CommonTest from './components/common-test'

const Test = React.lazy(() => import('./components/test'));

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    render() {
        return (
            <>
                <CommonTest/>
                <AntForm/>
                <Rx />
                {/* <Hooks /> */}
                <hr />
                <div className="background" />
                <p>
                    <span className="relative">
                        <span>内联元素</span>
                        <span className="absolute">绝对定位</span>
                    </span>
                </p>
                <Form />
                <ThemedButton />
                <Suspense fallback={<div>Loading...</div>}>
                    <Test />
                </Suspense>
                <Timer />
                <LoginControl />
            </>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
