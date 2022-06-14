import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgPath'
})
export class ImgPathPipe implements PipeTransform {

  transform(id: number): string {
    return "./assets/img/${id}.png";
  }

}
