export class BookModel {

  private _id: number;
  private _title: string;
  private _description: string;
  private _author: string;
  private _publisher: string;
  private _price: number

  constructor(id?: number, title?: string, description?: string, author?: string, publisher?: string, price?: number) {

    this._id = id || 0;
    this._title = title || "";
    this._description = description || "";
    this._author = author || "";
    this._publisher = publisher || "";
    this._price = price || 0;

  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get author(): string {
    return this._author;
  }

  set author(value: string) {
    this._author = value;
  }

  get publisher(): string {
    return this._publisher;
  }

  set publisher(value: string) {
    this._publisher = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

}
