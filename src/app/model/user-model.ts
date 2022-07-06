export class UserModel {

  private _id: number;
  private _name: string;
  private _email: string;
  private _password: string;
  private _passwordAgain: string;

  constructor(id?: number, name?: string, email?: string, password?: string, passwordAgain?: string) {

    this._id = id || 0;
    this._name = name || "";
    this._email = email || "";
    this._password = password || "";
    this._passwordAgain = passwordAgain || "";

  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get passwordAgain(): string {
    return this._passwordAgain;
  }

  set passwordAgain(value: string) {
    this._passwordAgain = value;
  }

}
