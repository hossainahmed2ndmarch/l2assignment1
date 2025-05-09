## 🅺 Interfaces vs Types in TypeScript

At first glance, `interface` and `type` in TypeScript might seem interchangeable. Both allow you to define the shape of an object. But they have **subtle differences** that become important in larger projects.

### ✅ Interface

An `interface` is ideal for describing the **structure of an object**. It’s great for defining contracts for classes or objects and supports **declaration merging** (you can declare the same interface multiple times and TypeScript will merge them).

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
```

### ✅ Type Alias

A `type` is more **flexible** than an interface. It can represent object shapes, primitives, union types, tuples, and more. However, it **doesn’t support declaration merging**.

```ts
type Admin = {
  name: string;
  role: "admin" | "superadmin";
};
```

### 🎯 When to Use What?

* Use `interface` when defining **object shapes** and working with **classes**.
* Use `type` when you need **unions, intersections, or more complex type expressions**.

While they are often interchangeable for basic object definitions, knowing the differences helps you choose the right tool for your use case.

---

## 🔗 Union vs Intersection Types in TypeScript

One of TypeScript’s most powerful features is the ability to **combine types**. This is where **union (`|`)** and **intersection (`&`)** types come into play.

### ✅ Union Type

A union type means a value can be **one of several types**.

```ts
function printId(id: string | number) {
  console.log("ID:", id);
}

printId("123");
printId(456);
```

Here, `id` can be either a `string` or a `number`. This is useful for building **flexible APIs** that accept multiple input types.

### ✅ Intersection Type

An intersection type **combines multiple types into one**. The resulting value must satisfy **all** the combined types.

```ts
type Person = { name: string };
type Contact = { email: string };

type ContactPerson = Person & Contact;

const contactPerson: ContactPerson = {
  name: "Bob",
  email: "bob@example.com",
};
```

This is perfect when you need to **merge multiple traits**—like combining personal info and contact details.
