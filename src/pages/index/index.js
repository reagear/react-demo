import { get, post } from '../../common/request';

function run() {
    let data = {
        param: JSON.stringify({ id: '4965' }),
        // wdtoken: 'f98fa2c3'
    };

    let url = 'http://123.com';

    get({
        url:url,
        data,
        success(res){
            console.log(res)
        }
    });
}

//run();
