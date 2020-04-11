import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../../assets/images/head-img.jpeg';
import './index.less';
import add from '../common/util';

import m from './modules/a';

const ccccccccccc = 1234 * 456 * 71;
console.log('dddddddd', ccccccccccc);

console.log(m.a());
console.log(add(1, 2));

class Search extends React.Component {
    constructor() {
        super(...arguments);

        this.state = {
            Button: null
        };
    }

    loadButton() {
        import('./modules/button').then((button) => {
            this.setState({
                Button: button.default
            });
        });
    }

    render() {
        const { Button } = this.state;

        return (
            <div className="search-text">
                搜索文的内容
                <img src={logo} />
                <div className="div1">0</div>
                {Button ? (
                    <Button />
                ) : (
                    <button type="button" onClick={this.loadButton.bind(this)}>
                        加载组件
                    </button>
                )}
            </div>
        );
    }
}

ReactDOM.render(<Search />, document.getElementById('app'));
