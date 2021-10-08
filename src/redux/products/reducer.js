import { productTypes } from "./actionTypes"

const initialState = {
    products: {
        isLoading: false,
        loaded: false,
        data: [],
        error: null,
    },
    categories: {
        isLoading: false,
        loaded: false,
        data: ['All'],
        error: null,
    },
    one_product: {
        isLoading: false,
        loaded: false,
        data: [],
        error: null,
    },
    category: 'All'
}

const productReducer = (state = initialState, action) => {
    switch ( action.type ) {
        case productTypes.PRODUCT_FETCH_ALL:
            return { ...state, products: { isLoading: true, loaded: false, data: [], error: null } } 
        case productTypes.PRODUCT_FETCH_ALL_SUCCESS:
            return { ...state, products: { isLoading: false, loaded: true, data: action.data, error: null } }
        case productTypes.PRODUCT_FETCH_ALL_FAILED:
            return { ...state, products: { isLoading: false, loaded: true, data: [], error: action.error } }
        case productTypes.PRODUCT_FETCH_ALL_RESET:
            return { ...state, products: { isLoading: false, loaded: false, data: [], error: null } }

        case productTypes.PRODUCT_CATEGORY_FETCH:
            return { ...state, categories: {isLoading: true, loaded: false, data: ['All'], error: null }}
        case productTypes.PRODUCT_CATEGORY_FETCH_SUCCESS:
            return { ...state, categories: {isLoading: false, loaded: true, data: ['All', ...action.data], error: null }}
        case productTypes.PRODUCT_CATEGORY_FETCH_FAILED:
            return { ...state, categories: {isLoading: false, loaded: true, data: ['All'], error: action.error }}
        case productTypes.PRODUCT_CATEGORY_FETCH_RESET:
            return { ...state, categories: {isLoading: false, loaded: false, data: ['All'], error: null }}

        case productTypes.PRODUCT_FETCH_ONE:
            return { ...state, one_product: {isLoading: true, loaded: false, data: [], error: null }}
        case productTypes.PRODUCT_FETCH_ONE_SUCCESS:
            return { ...state, one_product: {isLoading: false, loaded: true, data: action.data, error: null }}
        case productTypes.PRODUCT_FETCH_ONE_FAILED:
            return { ...state, one_product: {isLoading: false, loaded: true, data: [], error: action.error }}
        case productTypes.PRODUCT_FETCH_ONE_RESET:
            return { ...state, one_product: {isLoading: false, loaded: false, data: [], error: null }}

        case productTypes.PRODUCT_FETCH_BY_CATEGORY:
            return { ...state, products: { isLoading: true, loaded: false, data: [], error: null }}
        case productTypes.PRODUCT_FETCH_BY_CATEGORY_SUCCESS:
            return { ...state, products: { isLoading: false, loaded: true, data: action.data, error: null }}
        case productTypes.PRODUCT_FETCH_BY_CATEGORY_FAILED:
            return { ...state, products: { isLoading: false, loaded: true, data: [], error: action.error }}
        case productTypes.PRODUCT_FETCH_BY_CATEGORY_RESET:
            return { ...state, products: { isLoading: false, loaded: false, data: [], error: null }}
        case productTypes.PRODUCT_UPDATE_CATEGORY:
            return { ...state, category: action.category }

        default:
            return { ...state }
    }
}

export default productReducer