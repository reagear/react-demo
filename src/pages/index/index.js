import { get, } from '../../common/request';
import './index.less';
import { baz } from './tree-shaking';

baz();

function run() {
    let data = {
        param: JSON.stringify({ id: '4965' })
        // wdtoken: 'f98fa2c3'
    };

    let url = 'http://123.com';

    get({
        url: url,
        data,
        success(res) {
            console.log(res);
        }
    });
}

// run();

function getRect() {
    const dom = document.querySelector('#a');
    const rect = dom.getBoundingClientRect();
    console.log(rect);
}

function registerBroadcast() {
    const bc = new BroadcastChannel('AlienZHOU');

    bc.onmessage = function(e) {
        const data = e.data;
        console.log('[BroadcastChannel] receive message:', data);
    };
}

function registerStorageEvent() {
    console.log('监听 localStorage');
    window.addEventListener('storage', (e) => {
        console.log(e);
    });
}

function registerHashChange() {
    window.addEventListener('hashchange', function(e) {
        //监听hash变化，点击浏览器的前进后退会触发
        console.log(e);
        console.log('hash change');
    });
}

function registerKeyboardEvent() {
    document.addEventListener('keydown', (e) => {
        console.log('keydown');
    });
    document.addEventListener('keypress', (e) => {
        console.log('keypress');
    });
    document.addEventListener('keyup', (e) => {
        console.log('keyup', e);
    });
}

registerKeyboardEvent();
