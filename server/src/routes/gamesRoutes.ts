import { Router } from 'express';

import { gamesController } from '../controllers/gamesController';

class GamesRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    // this.router.get('/', gamesController.games);
    this.router
      .route('/')
      .get(gamesController.gamesAll)
      .post(gamesController.gameCreate);

    this.router
      .route('/:id')
      .get(gamesController.gameId)
      .put(gamesController.gameUpdate)
      .delete(gamesController.gameDelete);
  }
}

// const gamesRoutes = new GamesRoutes();

export default new GamesRoutes().router;
