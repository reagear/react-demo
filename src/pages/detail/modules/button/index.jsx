import React from 'react';
import './index.less';
import add from '../../../common/util';

console.log(add(1, 2));

function Button() {
    return <div className="m-button">动态加载的按钮</div>;
}

export default Button;
