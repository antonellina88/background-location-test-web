import { Component, OnInit } from '@angular/core';
import { 
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import * as moment from 'moment';

import {PositionService } from './position.service';
import {Position } from './position';

function dateGreatherThan(control: AbstractControl): {[key: string]: boolean} {
  let fromDate:moment.Moment = moment(control.get('fromDate').value, 'DD/MM/YYYY HH:mm', true).utc();
  let toDate:moment.Moment = moment(control.get('toDate').value, 'DD/MM/YYYY HH:mm', true).utc();

  return toDate.isSameOrAfter(fromDate) ? null : {'noDateGreatherThan': true};
}

function validDate(control: AbstractControl): {[key: string]: boolean} {
  let date:moment.Moment = moment(control.value, 'DD/MM/YYYY HH:mm', true);
  return date.isValid() ? null : {'noValidDate': true};
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  search: FormGroup;
  private positions: Position[] = [];

  constructor(private _formBuilder: FormBuilder, private _positionService: PositionService) {

    /* this._positions = [
      { id: '', latitude: 40.850538, longitude: 14.490489 },
      { id: '', latitude: 40.849174, longitude: 14.488077 }
    ]; */

    this._positionService.getAll()
      .subscribe((positions) => console.log(positions));

    setTimeout(() => {
      // this.positions[0] = { latitude: 41.850538, longitude: 12.490489 }
      // this._positions.pop();
    }, 4000);
  }

  ngOnInit(): void {
    this.search = this._formBuilder.group({
      fromDate: new FormControl('', [Validators.required, validDate]),
      toDate: new FormControl('', [Validators.required, validDate])
    }, {validator: dateGreatherThan});

    this.search.statusChanges
      .subscribe((status) => console.log(status));

    this.search.valueChanges
      .subscribe((value) => console.log(value));
  }

  searchByDates(parameters: any, isValid: boolean, event: Event): void {
    let fromDate:moment.Moment = moment.utc(parameters.fromDate, 'DD/MM/YYYY HH:mm', true);
    let toDate:moment.Moment = moment.utc(parameters.toDate, 'DD/MM/YYYY HH:mm', true);

    console.log(fromDate.format('X'));
    console.log(toDate.format('X'));

    this.positions = [];
    

    // this._positionService.getByDates(+fromDate.format('X'), +toDate.format('X'))
    this._positionService.getAll()
      .subscribe((positions: Position[]) => this.positions = positions);

    event.preventDefault();
    event.stopPropagation();
  }

  showError(control: string): boolean {
    return this.search.get(control).errors !== null && !this.search.pristine;
  }
}
