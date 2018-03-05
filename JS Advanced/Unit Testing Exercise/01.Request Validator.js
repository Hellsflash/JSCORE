function validateRequest(obj) {

    let methods = ['GET', 'POST', 'DELETE', 'CONNECT'];

    if (!(obj.method && methods.includes(obj.method))) {
        throw new Error('Invalid request header: Invalid Method');
    }

    let uriRegex = /^[\w.]+$/g;
    let uriTest = uriRegex.test(obj.uri);

    if (!((obj.uri || obj.uri.length === 0) && (uriTest || obj.uri === '*'))) {
        throw new Error('Invalid request header: Invalid Uri');
    }

    let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if (!(obj.version && versions.includes(obj.version))) {
        throw new Error('Invalid request header: Invalid Version');
    }

    let msgRegex =/^[^<>\\&'"]*$/g;
    let msgTest =msgRegex.test(obj.message);

    if(!(obj.hasOwnProperty('message')&&(msgTest||obj.message===''))){
        throw new Error('Invalid request header: Invalid Message');
    }

    return obj
}

console.log(validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));
console.log(validateRequest({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}));

