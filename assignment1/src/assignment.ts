// problem-1
function formatString(input: string, toUpper?: boolean): string {
 if (toUpper === false) {
  return input.toLowerCase();
 }
 return input.toUpperCase();
}


// Problem-2
function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
 let result: { title: string; rating: number }[] = [];

 for (let item of items) {
  if (item.rating >= 4) {
   result.push(item);
  }
 }

 return result;
}

// Problem-3
function concatenateArrays<T>(...arrays: T[][]): T[] {
 let result: T[] = [];

 for (let arr of arrays) {
  result = result.concat(arr);
 }

 return result;
}

// Problem-4
class Vehicle {
 private make: string;
 private year: number;

 constructor(make: string, year: number) {
  this.make = make;
  this.year = year;
 }

 getInfo(): string {
  return "Make: " + this.make + ", Year: " + this.year;
 }
}

class Car extends Vehicle {
 private model: string;

 constructor(make: string, year: number, model: string) {
  super(make, year);
  this.model = model;
 }

 getModel(): string {
  return "Model: " + this.model;
 }
}

// Problem-5
function processValue(value: string | number): number {
 if (typeof value === "string") {
  return value.length;
 } else {
  return value * 2;
 }
}

// Problem-6
interface Product {
 name: string;
 price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
 if (products.length === 0) {
  return null;
 }

 let mostExpensive = products[0];

 for (let product of products) {
  if (product.price > mostExpensive.price) {
   mostExpensive = product;
  }
 }

 return mostExpensive;
}

// Problem-7
enum Day {
 Monday,
 Tuesday,
 Wednesday,
 Thursday,
 Friday,
 Saturday,
 Sunday
}

function getDayType(day: Day): string {
 if (day === Day.Saturday || day === Day.Sunday) {
  return "Weekend";
 } else {
  return "Weekday";
 }
}

// Problem-8
async function squareAsync(n: number): Promise<number> {
 if (n < 0) {
  throw new Error("Negative number not allowed");
 }

 return new Promise((resolve) => {
  setTimeout(() => {
   resolve(n * n);
  }, 1000);
 });
}
