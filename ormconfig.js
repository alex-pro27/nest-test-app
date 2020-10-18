module.exports = {
   "synchronize": false,
   "logging": false,
   "type": "postgres",
   "host": process.env.DATABASE_HOST,
   "port": +process.env.DATABASE_PORT,
   "username": process.env.DATABASE_USER,
   "password": process.env.DATABASE_PASSWORD,
   "database": process.env.DATABASE_NAME,
   "entities": [
      "src/entity/**/*.ts",
      "src/modules/**/*.ts",
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}
