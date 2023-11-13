const mysql= require('mysql')


const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root12',
    database: 'karting'

});


conn.connect((err) =>{
if(err){
   console.log(err)
   
}

else{
   console.log('connect_secsess')
}
});

module.exports = conn