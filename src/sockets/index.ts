export default class Main {
    static socket: any;
    constructor(io) {
        this.socket = io;
    }
    static sendMessage(message): void {
        console.log(message);
        this.socket.emit('chat', message);
    }

    onConnection(connectedSocket: any): void {
        connectedSocket.on('message', Main.sendMessage);
    }

    connect(): void {
        Main.socket.on('connection', this.onConnection);
    }
}