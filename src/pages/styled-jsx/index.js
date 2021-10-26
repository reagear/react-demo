import ReactDOM from 'react-dom';
import React from 'react';
import Test from './components/index';
import 'antd/dist/antd.css';

const App = () => {
    return <Test />;
};

ReactDOM.render(
    <App />,

    document.getElementById('app')
);
