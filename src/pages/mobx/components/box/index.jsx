import './index.less';
import React from 'react';
import { observer, inject } from 'mobx-react';
import counterStore from '../../store/counter';

@inject('boxStore')
@observer
class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    buttonClick = () => {
        counterStore.reset();
    };

    render() {
        let text = this.props.boxStore.text;
        return (
            <div className="m-button" onClick={this.buttonClick}>
                {text}
            </div>
        );
    }
}

export default Box;
