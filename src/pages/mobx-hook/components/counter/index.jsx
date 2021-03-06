import './index.less';
import React from 'react';
import { useLocalStore, useObserver } from 'mobx-react';
import { CounterStoreContext ,counterStore} from '../../store/counter';

function Comp() {
    // const counterStore = React.useContext(CounterStoreContext);

    const state = useLocalStore((target) => ({
        get countClassName() {
            if (counterStore.danger) {
                return 'count danger';
            } else {
                return 'count';
            }
        }
    }));

    return useObserver(() => {
        return (
            <div className="m-counter">
                <div className={state.countClassName}>{counterStore.count}</div>
                <div className="count-right">
                    <div className="increase" onClick={counterStore.increase}>
                        +
                    </div>
                    <div className="decrease" onClick={counterStore.decrease}>
                        -
                    </div>
                </div>
            </div>
        );
    });
}

export default Comp;
