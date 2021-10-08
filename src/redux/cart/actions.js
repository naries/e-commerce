import { cartTypes } from "./actionTypes";

export const cartActions = {
    create_table: () => ({ type: cartTypes.CREATE_TABLE }),

    fetch_products_from_cart: () => ({ type: cartTypes.FETCH_PRODUCTS_FROM_CART }),  
    fetch_products_from_cart_success: data => ({ type: cartTypes.FETCH_PRODUCTS_FROM_CART_SUCCESS, data }),
    fetch_products_from_cart_failed: () => ({ type: cartTypes.FETCH_PRODUCTS_FROM_CART_FAILED }),

    add_product_to_cart: product => ({ type: cartTypes.ADD_PRODUCT_TO_CART, product}),
    add_product_to_cart_success: product => ({ type: cartTypes.ADD_PRODUCT_TO_CART_SUCCESS, product }),
    add_product_to_cart_failed: () => ({ type: cartTypes.ADD_PRODUCT_TO_CART_FAILED }),

    remove_product_from_cart: product_id => ({ type: cartTypes.REMOVE_PRODUCT_FROM_CART, product_id }),
    remove_product_from_cart_failed: () => ({ type: cartTypes.REMOVE_PRODUCT_FROM_CART_FAILED }),
    remove_product_from_cart_success: product_id => ({ type: cartTypes.REMOVE_PRODUCT_FROM_CART_SUCCESS, product_id })
}
