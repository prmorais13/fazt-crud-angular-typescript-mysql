import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getAllGames() {
    return this.http.get(`${this.API_URI}/games`);
  }
}
