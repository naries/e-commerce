import * as SQLite from 'expo-sqlite'

var db = SQLite.openDatabase('CartDatabase.db')

export const createTable = () => {
    db.transaction(function (txn) {
        txn.executeSql(
            'CREATE TABLE IF NOT EXISTS table_cart (product_id INTEGER PRIMARY KEY NOT NULL, product_name VARCHAR(20), price VARCHAR(20), image VARCHAR(100))',
            [], 
            (tx, result) => {
                // console.log(result);
            },
            (tx, error) => {
                console.log(error);
            }
        )
    })
}
