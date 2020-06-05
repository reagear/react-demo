// import './index.less';
import React from 'react';
import * as Rx from 'rxjs/Rx';

class Comp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        this.initEvents();
    }

    initEvents() {
        let inputDom = this.inputRef.current;
        let input = Rx.Observable.fromEvent(inputDom, 'input');
        input
            .pluck('target','nodeName')
            .distinct()
            .subscribe((value) => console.log(value)); // "helo wrd"
    }

    render() {
        return (
            <div>
                <p>测试Rx</p>
                <input ref={this.inputRef} type="text" />
            </div>
        );
    }
}

export default Comp;
