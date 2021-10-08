
import { openDatabase } from 'expo-sqlite'

var db = openDatabase('CartDatabase.db')


export const deleteProductFromCart = id => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM table_cart where product_id=?',
        [id],
        (tx, results) => {console.log('success')}, (tx, error) => {console.log('error')}
      )
    })

    return true
  }