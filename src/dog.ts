import { Animal } from "./animal1";
export class Dogs extends Animal {
  protected weight: number; // weight dog
  constructor(name: string, age: number, weight: number) { //  call constructor from class (animal)
    super(name, age);
    this.weight = weight;// weight of dog
  }
  //3. Polymorphism  Makesound method overrding in the class dog
  makeSound(): void {
    console.log(`${this.getName()} says : quau quau`);
  }

  // Information about 'DisplayInfo' method of dog
  public displayInfo(): void {
    super.displayInfo();
    console.log(`weight : ${this.weight}`);
  }
}
