import { addToCart } from "../../../sqlite/addToCart";
import { createTable as createCartTable } from "../../../sqlite/createTable";
import { deleteProductFromCart } from "../../../sqlite/deleteCartProduct";
import { fetchAllCartProducts } from "../../../sqlite/fetchAllCartProducts";

export const createTable = () => createCartTable()

export const addProduct = product => addToCart(product)

export const fetchProduct = () => fetchAllCartProducts()

export const deleteProduct = id => deleteProductFromCart(id)