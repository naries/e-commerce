import { cartTypes } from './actionTypes'

const initialState = {
    data: [],
    count: 0,
    isLoading: false,
    loaded: false,
    error: null
}

export const cartReducer = (state=initialState, action) => {
    switch( action.type ) {
        case cartTypes.FETCH_PRODUCTS_FROM_CART:
            return { ...state, isLoading: true, loaded: false, count: state.data.length }
        case cartTypes.FETCH_PRODUCTS_FROM_CART_SUCCESS: 
            return { ...state, data: action.data, count: action.data.length, isLoading: false, loaded: true, error: null}
        case cartTypes.FETCH_PRODUCTS_FROM_CART_FAILED:
            return { ...state, data: [], error: {message: "We couldn't fetch cart!"}, isLoading: false, loaded: true }

        case cartTypes.ADD_PRODUCT_TO_CART: 
            return { ...state, isLoading: true, loaded: false }
        case cartTypes.ADD_PRODUCT_TO_CART_FAILED:
            return { ...state, isLoading: false, loaded: true, error: "We could not add product to cart"}
        case cartTypes.ADD_PRODUCT_TO_CART_SUCCESS:
            let { product } = action
            configuredProduct = {product_id: product.id, product_name: product.name, price: product.price, image: product.image}
            return { ...state, isLoading: false, loaded: true, error: null, data: [...state.data, configuredProduct], count: state.data.length }

        case cartTypes.REMOVE_PRODUCT_FROM_CART:
            return { ...state, isLoading: true, loaded: false }
        case cartTypes.REMOVE_PRODUCT_FROM_CART_FAILED:
            return { ...state, isLoading: false, loaded: true, error: "Something went wrong, Try again!"}
        case cartTypes.REMOVE_PRODUCT_FROM_CART_SUCCESS:
            let x = state.data.filter(d => d.product_id !== action.product_id)
            return { ...state, isLoading: false, loaded: true, error: null, data: [...x], count: state.count - 1 }

        default:
            return state
    }
}