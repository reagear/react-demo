import React, { useEffect, useRef, useState } from 'react';
import style from './index.less';
import { Button } from 'antd';

const RefTest = () => {
    const [state, setState] = useState(0);

    const ref = useRef(0);

    const changeState = () => {
        setState((i) => i + 1);
        ref.current++;
    };

    useEffect(() => {
        console.log(`%c ref改变了：${ref.current}`, 'color:red;font-size:20px');
        // eslint-disable-next-line
    }, [ref.current]);

    return (
        <div className={style.outer}>
            <p className={style.state}>
                <span>state:</span>
                {state}
            </p>
            <p className={style.ref}>
                <span>ref:</span>
                {ref.current}
            </p>
            <Button onClick={changeState}>修改状态</Button>
        </div>
    );
};

const Comp = () => {
    const [show, setShow] = useState(true);

    return (
        <>
            {show ? <RefTest /> : null}
            <Button
                type="primary"
                onClick={() => {
                    setShow((i) => !i);
                }}
            >
                开关组件
            </Button>
        </>
    );
};

export default Comp;
