import Sequelize  from 'sequelize';


// Connecting to a database
const db= new Sequelize('myLibrary', 'postgres', '12345678', {
    host: 'localhost',
    dialect:'postgres'
  });
  
  
  
  export default db;
  
//   npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
  