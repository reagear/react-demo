import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import Counter from './components/counter';
import counterStore from './store/counter';
import Box from './components/box';
import boxStore from './store/box';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Counter />
                <Box>fdsfsdf</Box>
            </div>
        );
    }
}

ReactDOM.render(
    <Provider counterStore={counterStore} boxStore={boxStore}>
        <App />
    </Provider>,
    document.getElementById('app')
);
