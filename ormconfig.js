const env = process.env.NODE_ENV;

module.exports =
  env === "development"
    ? {
        type: "mongodb",
        host: "localhost",
        database: "impactodo",
        synchronize: true,
        logging: true,
        entities: ["src/entity/*.ts"]
      }
    : {
        type: "mongodb",
        host: "localhost",
        database: "impactodo",
        synchronize: true,
        logging: false,
        entities: ["build/entity/*.js"],
        cli: {
          entitiesDir: "src/entity",
          migrationsDir: "src/migration",
          subscribersDir: "src/subscriber"
        }
      };
