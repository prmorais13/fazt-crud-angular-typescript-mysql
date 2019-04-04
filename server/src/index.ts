import express, { Application } from 'express';

import indexRoutes from './routes/indexRoutes';
// import gamesRoutes from './routes/gamesRoutes';

class Server {
  public app: Application;

  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware(): void {
    this.app.set('port', process.env.PORT || 3000);
  }

  routes(): void {
    this.app.use(indexRoutes);
  }

  start(): void {
    this.app.listen(this.app.get('port'), () => {
      console.log('Servidor rodando na porta', this.app.get('port'));
    });
  }
}

const server = new Server().start();
