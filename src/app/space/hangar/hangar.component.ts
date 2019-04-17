import { Component, OnInit, ViewChild } from "@angular/core";
import { SpaceShip } from "../space-ship";
import { FighterShip } from "../fighter-ship";
import { BomberShip } from "../bomber-ship";
import { Pilot } from "../pilot";
import { PilotRoomComponent } from "../pilot-room/pilot-room.component";
import { SpaceShipService } from '../space-ship.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: "app-hangar",
  templateUrl: "./hangar.component.html",
  styleUrls: ["./hangar.component.css"]
})
export class HangarComponent implements OnInit {
  selectedPilot: Pilot = null;
  spaceShips = this.spaceShipService.hangarShips;

  @ViewChild(PilotRoomComponent) pilotRoom: PilotRoomComponent;
  constructor(private spaceShipService: SpaceShipService) {}

  ngOnInit() {}
  assignPilot(spaceShip: SpaceShip) {
    console.log(spaceShip);
    console.log(this.selectedPilot)
    spaceShip.pilot = this.selectedPilot;
    this.pilotRoom.pilotLeave();
  }

  deassignPilot(spaceShip: SpaceShip) {
    this.pilotRoom.pilotReturn(spaceShip.pilot);
    spaceShip.pilot = null;
  }
}
