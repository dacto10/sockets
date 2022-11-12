import { createServer } from "http";
import { Server } from "socket.io";
import { configureServer } from "./Api";
import { Environments } from "./Config";

(async () => {
    const httpServer = createServer();
    const io = new Server(httpServer, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    });
    configureServer(io);
    httpServer.listen(Environments.PORT);
    console.log("Listening on port " + Environments.PORT);
})();