import {Component, View, bootstrap} from 'angular2/angular2'

@Component({
  selector: 'gophrazy'
})

@View({
  template: '<h1>Hello {{ name }}</h1>'
})

// Controller
class GoPhrazy {
  name: string;

  constructor() {
    this.name = 'fam';
  }
}
