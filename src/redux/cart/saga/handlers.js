import { call, put } from "@redux-saga/core/effects"
import { cartActions } from "../actions";
import { addProduct, createTable, deleteProduct, fetchProduct } from "./cartProcess";

export function* createCartTable() {
    try {
        let response = yield call(createTable)
        if(response) {
            yield put(cartActions.create_table())
        }
    } catch (error) {
        // ...
    }
}

export function* addProductToCart({ product }) {
    try{
        yield call(addProduct, product)
        yield put(cartActions.add_product_to_cart_success(product))
    } catch(e) {
        yield put(cartActions.add_product_to_cart_failed())
    }
}

export function* fetchAllProductsFromCart() {
    try {
        let response = yield call(fetchProduct)
        // console.log(response);
        yield put(cartActions.fetch_products_from_cart_success(response))
    } catch(err) {
        yield put(cartActions.fetch_products_from_cart_failed({message: 'Something went wrong'}))
    }
}

export function* deleteProductFromCart({ product_id }) {
    try{
        yield call(deleteProduct, product_id)
        yield put(cartActions.remove_product_from_cart_success(product_id))
    } catch(err) {
        // yield put(cartActions.remove_product_from_cart_failed())
    }
}