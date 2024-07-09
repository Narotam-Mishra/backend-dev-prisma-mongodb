
### [Prisma](https://chatgpt.com/share/9b385157-819a-46fa-9b66-4bb7788420ad)
- Prisma is an open-source database toolkit that helps developers build data-driven applications with ease. It provides a modern and intuitive approach to working with databases, offering tools and features that streamline database access and manipulation.

- Prisma is a next generation Nodejs and TypeScript ORM that unlocks a new level of developer experience when working with databases thanks to its intuitive data model, automated migrations, type-safety & auto-completion.

- [Prisma](https://www.prisma.io/docs/getting-started)

- [Prisma ORM](https://www.prisma.io/docs/orm/overview/introduction/what-is-prisma)

- [Mongo DB setup with Prisma](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/mongodb-typescript-mongodb)

- [Creating the Prisma schema](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/mongodb/creating-the-prisma-schema-typescript-mongodb)

### [How Prisma is different from mongoose and other ORM](https://chatgpt.com/share/846d589b-86c8-4ba9-aeaf-4407d91f4435)
- Prisma is a next-generation ORM for Node.js and TypeScript that helps developers build and maintain data models and interact with their database easily. It consists of three main components: Prisma Client, Prisma Migrate, and Prisma Studio.

### Key Features
1. Type Safety :- Prisma automatically generates a type-safe client based on your schema. This ensures you get full TypeScript support, which helps catch errors at compile time.

2. Schema-First Approach :- Prisma uses a schema-first approach where you define your data model in the Prisma schema file (schema.prisma). This schema is used to generate the database and client.

3. Database Support :- Prisma supports PostgreSQL, MySQL, SQLite, SQL Server, and MongoDB (in preview). It provides a consistent API across different databases.

4. Migrations :- Prisma Migrate helps you manage schema changes with a straightforward migration system. It generates SQL migration files based on changes to the Prisma schema.

5. Prisma Studio :- A GUI for interacting with your database, making it easy to explore and manipulate your data.

6. Raw SQL :-  Prisma allows you to write raw SQL queries when you need to, while still benefiting from the type safety and other features of Prisma.

- Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js. It provides a straightforward, schema-based solution to model your application data.

### Key Features
1. Schema Definition :- Mongoose schemas define the structure of documents, default values, validators, and more.

2. Middleware (Hooks) :- Mongoose supports middleware (pre and post hooks) for handling asynchronous behavior and other operations.

3. Validation :- Built-in validation at the schema level ensures data integrity.

4. Population :- Mongoose can populate documents by referencing other documents in collections

5. Plugins :- A rich ecosystem of plugins extends Mongoose functionality, such as adding support for versioning, full-text search, etc.

6. Advanced Query Features :- Mongoose provides powerful query building capabilities and supports advanced MongoDB features like aggregation.

### [Express](https://expressjs.com/)

### When to use extended: true 

```javascript
app.use(express.urlencoded({ extended: true}))
```
- When you need to parse nested objects or arrays in the URL-encoded data.

- When you require a more robust parsing capability that can handle rich data structures.

- command to run Prisma's studio

```javascript
npx prisma studio
```

### [Prisma Client CRUD](https://www.prisma.io/docs/orm/prisma-client/queries/crud)