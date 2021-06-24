import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'genreShortener'
})
export class GenreShortenerPipe implements PipeTransform {
    
    transform(value: string) {
        return value.split(' ')[0];
    }

}