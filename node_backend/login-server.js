const http = require('http');
const fs = require('fs');
const qs = require('querystring');

const server = http.createServer((req, res) => {
    console.log("Request received..");
    // set CORS Headers
    res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST');
	res.setHeader('Access-Control-Allow-Headers', '*');
    
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
    } else if (req.method === 'POST' && req.url === '/login') {
        let body = '';
        req.on("data", chunk => {
            body += chunk.toString();
        });
        req.on("end", () => {
            body = qs.parse(body);
            if (body.username === 'admin' && body.password === 'admin123') {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end("admin-authorized");
            }else if (body.username !== 'admin'){
                result = checkUser(body.username, body.password);
                if(result === true){
                    res.writeHead(200, {'Content-Type': 'text/plain'});
                    res.end("authorized");
                } else {
                    res.writeHead(401, {'Content-Type': 'text/plain'});
                    res.end("unauthorized");
                }
            }else {
                res.writeHead(401, {'Content-Type': 'text/plain'});
                res.end("unauthorized");
            }
        });
    } else if(req.method === 'POST' && req.url === '/register') {
        let body = '';
        req.on("data", chunk => {
            body += chunk.toString();
        });
        req.on("end", () => {
            body = qs.parse(body);
            var userExists = checkUser(body.username, body.password);
            if(!userExists){
                addUser(body.username, body.password, body.email, body.address);
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end("success");
            }else {
                res.writeHead(403, {'Content-Type': 'text/plain'});
                res.end("failed");
            }
        });
    } else {
        res.writeHead(400, {'Content-Type': 'text/plain'});
        res.end("Invalid Request");
    }
});

function addUser(username, password, email, address) {
    const users = fs.readFileSync('users.txt').toString().split("\n");
    const lastUser = JSON.parse(users[users.length - 1]);
    let id = 1;
    if (lastUser) {
        id += lastUser.id;
    }
    const newUser = {
        id : id,
        name : username,
        password : password,
        email : email,
        address: address  
    };
    const userData = JSON.stringify(newUser); 
    fs.appendFileSync('users.txt', userData);
}

function checkUser(username, password) {
    var isAuthorized = false;
    var users = fs.readFileSync('users.txt', {encoding: null, flag: 'a+'}).toString().split("\n");
    console.log(users[0]);
    if(users[0] !== '') {
        users.forEach(user => {
            var userData = JSON.parse(user);
            if (userData.username === username && userData.password === password) {
                isAuthorized = true;
            }
        });
    }
    return isAuthorized;
}

server.listen(3001);
console.log("server started");