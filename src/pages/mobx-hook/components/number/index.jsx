import './index.less';
import React from 'react';
import { useObserver } from 'mobx-react';
import { CounterStoreContext } from '../../store/counter';

function Comp() {
    const counterStore = React.useContext(CounterStoreContext);

    return useObserver(() => {
        return <div className="m-number">{counterStore.count}</div>;
    });
}

export default Comp;
