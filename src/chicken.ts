
import { Animal } from "./animal1";
export class Chicken extends Animal {
  private color: string; // color of chicken
  protected weight: number; // weigh of chicken

  constructor(name: string, age: number, color: string, weight: number) {
    super(name, age); //  call constructor from class (animal)
    this.color = color;
    this.weight = weight;
  }

  //3. Polymorphism  Makesound method overrding in the class chicken
  makeSound(): void {
    console.log(`${this.getName()} says: Cluck Cluck!`);
  }

  // Information about 'DisplayInfo' method of chicken
  displayInfo(): void {
    super.displayInfo();
    console.log(`Color: ${this.color}`);
    console.log(`${this.weight}`);
  }
}
