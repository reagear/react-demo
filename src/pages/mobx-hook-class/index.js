import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import Counter from './components/counter/index';
import NumberCom from './components/number/index';
import { counterStore } from './store/counter';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h3>mobx</h3>
                <Provider count={counterStore}>
                    <Counter />
                    <NumberCom />
                </Provider>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,

    document.getElementById('app')
);
