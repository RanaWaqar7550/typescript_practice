import SocketIO from 'socket.io';

import Main from '../sockets/index';

export default class Sockets {
    io : any;
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
