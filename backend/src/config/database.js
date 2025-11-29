import { Sequelize } from "sequelize";

class Database{
    constructor(){
        this.init()
    }
        init(){
        this.db =new Sequelize({
            database: 'agenda_uujf',
            host:'dpg-d4l2cckhg0os73b1pqqg-a',
            username:'agenda_uujf_user',
            password:'OH4wb07RhxtyA1TKTOHEcK4ElAkk6KQJ',
            dialect:"postgres",
        })
    }
    // init(){
    //     this.db =new Sequelize({
    //         database: 'agenda',
    //         host:'localhost',
    //         username:'root',
    //         password:'',
    //         dialect:"mysql",
    //     })
    // }
}
export default new Database()