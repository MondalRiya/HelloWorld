import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPipe'
})
export class SortPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args==='asc'){
      return value.sort(function(a,b) {
        return a-b
      })
    }else if(args==='dsc'){}
   // return value.sort();  //string sort
    return value.sort(function(a,b) {
      return a-b
    }).reverse()
  
  }

}
