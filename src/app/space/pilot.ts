export class Pilot {
  static defaaultImageUrl = '/assets/blueship.png';
  firstName: string;
  lastName: string;
  imageUrl: string;
  constructor(fullName: string, imageUrl = Pilot.defaaultImageUrl) {
    this.fullName = fullName;
    this.imageUrl = imageUrl;
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

