import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarComponent } from '../shared/star/star.component';
import { GenreShortenerPipe } from '../shared/pipes/genre-shortener.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StarComponent,
    GenreShortenerPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarComponent,
    GenreShortenerPipe,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
