import { GamesService } from './../../services/games.service';
import { Component, OnInit, HostBinding } from '@angular/core';

import { Game } from './../../models/Game';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  game: Game = {
    id: 0,
    title: '',
    description: '',
    created_at: new Date()
  };

  constructor(private gameService: GamesService) {}

  ngOnInit() {}

  saveNewGame() {
    delete this.game.created_at;
    delete this.game.id;

    this.gameService.saveGame(this.game).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    );
  }
}
