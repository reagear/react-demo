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
                <h3>mobx</h3>
                <Provider counterStore={counterStore}>
                    <Counter />
                </Provider>
                <Provider boxStore={boxStore}>
                    {' '}
                    <Box>fdsfsdf</Box>
                </Provider>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
