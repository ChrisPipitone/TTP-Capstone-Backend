const Pool = require("pg").Pool;

//im not sure how to change this yet to heroku stuff we can check that saturday
//rn i have it with my info
const pool = new Pool({
    user: "postgres",
    password: "Veeny123",
    host: "localhost",
    port: process.env.PORT || 5432,
    database: "postgres",
    // ssl: {
    //    //this is for heroku from andrea from slack cohort3
    //     require: true,
    //     rejectUnauthorized: false
    //   }
});

module.exports = pool;