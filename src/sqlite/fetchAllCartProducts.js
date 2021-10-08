import { openDatabase } from 'expo-sqlite'
import { sleep, sleepAndWait } from './common'

var db = openDatabase('CartDatabase.db')

export const fetchAllCartProducts = async () => {
  var temp = []
  db.transaction(function (tx) {
      tx.executeSql(
          'SELECT * FROM table_cart',
          [],
          (tx, { rows }) => {
            if(rows){
              for (let i = 0; i < rows._array.length; ++i) {
                temp.push(rows.item(i))
              }
            }
          },
          (tx, error) => {
              console.log(error, 'error')
          }
      )
  })

  return true;
}