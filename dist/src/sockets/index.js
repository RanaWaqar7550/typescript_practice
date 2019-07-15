"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Main {
    constructor(io) {
        this.socket = io;
    }
    static sendMessage(message) {
        console.log(message);
        this.socket.emit('chat', message);
    }
    onConnection(connectedSocket) {
        connectedSocket.on('message', Main.sendMessage);
    }
    connect() {
        Main.socket.on('connection', this.onConnection);
    }
}
exports.default = Main;
//# sourceMappingURL=index.js.map