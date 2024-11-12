// kế thừa
import { Animal } from "./animal1";
export class Chicken extends Animal {
  private color: string; // Màu sắc của con gà
  protected weight: number; // Can nang, kg

  constructor(name: string, age: number, color: string, weight: number) {
    super(name, age); // Gọi constructor của lớp cha (Animal)
    this.color = color;
    this.weight = weight;
  }

  // 3. **Polymorphism (Đa hình)**: Phương thức makeSound được ghi đè trong lớp con Chicken
  makeSound(): void {
    console.log(`${this.getName()} says: Cluck Cluck!`);
  }
 

  // Phương thức để hiển thị thông tin về con gà
  displayInfo(): void {
    super.displayInfo();
    console.log(`Color: ${this.color}`);
    console.log(`${this.weight}`);
  }
}
