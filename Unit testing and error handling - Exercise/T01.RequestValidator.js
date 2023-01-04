function requestvalidator(request){
    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if (request.method === undefined || !validMethods.includes(request.method)){
        throw new Error("Invalid request header: Invalid Method");
    }

    if (request.uri === undefined || request.uri === '' || request.uri.match('\w+[^\_\n]+')){
        throw new Error("Invalid request header: Invalid URI");
    }

    if (request.version === undefined || !validVersions.includes(request.version)){
        throw new Error("Invalid request header: Invalid Version");
    }

    if (request.message === undefined || request.message.includes('<') || request.message.includes('>') || 
    request.message.includes('\\') || request.message.includes('&') || 
    request.message.includes('\'') || request.message.includes('"')){
        throw new Error("Invalid request header: Invalid Message"); 
    }

    return request;
}

console.log(requestvalidator({
    method: 'POST',
    uri: 'home.bash',
    version: 'HTTP/2.0'
}));