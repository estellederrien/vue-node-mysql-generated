// https://bezkoder.com/jwt-vue-vuex-authentication/
export default {
    getHeader() {
        let token = localStorage.getItem('token');

        if (token) {
            // for Node.js Express back-end
            return {
                'Access-Control-Allow-Headers': 'x-access-token',
                'x-access-token': token
            };
        } else {
            return {};
        }
    }
}