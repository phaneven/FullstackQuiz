var server = require("./server/server");
var router = require("./server/router");
var requestHandler = require("./server/requestHandler");

var handle = {}
handle["/"] = requestHandler.home;
handle["/upload"] = requestHandler.upload;

server.start(router.route,handle);
