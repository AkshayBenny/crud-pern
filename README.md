### Prisma Setup

```
<!-- to initialize prisma cli -->
npx prisma

<!-- generate schema -->
npx prisma init
```

After making changes to schema, to apply them to the database,

```
npx prisma migrate dev --name init
```
