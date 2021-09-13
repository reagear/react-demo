import React from 'react';
import css from 'styled-jsx/css';

const { className, styles } = css.resolve`
    div :global(.ss) {
        color: red;
    }

    :global(p) {
        color: #eee;
    }
`;

const InnerComp = ({ a, b, cn = '' }) => {
    return (
        <div className={cn}>
            <p>a:{a}</p>
            <p>b:{b}</p>
            <div className="ss">13</div>
            <style jsx>
                {`
                    p {
                        font-size: 30px;
                        color: #a8d52d;
                    }
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
            <InnerComp {...props} a="正常a" b="正常b" cn={className} />
            {styles}
        </div>
    );
};

export default Comp;
