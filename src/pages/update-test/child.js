import React, {useState} from "react";

const Child = ()=>{
    const [count, setCount] = useState(10);

    const onClick = () => {
        setCount((count) => count + 1);
    };

    console.log('子组件render方法执行')

    return (
        <div className="parent">
            <p>子组件</p>
            <p className="value">{count}</p>
            <div className="button" onClick={onClick}>
                ++
            </div>
        </div>
    );
}

export default Child
