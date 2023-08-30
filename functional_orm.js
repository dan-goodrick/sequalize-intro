
import { Sequelize, Model , DataTypes} from "sequelize";

let sequelize = new Sequelize('postgresql://dan@localhost:5432/sequelize-intro-db')

const TestingTable = sequelize.define('testing_table', 
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    myNumber: {
      type: DataTypes.INTEGER,
      field: "my_number",
    }
  },
 {
  tableName: 'testing_table',
});