import {Button} from 'antd';
import React from 'react';

class Comp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            a: 1
        };
    }

    onClick() {
        this.setState({
            a: 1
        });
    }

    render() {
        console.log('common-test render');
        return (
            <>
                <h3>render测试</h3>
                <Button
                    onClick={() => {
                        this.onClick();
                    }}
                >
                    测试
                </Button>
            </>
        );
    }
}

export default Comp;
