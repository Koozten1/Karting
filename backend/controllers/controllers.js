const servis = require("../servis/servis")

class ReservationController{
    async make_registration(req){
        try{

            var id =  await new Promise((resolve, reject) =>{
                resolve(servis.found_user(req.user_info.phone))

            })


            if(id == 0){
                id = await new Promise((resolve, reject) =>{
                    resolve(servis.fount_add_user(req.user_info.name, req.user_info.phone))
                })
            }

            servis.make_registration(id, req.user_info)

            }
            
        catch(e){   
            console.log(e)
        }
    }

    async show_list(req){
        try{
            console.log(req.date)
            var items = await new Promise((resolve, reject) =>{
                resolve(servis.selet_all_records(req.date))
            })

            var list_items = []
            
            var list_item = {name:"",
                phone: "",
                count_person:"",
                time: ""}

            for(var i = 0; i < items.length; i++){
                list_items.push({
                    name:items[i].FIO,
                    phone:items[i].phone,
                    count_person:items[i].count,
                    time:items[i].time
                })
            }

            console.log(list_items)
            return list_items
    


        }catch(e){
            console.log(e)
        }
    }
}

module.exports = new ReservationController