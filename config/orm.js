module.exports = function() {
    require('./connection')();

    function selectAll() {
        var queryDb = connection.query(
            'SELECT * FROM burgers',
            function(err, res) {
                console.log(res);
            }
        );

        return {
            callQuery: function() {
                queryDb();
            }
        }
    }

    function insertOne(name) {
        var queryDb = connection.query(
            'INSERT INTO burgers (burger_name) VALUES (?)',
            [name],
            function(err, res) {
                console.log(res);
            }
        );

        return {
            callQuery: function() {
                queryDb();
            }
        }
    }

    function updateOne(name) {
        var queryDb = connection.query(
            'UPDATE burgers SET devoured = true WHERE burger_name=?',
            [name],
            function(err, res) {
                console.log(res);
            }
        );

        return {
            callQuery: function() {
                queryDb();
            }
        }
    }

    // var selectAll = (function() {
    //     var queryDb = connection.query(
    //         'SELECT * FROM burgers',
    //         function(err, res) {
    //             console.log(res);
    //         }
    //     );

    //     return {
    //         callQuery: function() {
    //             queryDb();
    //         }
    //     }
    // })();

    // var insertOne = (function(name) {
    //     var queryDb = connection.query(
    //         'INSERT INTO burgers (burger_name) VALUES (?)',
    //         [name],
    //         function(err, res) {
    //             console.log(res);
    //         }
    //     );

    //     return {
    //         callQuery: function() {
    //             queryDb();
    //         }
    //     }
    // })();

    // var updateOne = (function(name) {
    //     var queryDb = connection.query(
    //         'UPDATE burgers SET devoured = true WHERE burger_name=?',
    //         [name],
    //         function(err, res) {
    //             console.log(res);
    //         }
    //     );

    //     return {
    //         callQuery: function() {
    //             queryDb();
    //         }
    //     }
    // })();
}