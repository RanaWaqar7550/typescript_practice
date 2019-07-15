export default class Main {
    socket: any;
    constructor(io) {
        this.socket = io;
    }

    onConnection(connectedSocket: any): void {
        connectedSocket.on('message', (message: string): void => {
            connectedSocket.emit('chat', message);
        });
    }

    connect(): void {
        this.socket.join('room:1')
        this.socket.on('connection', this.onConnection);
    }
}