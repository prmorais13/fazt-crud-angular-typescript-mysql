import { Request, Response } from 'express';

import pool from '../database';

class GamesController {
  async gamesAll(req: Request, res: Response): Promise<void> {
    const games = await pool.query('SELECT * FROM game');

    if (games.length > 0) {
      res.json(games);
    } else {
      res.status(404).json({ msg: `Não há jogos cadastrados.` });
    }
  }

  async gameCreate(req: Request, res: Response): Promise<void> {
    await pool.query('INSERT INTO game SET ?', [req.body]);
    res.json({ msg: 'Jogo salvo com sucesso.' });
  }

  async gameUpdate(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const game = await pool.query('UPDATE game SET ? WHERE id = ?', [
      req.body,
      id
    ]);
    res.json({ msg: `Jogo com ID ${id} atualizado.` });
  }

  async gameId(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const games = await pool.query('SELECT * FROM game WHERE id = ?', [id]);

    if (games.length > 0) {
      res.json(games[0]);
    } else {
      res.status(404).json({ msg: `Jogo não encontrado para o ID ${id}` });
    }
  }

  async gameDelete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await pool.query('DELETE FROM game WHERE id = ?', [id]);
    res.json({ msg: `Jogo com ID ${id} foi removido.` });
  }
}

export const gamesController = new GamesController();
