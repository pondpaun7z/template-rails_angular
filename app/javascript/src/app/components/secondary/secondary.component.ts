import { Component, OnInit } from '@angular/core';
import templateString from './secondary.component.html'
import styleString from './secondary.component.scss'

@Component({
  selector: 'app-secondary',
  template: templateString,
  styles: [ styleString ]
})
export class SecondaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
