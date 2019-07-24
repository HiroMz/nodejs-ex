var http = require('http');
var server = http.creatServer();

var filesystem = require('fs');

server.on('request', function(req, res){
    filesystem.readFile(_direname + req.url, 'utf-8', function(error, data){
        if(error){
            filesystem.readFile(_dirname + '/views/notfound.html', 'utf-8', function(notfoundError, notdoundData){
                if(notfoundError){
                    res.writeHead(404, {'Content-Type': 'text/plain'});
                    res.write('notfound!');
                    return res.end();
                }else{
                    res.writeHead(404, {'Content-Type': 'text/html'});
                    res.write(notdoundData);
                    return res.end();
                }
            });
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        }
    })
});