const conn = require('../DB')

class  MainServis{

    async found_user(phone){

            const result = await new Promise((resolve, reject)=>{
                conn.query("SELECT * FROM Users WHERE phone = ?", phone, (err, result, field) =>{
                        resolve(result);
                })
            })
            if(result.length == 0){
                return 0;
            }

            else{
                return result[0].id
            }
        }
    


    async fount_add_user(name, phone){
        conn.query("INSERT INTO Users(FIO, phone) VALUES(?, ?)", [name, phone])
        return this.found_user(phone)
    }

    async make_registration(id, items){
            conn.query("INSERT INTO time_list(data, time, count, id_user) VALUES(?, ?, ?, ?)", [items.data, items.time, items.count, id])
    }

    async selet_all_records(data){
        const result = await new Promise((resolve, reject)=>{
            conn.query("SELECT time_list.time, time_list.data, time_list.count, Users.FIO, Users.phone FROM time_list INNER JOIN Users ON time_list.id_user = Users.id where time_list.data = ?", data, (err, result, field)=>{
                
                resolve(result)
            })
        })

        return result
    }

    async creat_items(){

    }
}

module.exports = new MainServis