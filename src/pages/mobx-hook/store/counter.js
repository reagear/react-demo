import { observable, computed, action } from 'mobx';
import React from 'react';

class CounterStore {
    @observable
    count = 0;

    @computed
    get danger() {
        return this.count > 10;
    }

    @action.bound
    increase() {
        this.count++;
    }

    @action.bound
    decrease() {
        this.count--;
    }

    @action.bound
    reset() {
        this.count = 0;
    }
}

export const CounterStoreContext = React.createContext(new CounterStore());
