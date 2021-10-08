import { all, fork, takeEvery, takeLatest } from "@redux-saga/core/effects";
import { productTypes } from "./products/actionTypes";
import { userTypes } from "./user/actionTypes";
import { handleAuthentication } from "./user/sagas/handlers";
import { fetchAllProducts, fetchByCategory, fetchCategories, fetchOneProduct } from "./products/saga/handler"
import { themeTypes } from "./theme/actionTypes";
import { changeTheme } from "./theme/saga/handler";
import { cartTypes } from "./cart/actionTypes";
import { addProductToCart, createCartTable, fetchAllProductsFromCart, deleteProductFromCart } from "./cart/saga/handlers";

function* authenticate() {
    yield takeLatest(userTypes.LOGIN, handleAuthentication)
}



function* fetchProducts() {
    yield takeLatest(productTypes.PRODUCT_FETCH_ALL, fetchAllProducts)
}

function* fetchProductCategories() {
    yield takeLatest(productTypes.PRODUCT_CATEGORY_FETCH, fetchCategories)
}

function* fetchProductsByCategory() {
    yield takeLatest(productTypes.PRODUCT_FETCH_BY_CATEGORY, fetchByCategory)
}

function* fetchProductsById() {
    yield takeLatest(productTypes.PRODUCT_FETCH_ONE, fetchOneProduct)
}



function* changeAppTheme() {
    yield takeLatest(themeTypes.CHANGE_THEME, changeTheme)
}



function* createCart() {
    yield takeLatest(cartTypes.CREATE_TABLE, createCartTable)
}

function* addProduct() {
    yield takeLatest(cartTypes.ADD_PRODUCT_TO_CART, addProductToCart)
}

// function* fetchProductsCart() {
//     yield takeLatest(cartTypes.FETCH_PRODUCTS_FROM_CART, fetchAllProductsFromCart)
// }

function* deleteProduct() {
    yield takeEvery(cartTypes.REMOVE_PRODUCT_FROM_CART, deleteProductFromCart)
}


export function* watcherSaga() {
    yield all([
        // authentication
        fork(authenticate),

        // products
        fork(fetchProducts),
        fork(fetchProductsByCategory),
        fork(fetchProductCategories),
        fork(fetchProductsById),

        //changeAppTheme
        fork(changeAppTheme),


        // cart processes
        fork(createCart),
        fork(addProduct),
        // fork(fetchProductsCart),
        fork(deleteProduct)
    ])
}