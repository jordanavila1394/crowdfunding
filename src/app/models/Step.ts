export class Step {
  public id: number;
  public title: string;
  public routerLink: string;
  public isActive: boolean;

  constructor (id: number, title: string, routerLink:string, isActive: boolean) {
    this.id = id;
    this.title = title;
    this.routerLink = routerLink;
    this.isActive = isActive;

  }
}
