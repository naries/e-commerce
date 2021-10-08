import { openDatabase } from 'expo-sqlite'
var db = openDatabase('CartDatabase.db')

export const addToCart = ({ id, name, price, image }) => {
    let success = false

    db.transaction(function (tx) {
        console.log({id, name, price})
        tx.executeSql(
            'INSERT INTO table_cart(product_id, product_name, price, image) VALUES (?,?,?,?)',
            [id, name, price, image],
            (tx, results) => {
                console.log(results, 'success')
                console.log('Results', results.rowsAffected, results)
                if (results.rowsAffected > 0) {
                    success = true
                }
            },
            (tx, error) => {
                console.log(error, 'error')
            }
        )
    })

    return success;
}