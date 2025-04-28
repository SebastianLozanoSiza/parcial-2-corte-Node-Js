// import mysql from "promise-mysql";
import mysql from "mysql2/promise";
import config from "./../config.js";

const connection = mysql.createPool({
    host: config.host,
    database: config.database,
    user: config.user,
    password : config.password
})

const getConnection = () =>{
    return connection
}

export default getConnection;