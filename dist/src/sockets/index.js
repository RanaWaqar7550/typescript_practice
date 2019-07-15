"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Main {
    constructor(io) {
        this.socket = io;
    }
    onConnection(connectedSocket) {
        const broadcast = this.socket.broadcast;
        connectedSocket.on('message', (message) => {
            broadcast.emit('chat', message);
        });
    }
    connect() {
        this.socket.on('connection', this.onConnection);
    }
}
exports.default = Main;
//# sourceMappingURL=index.js.map