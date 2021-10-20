import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GamesListComponent } from './games-list/games-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { GameOneComponent } from './game-one/game-one.component';
import { FooterComponent } from './footer/footer.component';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import { RegisterReactiveComponent } from './register-reactive/register-reactive.component';
import { RegisterTemplateComponent } from './register-template/register-template.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    GamesListComponent,
    ErrorPageComponent,
    GameOneComponent,
    FooterComponent,
    AppNavigationComponent,
    RegisterReactiveComponent,
    RegisterTemplateComponent,
    ChildComponent,
    ParentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: "",
        component: WelcomeComponent
      },
      {
        path: "games",
        component: GamesListComponent
      },
      {
        path: "games/:gameId",
        component: GameOneComponent
      },
      // {
      //   path: "register",
      //   component: RegisterReactiveComponent
      // },
      {
        path: "register",
        component: RegisterTemplateComponent
      },
      {
        path: "parent",
        component: ParentComponent
      },
      {
        path: "**",
        component: ErrorPageComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
