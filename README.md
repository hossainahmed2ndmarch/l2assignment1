
## 🆚 Interfaces vs Types in TypeScript

At first glance, `interface` and `type` in TypeScript might seem interchangeable. Both allow you to define the shape of an object. But they have subtle differences that matter, especially in larger projects.

### ✅ Interface

An interface is a way to describe the structure of an object. It’s great for defining contracts for classes or objects and supports **declaration merging** (you can declare the same interface multiple times, and TypeScript will merge them).

```ts
interface User {
  name: string;
  age: number;
}

interface User {
  email: string;
}

const user: User = {
  name: "Alice",
  age: 30,
  email: "alice@example.com",
};

## Union vs Intersection Types in TypeScript

One of TypeScript’s most powerful features is the ability to **combine types**. This is where **union (`|`)** and **intersection (`&`)** types come in.

---

## ✅ Union Type

A union type means a value can be one of several types.

```ts
function printId(id: string | number) {
  console.log("ID:", id);
}

printId("123");
printId(456);

