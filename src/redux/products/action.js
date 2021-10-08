import { productTypes } from "./actionTypes";

export const productActions = {
    product_fetch_all: () => ({ type: productTypes.PRODUCT_FETCH_ALL}),
    product_fetch_all_success: data => ({ type: productTypes.PRODUCT_FETCH_ALL_SUCCESS, data }),
    product_fetch_all_failed: error => ({ type: productTypes.PRODUCT_FETCH_ALL_FAILED, error }),
    product_fetch_all_reset: () => ({ type: productTypes.PRODUCT_FETCH_ALL_RESET }),

    product_category_fetch: () => ({ type: productTypes.PRODUCT_CATEGORY_FETCH }),
    product_category_fetch_success: data => ({ type: productTypes.PRODUCT_CATEGORY_FETCH_SUCCESS, data }),
    product_category_fetch_failed: error => ({ type: productTypes.PRODUCT_CATEGORY_FETCH_FAILED, error }),
    product_category_fetch_reset: () => ({ type: productTypes.PRODUCT_CATEGORY_FETCH_RESET }),

    product_fetch_one: id => ({ type: productTypes.PRODUCT_FETCH_ONE, id }),
    product_fetch_one_success: data => ({ type: productTypes.PRODUCT_FETCH_ONE_SUCCESS, data }),
    product_fetch_one_failed: error => ({ type: productTypes.PRODUCT_FETCH_ONE_FAILED, error }),
    product_fetch_one_reset: () => ({ type: productTypes.PRODUCT_FETCH_ONE_RESET }),

    product_fetch_by_category: category => ({ type: productTypes.PRODUCT_FETCH_BY_CATEGORY, category }),
    product_fetch_by_category_success: data => ({ type: productTypes.PRODUCT_FETCH_BY_CATEGORY_SUCCESS, data }),
    product_fetch_by_category_failed: error => ({ type: productTypes.PRODUCT_FETCH_BY_CATEGORY_FAILED, error }),
    product_fetch_by_category_reset: () => ({ type: productTypes.PRODUCT_FETCH_BY_CATEGORY_RESET }),
    product_update_category: category => ({ type: productTypes.PRODUCT_UPDATE_CATEGORY, category })
}