import SocketIO from 'socket.io';

import Main from '../sockets/index';

/**
 * @name Sockets class
 */
export default class Sockets {
    private io : SocketIO.SocketIOSever.Socket;
    constructor (server : any) {
        this.io = new SocketIO({
            path: '/socket.io',
            pingTimeout: 2000,
            pingInterval: 100,
          });
        this.io.listen(server, {
            transports: ['polling', 'websocket'],
          });
    }
    get () : any {
        return this.io;
    }
    startEvents () : void {
        const socket = new Main(this.io);
        socket.connect();
    }
}
