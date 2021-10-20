import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-navigation',
  templateUrl: './app-navigation.component.html',
  styleUrls: ['./app-navigation.component.css']
})
export class AppNavigationComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
onHome():void{
  this._router.navigate([""])
}
onGames():void{
  this._router.navigate(["games"])
}
onRegister():void{
  this._router.navigate(["register"])
}
onParent():void{
  this._router.navigate(["parent"])
}
}
