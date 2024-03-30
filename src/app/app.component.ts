import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Konstantinos';

  person0 = {
    givenName: 'Konstantinos',
    surName: 'Lougiakis',
    age: 27,
    email: 'lougiokostas@aueb.gr',
    address: 'Athens, Greece'
  };

  person1 = {
    givenName: 'John',
    surName: 'Doe',
    age: 62,
    email: 'john@aueb.gr',
    address: 'New York, USA'
  };
}
