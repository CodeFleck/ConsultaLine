import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if(!args) {
      return value;
    }
    return value.filter(item => item.nome.indexOf(args) > -1 || item.codigo.indexOf(args) > -1);
  }

}
