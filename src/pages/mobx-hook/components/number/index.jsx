import './index.less';
import React from 'react';
import { useObserver} from 'mobx-react';
import { CounterStoreContext,counterStore} from '../../store/counter';

function Comp() {
    // const counterStore = React.useContext(CounterStoreContext);

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

export default Comp;
