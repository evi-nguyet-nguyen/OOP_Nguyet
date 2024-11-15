import { Animal } from "./animal1"

export class Cats extends Animal
{
    public color : string; // color of cat
    constructor(name: string, age: number, color: string) //  call constructor from class (animal)
    {
        super(name,age);
        this.color = color;
    }
    //3. Polymorphism  Makesound method overrding in the class cat
    makeSound(): void {
        console.log(`${this.getName} says : Meo Meo`);
    }
   // Information about 'DisplayInfo' method of cat
    public displayInfo(): void {
        super.displayInfo();
        console.log(`${this.color}`);
    }
}