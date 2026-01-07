import mysql from 'mysql2/promise';

export const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'PRAshant007@',
    database:'feedback',
});


try{
    const connection = await db.getConnection();
    console.log("connection with mysql is done");
    connection.release();
}catch(error){
    console.log("connection with mysql failed ");
    process.exit(1);
}