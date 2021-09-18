import React from 'react';
import css from 'styled-jsx/css';

const { className, styles } = css.resolve`
    :global(p) {
        color: #eee;
    }

    div :global(.ss) {
        color: red;
    }
`;

const InnerComp = ({ a, b, cn = '' }) => {
    // 1. value 中间含js ok
    // 2. key 含js ok
    // 3. key 是js ok
    // 4. rule是 js ok
    // 5. block 是js error

    const css1 = '#000';
    const css2 = 'font';
    const css3 = 'color';
    const css4 = `cursor:auto`;
    const css5 = `p {
                        font-size: 30px;
                        color: #a8d52d;
                    }`// 语法错误

    return (
        <div className={cn}>
            <p>a:{a}</p>
            <p>b:{b}</p>
            <div className='ss'>13</div>
            <style jsx>
                {`


                    p {
                        border: 1px solid ${css1};
                        ${css2}-size: 12px;
                        ${css3}: red;
                        ${css4}
                    }

                    ${css5}
                `}
            </style>
        </div>
    );
};

const Comp = () => {
    const props = {
        a: '...a',
        b: '...b'
    };

    return (
        <div>
            <p>外层组件</p>
            <InnerComp {...props} a='正常a' b='正常b' cn={className} />
            {styles}
        </div>
    );
};

export default Comp;
