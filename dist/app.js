"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = require("./src/config/express");
const sockets_1 = __importDefault(require("./src/config/sockets"));
const server = http_1.default.createServer(express_1.app);
const port = 3000;
const socket = new sockets_1.default(server);
socket.startEvents();
server.listen(port, (err) => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map