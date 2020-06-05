import React from 'react';
import dva from 'dva';
import './index.less';
import Counter from './components/counter';
import counterStore from './store/counter';
import Box from './components/box';
import boxStore from './store/box';

const app = dva();

app.model(counterStore);
app.model(boxStore);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h3>dva</h3>
                <Counter />
                <Box />
            </div>
        );
    }
}

// 不用路由
app.router(() => <App />);

app.start('#app');
