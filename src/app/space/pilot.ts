export class Pilot {
  static defaultImageUrl = '/assets/blueship.png';
  firstName: string;
  lastName: string;
  imageUrl: string;
  id: number;
  constructor(attrs: Partial<PilotAttrs> = {}) {
    this.id = attrs.id;
    this.firstName = attrs.firstName;
    this.lastName = attrs.lastName;
    this.imageUrl = attrs.imageUrl || Pilot.defaultImageUrl;
  }

  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value: string){
    const values = value.split(' ');
    this.firstName = values[0];
    this.lastName = values[1];
  }
}

export interface PilotAttrs {
  id: number;
  firstName: string;
  lastName: string;
  imageUrl: string;
}

