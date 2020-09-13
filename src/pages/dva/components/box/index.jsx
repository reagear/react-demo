import './index.less';
import React from 'react';
import { connect } from 'dva';

class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.buttonClick = this.buttonClick.bind(this);
    }

    buttonClick() {
        this.props.dispatch({ type: 'count/reset' });
    }

    render() {
        let text = this.props.box.text;
        return (
            <div className="m-button" onClick={this.buttonClick}>
                {text}
            </div>
        );
    }
}

// state 表示所有model box表示namespace
export default connect((state) => ({ box: state.box }))(Box);
