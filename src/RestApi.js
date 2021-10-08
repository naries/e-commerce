import { create } from 'apisauce'
import { Config } from './common'
const ReactNativeCodeApi = Config.ReactNativeCode;
var baseURL = ReactNativeCodeApi.server_url

// api definition
const api = create({
    baseURL,
    headers: {
        'Access-Control-Allow-Origin': "*"
    },
})

export let login_post = body => api.post('/auth/login', body).then(response => response)

export let product_list = () => api.get('/products').then(response => response)

export let product_categories = () => api.get('products/categories').then(response => response);

export let product_by_category = category => api.get(`/products/category/${category}`).then(response => response)

export let product_by_id = id => api.get(`/products/${id}`).then(response => response);