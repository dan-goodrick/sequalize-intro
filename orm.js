import { Sequelize, Model , DataTypes} from "sequelize";

let sequelize = new Sequelize('postgresql://dan@localhost:5432/sequelize-intro-db')

class TestingTable extends Model {}

TestingTable.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        myNumber: {
            type: DataTypes.INTEGER,
            field: 'my_number'
        }
    },
    {
        sequelize: sequelize,
        tableName: 'testing_table',
        timestamps: false
    }
)


await sequelize.sync()//{force: true}

TestingTable.create({myNumber: 70})
const res = await TestingTable.findAll({raw:true})

sequelize.close()
console.log(res)
