import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SpaceShipType } from '../space-ship-type.enum';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OrderFormValue } from '../order-form-value';
import { SpaceShipService } from '../space-ship.service';
import { map } from 'rxjs/operators';


interface ShipType {
  label: string;
  value: SpaceShipType;
}

@Component({
  selector: 'app-engineers-room',
  templateUrl: './engineers-room.component.html',
  styleUrls: ['./engineers-room.component.css']
})


export class EngineersRoomComponent implements OnInit {
  spaceShipTypes: ShipType[] = [
    {label: 'Myśliwiec', value: SpaceShipType.Fighter},
    {label: 'Bombowiec', value: SpaceShipType.Bomber}
  ];
  isProducing = false;
  shipCount = this.spaceShipService.hangarShips.pipe(
    map((ships) => ships.length)
  );


form: FormGroup;
  constructor( private spaceShipService: SpaceShipService) { }

  ngOnInit() {
    this.form = new FormGroup({
      shipType: new FormControl(SpaceShipType.Fighter, {validators: [Validators.required]}),
      shipCount: new FormControl(1, {validators: [Validators.required, Validators.min(1), Validators.max(5)]})
    });
  }

  orderSpaceShips(formValues: OrderFormValue) {
    this.isProducing = true;
    this.spaceShipService.produceShips(formValues)
        .subscribe({
          complete: () => this.isProducing = false
        });
  }

}
