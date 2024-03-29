import style from './index.less';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Child from './child';
import SetStateTest from './set-state-test';

function App() {
    const [count, setCount] = useState(0);

    const onClick = () => {
        setCount((count) => count + 1);
    };

    console.log('父组件render方法执行');

    return (
        <>
            <SetStateTest />
            <div className={style.parent}>
                <p>父组件</p>
                <p className={style.value}>{count}</p>
                <div className={style.button} onClick={onClick}>
                    ++
                </div>
                <hr />
                <Child />
            </div>
        </>
    );
}

ReactDOM.render(
    <App />,

    document.getElementById('app')
);
