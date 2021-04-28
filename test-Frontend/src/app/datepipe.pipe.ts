import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datepipe'
})
export class DatepipePipe implements PipeTransform {

  age=0;

  transform(date: any, year :any): any {
    console.log(year);

    if (date) {


      var newdate = date.split("-").reverse().join("-");
      newdate = new Date(newdate)

      console.log(newdate)
      var timeDiff = Math.abs(Date.now() - newdate);
    
      this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
      return this.age

      
    } else if (year) {

      var currentYear = new Date().getFullYear()
      console.log(currentYear - year)
      return currentYear - year


  } else {

    return "-"
  }
}

}
