import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Game } from '../models/Game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getGamesAll() {
    return this.http.get(`${this.API_URI}/games`);
  }

  getGameId(id: string) {
    return this.http.get(`${this.API_URI}/games/${id}`);
  }

  saveGame(game: Game) {
    return this.http.post(`${this.API_URI}/games`, game);
  }

  updateGame(id: string | number, game: Game) {
    return this.http.put(`${this.API_URI}/games/${id}`, game);
  }

  delGameId(id: string) {
    return this.http.delete(`${this.API_URI}/games/${id}`);
  }
}
