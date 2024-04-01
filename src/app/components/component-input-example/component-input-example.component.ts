import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-input-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})
export class ComponentInputExampleComponent {
  
  person0 : Person = {
    givenName: 'Konstantinos',
    surName: 'Lougiakis',
    age: 27,
    email: 'lougiokostas@aueb.gr',
    address: 'Athens, Greece'
  };

  person1: Person = {
    givenName: 'John',
    surName: 'Doe',
    age: 62,
    email: 'john@aueb.gr',
    address: 'New York, USA'
  };
}
