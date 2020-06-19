import { get, post } from '../../common/request';

function run() {
    let data = {
        param: JSON.stringify({ id: '4965' }),
        // wdtoken: 'f98fa2c3'
    };

    let url = 'http://thor.weidian.com/citybusiness/activity.mDetail/1.0';

    get({
        url:url,
        data,
        success(res){
            console.log(res)
        }
    });
}

run();
