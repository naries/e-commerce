const ReactNativeCodeApi = {
    login_api: async (email, password) => {
        let body = new FormData();
        body.append('username', email);
        body.append('password', password);

        return await login_post(body);
    }
}

export default ReactNativeCodeApi