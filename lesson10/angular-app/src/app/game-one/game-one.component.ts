import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GamesDataService } from '../games-data.service';

@Component({
  selector: 'app-game-one',
  templateUrl: './game-one.component.html',
  styleUrls: ['./game-one.component.css']
})
export class GameOneComponent implements OnInit {
  games: Game[]=[];

  constructor(private gamesDataService:GamesDataService) { }

  ngOnInit(): void {
    this.gamesDataService.getGame(gameId).then(response => this.games=response)
  }

}
export class Game {
  title!: string;
  price!: number;
  year!: number;
  }
