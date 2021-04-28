import { Button } from 'antd';
import React from 'react';

class Comp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            a: 1
        };
        this.bc = new BroadcastChannel('AlienZHOU');
    }

    // eslint-disable-next-line react/sort-comp
    onClick() {
        this.setState({
            a: 1
        });
        setTimeout(() => {
            console.log('设置localStorage');
            window.sessionStorage.a = +new Date();
        });
    }

    registerStorageEvent() {
        console.log('监听 localStorage');
        window.addEventListener('storage', (e) => {
            console.log(e);
        });
    }

    sendBcMessage = () => {
        // eslint-disable-next-line no-invalid-this
        this.bc.postMessage('gdfgdfgdfgdfg');
    };

    componentDidMount() {
        this.registerStorageEvent();
    }

    render() {
        console.log('common-test render');
        return (
            <>
                <Button type="primary" onClick={this.sendBcMessage}>
                    发送广播消息
                </Button>
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
