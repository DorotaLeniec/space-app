import { Component, OnInit, ViewChild } from '@angular/core';
import { SpaceShip } from '../space-ship';
import { FighterShip } from '../fighter-ship';
import { BomberShip } from '../bomber-ship';
import { Pilot } from '../pilot';
import { PilotRoomComponent } from '../pilot-room/pilot-room.component';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css']
})
export class HangarComponent implements OnInit {
spaceShips: SpaceShip[] = [];
selectedPilot: Pilot = null;
@ViewChild(PilotRoomComponent) pilotRoom: PilotRoomComponent;
  constructor() { }

  ngOnInit() {
    this.spaceShips.push(new FighterShip(new Pilot('Andrzej Zupa', '/assets/jack.jpg')));
    this.spaceShips.push(new FighterShip(new Pilot('Andrzej Zupa', '/assets/face.png')));
    this.spaceShips.push(new BomberShip(new Pilot('Ola patola', '/assets/face.png')));
    this.spaceShips.push(new BomberShip(new Pilot('Zosia Samosia', '/assets/fox2.png')));
  }
assignPilot(spaceShip: SpaceShip) {
  spaceShip.pilot = this.selectedPilot;
  this.pilotRoom.pilotLeave();
}

deassignPilot(spaceShip: SpaceShip) {
  this.pilotRoom.pilotReturn(spaceShip.pilot);
  spaceShip.pilot = null;
}
}
