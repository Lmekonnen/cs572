import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from './games-list/games-list.component';
import { Game1 } from './game-one/game-one.component';
import { User } from './register-template/register-template.component';




@Injectable({
  providedIn: 'root'
})
export class GamesDataService {
  private apiBaseUrl: string = "http://localhost:5353/api";
  constructor(private httpClient: HttpClient) { }
  
  public getGames(): Promise<Game[]> {
    const url: string = this.apiBaseUrl + "/games";
    return this.httpClient.get(url).toPromise()
      .then(response => response as Game[])
      .catch(this.handleError);
  }
  public getGame(gameId: string)
    : Promise<Game1> {
    const url: string = this.apiBaseUrl + "/games/" + gameId;
    return this.httpClient.get(url).toPromise()
      .then(response => response as Game1)
      .catch(this.handleError);
  }
  public addGame(gameId: string)
    : Promise<Game[]> {
    const url: string = this.apiBaseUrl + "/games/";
    return this.httpClient.post(url,gameId).toPromise()
      .then(response => response as Game[])
      .catch(this.handleError);
  }
  public updateGame(gameId: string,game:any)
    : Promise<Game1> {
    const url: string = this.apiBaseUrl + "/games/"+ gameId;
    return this.httpClient.put(url,game).toPromise()
      .then(response => response as Game1)
      .catch(this.handleError);
  }
  public deleteGame(gameId: string)
    : Promise<Game[]> {
    const url: string = this.apiBaseUrl + "/games/"+ gameId;
    return this.httpClient.delete(url).toPromise()
      .then(response => response as Game[])
      .catch(this.handleError);
  }
  public addUser(newUser: any)
    : Promise<User> {
    const url: string = this.apiBaseUrl + "/users";
    return this.httpClient.post(url,newUser).toPromise()
      .then(response => response as User)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.log("Something went wrong ", error);
    return Promise.reject(error.message || error);
  }


}
// function addUser(newUser) {
//   return $http.post("/api/users",newUser).then(complete).catch(failed);
// }


