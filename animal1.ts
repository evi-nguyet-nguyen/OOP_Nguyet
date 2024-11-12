// 1. Lớp Trừu Tượng Animal (Động vật chung)
abstract class Animal {
     // 4. **Encapsulation (Đóng gói)**: Các thuộc tính riêng tư của lớp Animal
    private name: string;
    private age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    // Phương thức trừu tượng, các lớp con phải triển khai
    abstract makeSound(): void;
  
    // Phương thức công khai để hiển thị thông tin chung về động vật
    public displayInfo(): void {
      console.log(`${this.name} is ${this.age} years old.`);
    }
  
    // Getter cho tên và tuổi
    public getName(): string {
      return this.name;
    }
  
    public getAge(): number {
      return this.age;
    }
  }
  
  // 2. Lớp Con Chicken (Con Gà) kế thừa từ Animal
  class Chicken extends Animal {
    private color: string;  // Màu sắc của con gà
    //private weight: number; // Can nang, kg
  
  
    constructor(name: string, age: number, color: string) {
      super(name, age);  // Gọi constructor của lớp cha (Animal)
      this.color = color;
  
    }

    // 3. **Polymorphism (Đa hình)**: Phương thức makeSound được ghi đè trong lớp con Chicken
    makeSound(): void {
      console.log(`${this.getName()} says: Cluck Cluck!`);
    }
  
    // Phương thức để hiển thị thông tin về con gà
    public displayChickenInfo(): void {
      this.displayInfo();
      console.log(`Color: ${this.color}`);
      
    }
  }
  
  //  Tạo các đối tượng con gà và sử dụng các phương thức
  const chicken1 = new Chicken("Henrietta", 2, "White");
  const chicken2 = new Chicken("Cluckster", 1, "Brown");
  
  // Hiển thị thông tin và hành động của con gà
  chicken1.displayChickenInfo();
  chicken1.makeSound();

  
  console.log("\n");
  
  chicken2.displayChickenInfo();
  chicken2.makeSound();

  