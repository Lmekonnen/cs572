import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GamesDataService } from '../games-data.service';


@Component({
  selector: 'app-game-one',
  templateUrl: './game-one.component.html',
  styleUrls: ['./game-one.component.css']
})
export class GameOneComponent implements OnInit {
  game!: Game1

  constructor(private gamesDataService:GamesDataService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    const gameId=this.route.snapshot.params['gameId'];
    this.gamesDataService.getGame(gameId).then(response=>this.game=response);
}


}
export class Game1 {
  title!: string;
  price!: number;
  year!: number;
  }
