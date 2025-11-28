import database from "../config/database.js"
import Cliente from "./clientes.js"
class Atendimento {
    constructor() {
        this.model = database.db.define('atendimentos', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            dia: {
                type: database.db.Sequelize.DATE
            },
            hora: {
                type: database.db.Sequelize.TIME
            },
            valor: {
                type: database.db.Sequelize.DECIMAL
            },
            concluido: {
                type: database.db.Sequelize.BOOLEAN
            },
            clientId: {
                type:database.db.Sequelize.INTEGER,
                forgeinKey:true
            }
        })
        this.model.belongsTo(Cliente)
        Cliente.hasMany(this.model,{ foreignKey: 'clientId' })

        
    }
}
export default new Atendimento().model