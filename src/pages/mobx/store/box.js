import { observable} from 'mobx';

class BoxStore {
    @observable
    text = '按钮文案';
}

export default new BoxStore();
