import {Component, View, bootstrap} from 'angular2/angular2'

// Model
class Team {
  score: number;
  name: string;
}

@Component({
  selector: 'counter'
})

@View({
  templateUrl: 'Counter.html'
})

// Controller
export class Counter {
  
  team: Team;

  constructor() {
    this.team = new Team();
    this.team.score = 0;
    this.team.name = 'Team 1';
  }
}
