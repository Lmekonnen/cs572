import { Component, OnInit } from '@angular/core';
import { GamesDataService } from '../games-data.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})

export class GamesListComponent implements OnInit {
  games: Game[]=[];

  // game1:Game= {
  //   title: "Mr. Jack",
  //   price: 33.96,
  //   year: 2006
  //   };
  //   game2:Game= {
  //     title: "Flock",
  //     price: 15.99,
  //     year: 2016
  //     };
  //   games: Game[]= [this.game1, this.game2];
  constructor(private gamesDataService:GamesDataService) { 

  }

  ngOnInit(): void {
    this.gamesDataService.getGames().then(response => this.games=response)
  }


}
export class Game {
  title!: string;
  _id!:string;
  price!: number;
  year!: number;
  }
