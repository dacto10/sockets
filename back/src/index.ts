import { Server } from "socket.io"

(async () => {
    const io = new Server();
    
    io.listen(3000);
})();