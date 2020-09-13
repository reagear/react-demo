import axios from 'axios';

const instance = axios.create({
    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
    withCredentials: true
});

function serialize(data) {
    let value = '';
    let keyValueList = [];
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            keyValueList.push(`${key}=${encodeURIComponent(data[key])}`);
        }
    }
    value = keyValueList.join('&');
    return value;
}

export function get({ url, data, success, error }) {
    let params = null;
    if (data) {
        params = data;
    }
    instance
        .get(url, { params })
        .then(function(response) {
            if (success) {
                success(response);
            }
        })
        .catch(function(err) {
            if (error) {
                error(err);
            }
        });
}

export function post({ url, data, success, error }) {
    let postData = null;
    if (data) {
        postData = serialize(data);
    }
    instance
        .post(url, postData)
        .then(function(response) {
            if (success) {
                success(response);
            }
        })
        .catch(function(err) {
            if (error) {
                error(err);
            }
        });
}
