export class User {

  public email: string;
  public name: string;
  public surname: string;
  public password: string;

  constructor (email: string, name: string, surname: string, password: string) {
    this.email = email;
    this.name = name;
    this.surname = surname;
    this.password = password;
  }

  getEmail(): string {
    return this.email;
  }
  getName(): string {
    return this.name;
  }
  getSurname(): string {
    return this.surname;
  }
  getPassword(): string {
    return this.password;
  }
}
