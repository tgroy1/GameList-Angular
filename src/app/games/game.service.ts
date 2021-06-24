import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { throwError } from "rxjs/internal/observable/throwError";
import { catchError, map, tap } from 'rxjs/operators';

import { IGame } from "./game";

@Injectable({
    providedIn: 'root'
})
export class GameService {

    private gamesUrl = 'api/games/games.json';

    constructor(private http: HttpClient) {}
    
    getGames(): Observable<IGame[]> {
        return this.http.get<IGame[]>(this.gamesUrl).pipe(
            tap(data => console.log('All: ', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getGame(id: number): Observable<IGame | undefined> {
      return this.getGames()
        .pipe(
          map((games: IGame[]) => games.find(game => game.id === id))
        );
    }

    private handleError(err: HttpErrorResponse): Observable<never> {
      let errorMessage = '';
      if (err.error instanceof ErrorEvent) {
        errorMessage = `An error occurred: ${err.error.message}`;
      } else {
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
      }
      console.error(errorMessage);
      return throwError(errorMessage);
    }
}