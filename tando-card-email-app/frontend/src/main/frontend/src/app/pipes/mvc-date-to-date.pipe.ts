import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'mvcDateToDate'})
export class MvcDateToDatePipe implements PipeTransform {
  
  transform(value: string): Date {
    if(value === null || value === ""){
      return new Date();
    }
    return new Date(parseFloat(value.substr(6)));
  }
}