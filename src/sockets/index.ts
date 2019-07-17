export default class Main {
    mainSocket: any;
    constructor(io) {
        this.mainSocket = io;
    }

    onConnection(connectedSocket: any): void {
        connectedSocket.on('join_room', (room: string, username: string): void => {
            connectedSocket.join(room);
            connectedSocket.username = username;
        });
        connectedSocket.on('message', (room: string, message: string): void => {
            const { username } = connectedSocket;
            this.mainSocket.to(room).emit('chat', username, message);
        });
    }

    connect(): void {
        this.mainSocket.on('connection', this.onConnection.bind(this));
    }
}