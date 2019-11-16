import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'estrellas'
})
export class EstrellasPipe implements PipeTransform {

  constructor(private dom: DomSanitizer) { }
  transform(className: string): any {
    return this.dom.bypassSecurityTrustHtml(`<i class="fa fa-${className}"></i>`);
  }

}
