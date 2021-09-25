import { login_post } from "../../../RestApi";

export function authenticate(data) {
    const {username, password} = data;
    return login_post({username, password})
}