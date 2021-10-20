import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { GamesDataService } from '../games-data.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})

export class GamesListComponent implements OnInit {
  @ViewChild('addForm')
  addForm!: NgForm;
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
  constructor(private gamesDataService:GamesDataService,private route:ActivatedRoute,private router: Router) { 

  }

  ngOnInit(): void {
    this.gamesDataService.getGames().then(response => this.games=response);
  }

delete(_id:string){
  const gameId=this.route.snapshot.params['gameId'];
  this.gamesDataService.deleteGame(gameId).then(response => this.games=response);
 
}

add(){
  const gameId=this.route.snapshot.params['gameId'];
  this.gamesDataService.addGame(gameId).then(response => this.games=response);
}
}
export class Game {
  title!: string;
  _id!:string;
  price!: number;
  year!: number;
  }
  
  