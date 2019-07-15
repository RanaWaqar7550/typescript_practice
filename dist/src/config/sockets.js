"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = __importDefault(require("socket.io"));
const index_1 = __importDefault(require("../sockets/index"));
class Sockets {
    constructor(server) {
        this.io = new socket_io_1.default({
            path: '/socket.io',
            pingTimeout: 2000,
            pingInterval: 100
        });
        this.io.listen(server, {
            transports: ['polling', 'websocket']
        });
    }
    get() {
        return this.io;
    }
    startEvents() {
        const socket = new index_1.default(this.io);
        socket.connect();
    }
}
exports.default = Sockets;
//# sourceMappingURL=sockets.js.map