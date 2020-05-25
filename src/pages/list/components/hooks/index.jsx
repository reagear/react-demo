// import './index.less';
import React, { useState, useEffect ,useRef} from 'react';

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

function Counter() {
    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count);

    useEffect(() => {
        console.log('useEffect');
        const id = setTimeout(() => {
            let newCount = count + 1;
            if (newCount === 10) {
                newCount = 0;
            }
            setCount(newCount);
        }, 1000 * 10);
        return () => {
            console.log('useEffect off');
            clearTimeout(id);
        };
    }, [count]);

    return (
        <>
            <h1>{count}</h1>
            <h2>
                Now: {count}, before: {prevCount}
            </h2>
        </>
    );
}

class Comp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Counter />
            </div>
        );
    }
}

export default Comp;
