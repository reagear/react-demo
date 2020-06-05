import { observable, computed, action } from 'mobx';

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

export default new CounterStore();
