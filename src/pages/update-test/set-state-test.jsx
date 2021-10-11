// import './index.less';
import React, { useState } from 'react';
import { Button } from 'antd';

// const delay = ()=>{
//     return new Promise((resolve) => {
//         setTimeout(resolve,1000);
//     });
// }

const heavyWork = () => {
    console.log('开始重活');
    let i = 3000000000;

    while (i--);
    console.log('结束重活');
};

const Comp = () => {
    const [a, sa] = useState(0);
    const [b, sb] = useState(0);

    console.log('%c 组件render', 'color:green');

    const onClick1 = () => {
        // 组件只会render1次 如果2次setState间有异步操作，则会render2次
        // 如果2次setState间是耗时的同步操作，也只是render1次（非concurrent模式）
        sa(1);
        heavyWork();
        sa(1);
    };
    const onClick2 = () => {
        // 组件只会render1次 如果2次setState间有异步操作，则会render2次
        // 如果2次setState间是耗时的同步操作，也只是render1次（非concurrent模式）
        sa((n) => n + 1);
        heavyWork();
        sa((n) => n + 1);
    };
    const onClick3 = () => {
        // 组件只会render1次 如果2次setState间有异步操作，则会render2次
        // 如果2次setState间是耗时的同步操作，也只是render1次（非concurrent模式）
        sa(1);
        heavyWork();
        sa(2);
    };
    const onClick4 = () => {
        // 组件只会render1次 如果2次setState间有异步操作，则会render2次
        // 如果2次setState间是耗时的同步操作，也只是render1次（非concurrent模式）
        sa(1);
        heavyWork();
        sb(1);
    };

    return (
        <div>
            <hr />
            <p>a:{a}</p>
            <p>b:{b}</p>
            <Button onClick={onClick1}>连续setStateA(1) x 2</Button>
            <Button onClick={onClick2}>连续setStateA(n=&gt;n+1) x 2</Button>
            <Button onClick={onClick3}>连续setStateA(1) 再 setStateA(2)</Button>
            <Button onClick={onClick4}>连续setStateA(1) 再 setStateB(1)</Button>
        </div>
    );
};
export default Comp;
