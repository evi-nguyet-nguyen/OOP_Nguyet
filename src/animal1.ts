// 1. Abstract Animal 
export abstract class Animal {
  // 4. Private properties of Animal class (Encapsulation)
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name; // Setting the private 'name' property
    this.age = age; // Setting the private 'name' property
  }

  // implementation of the 'eat' method
  // the method has an optional parameter 'amount'
  // if amount is provied, the animal eats the specifed number of protions of food.
  // if amount is not provied, print just the food beding eaten
  abstract makeSound(): void;
  public eat(food: string): void;
  public eat(food: string, amount: number): void;
  public eat(food: string, amount?: number): void {
    if (amount) {
      console.log(`${this.name} is eating ${amount} portions of ${food}`);
    } else {
      console.log(`${this.name} is eating ${food}`);
    }
  }

  // Information about 'DisplayInfo' method of animal
  public displayInfo(): void {
    console.log(`${this.name} is ${this.age} years old.`);
  }

  // Getter of name and age
  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.age;
  }
}
