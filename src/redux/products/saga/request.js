import { product_by_category, product_by_id, product_categories, product_list } from "../../../RestApi";

export function productFetchAll() {
    return product_list()
}

export function productCategoriesFetch() {
    return product_categories()
}

export function productOneFetch(id) {
    return product_by_id(id)
}

export function productByCategoryFetch(category) {
    return product_by_category(category)
}