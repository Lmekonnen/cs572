import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { GamesDataService } from '../games-data.service';


@Component({
  selector: 'app-game-one',
  templateUrl: './game-one.component.html',
  styleUrls: ['./game-one.component.css']
})
export class GameOneComponent implements OnInit {
  @ViewChild('updateForm')
  updateForm!:NgForm
  game!: Game1

  constructor(private gamesDataService:GamesDataService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    const gameId=this.route.snapshot.params['gameId'];
    this.gamesDataService.getGame(gameId).then(response=>this.game=response);
   
}
update(){
  const gameId=this.route.snapshot.params['gameId'];
const game={
      name: this.game.title,
      username: this.game.price,
      password: this.game.year
    }
     this.gamesDataService.updateGame(gameId,game).then(response=>this.game=response);
}


}
export class Game1 {
  title!: string;
  price!: number;
  year!: number;
  }
