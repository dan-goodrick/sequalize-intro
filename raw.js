import { Sequelize } from "sequelize";

let sequelize = new Sequelize('postgresql://dan@localhost:5432/sequelize-intro-db')

let num = 52;
sequelize.query(`insert into testing_table (my_number) values(${num});`)

let response = await sequelize.query(`select * from testing_table;`)//[0] doesn't work here
console.log(response[0]);



class TestingTable extends Model {}

TestingTable.init(
  {
    id: {
      type: DataTypes.Integer,
      primaryKey: true,
    },
    deptName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    modelName: 'department', // table name will be 'departments'
    sequelize: db, // need to pass connection instance
  },

