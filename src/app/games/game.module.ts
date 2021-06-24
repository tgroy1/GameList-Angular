import { NgModule } from '@angular/core';
import { GameListComponent } from './game-list.component';
import { GameDetailComponent } from './game-detail.component';
import { RouterModule } from '@angular/router';
import { GameDetailGuard } from './game-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    GameListComponent,
    GameDetailComponent,
  ],
  imports: [
    RouterModule.forChild([
      { path: 'games', component: GameListComponent },
      { 
        path: 'games/:id', 
        canActivate: [GameDetailGuard], 
        component: GameDetailComponent 
      },
    ]),
    SharedModule
  ]
})
export class GameModule { }
