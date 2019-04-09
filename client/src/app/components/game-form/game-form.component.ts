import { GamesService } from './../../services/games.service';
import { Component, OnInit, HostBinding } from '@angular/core';

import { Game } from './../../models/Game';
import { Router, ActivatedRoute } from '@angular/router';

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
    image: '',
    created_at: new Date()
  };

  // edit = false;

  constructor(
    private gameService: GamesService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    if (params.id) {
      this.gameService.getGameId(params.id).subscribe(
        res => {
          this.game = res;
          // this.edit = true;
        },
        err => console.log(err)
      );
    }
  }

  saveOrUpadate() {
    if (this.game.id !== 0) {
      this.updateGame();
    } else {
      this.saveNewGame();
    }
    this.router.navigate(['/games']);
  }

  saveNewGame() {
    delete this.game.created_at;
    delete this.game.id;

    this.gameService.saveGame(this.game).subscribe(
      res => {
        console.log(res);
        // this.router.navigate(['/games']);
      },
      err => console.log(err)
    );
  }

  updateGame() {
    delete this.game.created_at;

    this.gameService.updateGame(this.game.id, this.game).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    );
  }
}
