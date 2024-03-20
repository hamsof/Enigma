export const dataSource = {
  type: 'mysql',
  host: 'localhost', 
  port: 3306, 
  username: 'root', 
  password: 'your_password', 
  database: 'your_database',
  synchronize: false, 
  logging: true,
  entities: ['entities/*.ts'], 
  migrations: ['migrations/*.ts'], 
  cli: {
    migrationsDir: 'migrations', 
  },
};

