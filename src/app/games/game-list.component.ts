import { ThrowStmt } from "@angular/compiler";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IGame } from "./game";
import { GameService } from "./game.service";

@Component({
    templateUrl: './game-list.component.html',
    styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit, OnDestroy {

    pageTitle: string = 'Game List';
    imageHeight: number = 50;
    imageWidth: number = 70;
    imageMargin: number = 5;
    showImage: boolean = false;
    errorMessage: string = '';
    sub!: Subscription;

    private _listFilter: string = '';

    get listFilter() {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredGames = this.performFilter(value);
    }

    filteredGames: IGame[] = [];
    games: IGame[] = [];

    constructor(private gameService: GameService) { }

    ngOnInit(): void {
        this.sub = this.gameService.getGames().subscribe({
            next: games => {
                this.games = games;
                this.filteredGames = this.games;
            },
            error: err => this.errorMessage = err
        });
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy: string): IGame[] {
        return this.games.filter((game: IGame) => game.genre.toLowerCase().includes(filterBy.toLowerCase()));
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Games List: ' + message;
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}


