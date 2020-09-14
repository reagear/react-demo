import './index.less';
import React from 'react';
import { useObserver, MobXProviderContext } from 'mobx-react';
import { CounterStoreContext, counterStore } from '../../store/counter';

function useStores() {
    return React.useContext(MobXProviderContext);
}

// 1. createContext 2. useContext
function Comp() {
    const counterStore = React.useContext(CounterStoreContext);

    return useObserver(() => {
        return (
            <>
                <div className="m-number">{counterStore.count}</div>
                <div className="m-number" onClick={counterStore.reset}>
                    置零
                </div>
            </>
        );
    });
}

/*// 2. 传值 Provider组件，取值
function Comp() {
    const counterStore = useStores().count;

    return useObserver(() => {
        return (
            <>
                <div className="m-number">{counterStore.count}</div>
                <div className="m-number" onClick={counterStore.reset}>
                    置零
                </div>
            </>
        );
    });
}*/

/*// 3. 直接使用store实例
function Comp() {
    return useObserver(() => {
        return (
            <>
                <div className="m-number">{counterStore.count}</div>
                <div className="m-number" onClick={counterStore.reset}>
                    置零
                </div>
            </>
        );
    });
}*/

export default Comp;
