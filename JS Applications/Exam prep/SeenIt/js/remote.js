let remote = (() => {
    const BASE_URL = 'https://baas.kinvey.com/';
    const APP_KEY = 'kid_rkgeqZ0jM';
    const APP_SECRET = '1a0e1e5399c24a40903abedccc2d72b0';

    function makeAuth(auth) {
        if (auth === 'basic') {
            return `Basic ${btoa(APP_KEY + ':' + APP_SECRET)}`;
        } else {
            return `Kinvey ${sessionStorage.getItem('authtoken')}`;
        }
    }

    function makeRequest(method, module, endpoint, auth) {
        return {
            url: BASE_URL + module + '/' + APP_KEY + '/' + endpoint,
            method: method,
            headers: {
                'Authorization': makeAuth(auth)
            }
        }
    }

    function get(module, endPoint, auth) {
        return $.ajax(makeRequest('GET', module, endPoint, auth));
    }

    function post(module, endPoint, auth, data) {
        let obj = makeRequest('POST', module, endPoint, auth);

        if (data) {
            obj.data = data;
        }
        return $.ajax(obj);
    }

    function update(module, endPoint, auth, data) {
        let obj = makeRequest('PUT', module, endPoint, auth);
        obj.data = data;
        return $.ajax(obj);
    }

    function remove(module, endPoint, auth) {
        return $.ajax(makeRequest('DELETE', module, endPoint, auth));
    }

    return {
        get,
        post,
        update,
        remove
    }
})();