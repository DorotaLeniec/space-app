import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Pilot } from "../pilot";

@Component({
  selector: "app-pilot-room",
  templateUrl: "./pilot-room.component.html",
  styleUrls: ["./pilot-room.component.css"]
})
export class PilotRoomComponent implements OnInit {
  pilots: Pilot[] = [];
  selectedPilot: Pilot = null;
  @Output() selected = new EventEmitter<Pilot>();
  constructor() {}

  ngOnInit() {
    this.pilots.push(new Pilot("Zosia Samosia", "/assets/fox2.png"));
    this.pilots.push(new Pilot("Zybynek Zbogdanca", "/assets/fox2.png"));
    this.pilots.push(new Pilot("Basia Badass", "/assets/face.png"));
    this.pilots.push(new Pilot("Zosia Samosia", "/assets/jack.jpg"));
  }

  select(pilot: Pilot) {
    this.selectedPilot = pilot;
    this.selected.emit(pilot);
  }

  pilotLeave() {
    const index = this.pilots.indexOf(this.selectedPilot);
    this.pilots.splice(index, 1);
    this.select(null);
  }

  pilotReturn(pilot: Pilot) {
    this.pilots.push(pilot);
  }
}
