module.exports = function() {
    const mysql = require("mysql");

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'cdbrannon',
        database: 'burgers_db'
    });

    connection.connect(function(err) {
        if (err) throw err
        console.log('You are now connected...');
    });
}