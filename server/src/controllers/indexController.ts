import { Request, Response } from 'express';

class IndexController {
  index(req: Request, res: Response) {
    res.json({ title: 'API de games' });
  }
}

export const indexController = new IndexController();
