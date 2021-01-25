import './index.less';
import React, {useEffect, useState} from 'react';
import { useLocalStore, useObserver } from 'mobx-react';

function Comp() {
    console.log('组件初始化');

    const [value,setValue] = useState(0);
    useEffect(()=>{
        console.log('组件渲染')
    },[value])

    const state = useLocalStore((target) => ({
        get countClassName() {
            if (state.count > 10) {
                return 'count danger';
            } else {
                return 'count';
            }
        },

        count: 1,

        increase() {
            state.count++;
            console.log(state.count)
        },

        decrease() {
            state.count--;
        }
    }));

    return useObserver(() => {
        return (
            <div className="m-counter">
                <div className={state.countClassName}>{state.count}</div>
                <div className="count-right">
                    <div className="increase" onClick={state.increase}>
                        +
                    </div>
                    <div className="decrease" onClick={state.decrease}>
                        -
                    </div>
                </div>
            </div>
        );
    });
}

export default Comp;
