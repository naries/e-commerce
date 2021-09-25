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

export let login_post = body => api.post('/auth/login', body).then(response => response);