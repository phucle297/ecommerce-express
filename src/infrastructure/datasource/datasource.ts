import { DataSource } from "typeorm";

export const dataSource = new DataSource({
  type: "mysql",
  logging: true,
  database: "ecommerce",
  port: 3307,
  host: "localhost",
  username: "root",
  password: "",
  synchronize: true,
  entities: [__dirname + "/../entity/*{.ts,.js}"],
});
