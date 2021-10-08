import { call, put } from "@redux-saga/core/effects"
import { productActions } from "../action"
import { productByCategoryFetch, productCategoriesFetch, productFetchAll, productOneFetch } from "./request"

export function* fetchAllProducts() {
    try {
        const response = yield call(productFetchAll)
        console.log('now here');
        yield put(productActions.product_fetch_all_success(response.data))
    } catch (error) {
        yield put(productActions.product_fetch_all_failed(error))
    }
}


export function* fetchCategories() {
    try {
        const response = yield call(productCategoriesFetch)
        yield put(productActions.product_category_fetch_success(response.data))
    } catch (error) {
        yield put(productActions.product_category_fetch_failed(error))
    }
}

export function* fetchOneProduct(action) {
    try {
        const response = yield call(productOneFetch, action.id)
        yield put(productActions.product_fetch_one_success(response.data))
    } catch (error) {
        yield put(productActions.product_fetch_one_failed(error))
    }
}

export function* fetchByCategory(action) {
    try {
        const response = yield call(productByCategoryFetch, action.category)
        yield put(productActions.product_fetch_by_category_success(response.data))
    } catch (error) {
        yield put(productActions.product_fetch_by_category_failed(error))
    }
}