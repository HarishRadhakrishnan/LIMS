import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
})
export class FilterPipe implements PipeTransform {
    transform(categories: any, searchText: any): any {
        if(searchText == null) return categories;
    
        return categories.filter(function(category){
          return category.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
        })
      }
}