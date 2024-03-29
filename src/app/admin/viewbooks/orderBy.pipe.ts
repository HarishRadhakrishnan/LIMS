import {Pipe,PipeTransform } from '@angular/core';

@Pipe({
    name: 'orderBy'
  })
export class OrderByPipe implements PipeTransform {
  transform(value: any, field: string): any{
    if(!value){return value};
    const groupedObj:any = value.reduce((prev, cur)=> {
      if(!prev[cur[field]]) {
        prev[cur[field]] = [cur];
      } else {
        prev[cur[field]].push(cur);
      }
      return prev;
    }, {});
    return Object.keys(groupedObj).map(key => {return { key, "value": groupedObj[key] }});

  }
}