import React, { useMemo, useState } from 'react';
import { Button } from 'antd';

const colorList = ['blue', 'green'];

const Test = () => {
    const [index, setIndex] = useState(0);

    const onClick = () => {
        setIndex((i) => i + 1);
    };

    const color = useMemo(() => {
        const shortIndex = index % colorList.length;
        return colorList[shortIndex];
    }, [index]);

    const boxShadow = useMemo(() => {
        return `1px 1px 5px ${color}`;
    }, [color]);

    return (
        <div className="comp-box">
            <div className="tag">颜色---</div>
            <br />
            <Button onClick={onClick}>换颜色</Button>

            <style jsx>
                {`
                    .comp-box {
                        padding: 20px;
                    }

                    .tag {
                        padding-bottom: 10px;
                        color: ${color};
                        box-shadow: ${boxShadow};
                    }
                `}
            </style>
        </div>
    );
};

export default Test;
