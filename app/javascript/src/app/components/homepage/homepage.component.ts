import { Component } from '@angular/core';
import templateString from './homepage.component.html'
import styleString from './homepage.component.scss'

@Component({
  selector: 'app-homepage',
  template: templateString,
  styles: [ styleString ]
})
export class HomepageComponent {
  name = 'Homepage!';
}
