import { Request, Response } from 'express';

import pool from '../database';

class GamesController {
  games(req: Request, res: Response) {
    pool.query('DESCRIBE');
    res.json({ title: 'Rota de games' });
  }
}

export const gamesController = new GamesController();
