import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase'
})
export class UppercasePipe implements PipeTransform {

  transform(value: string): string {

    const transformedValue = value.toUpperCase();

    return transformedValue;
  }

}
