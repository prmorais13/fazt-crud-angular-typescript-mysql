"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
// import gamesRoutes from './routes/gamesRoutes';
class Server {
    constructor() {
        this.app = express_1.default();
        this.middleware();
        this.routes();
    }
    middleware() {
        this.app.set('port', process.env.PORT || 3000);
    }
    routes() {
        this.app.use(indexRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor rodando na porta', this.app.get('port'));
        });
    }
}
const server = new Server().start();
