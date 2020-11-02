// GENERIC REST AXIOS SERVICE

import Axios from 'axios';

const pre = "/api/";

export default {
    getAll(collection) {
        return Axios.get(pre + collection);
    },
    get(collection, id) {
        return Axios.get(pre + collection + "/" + id);
    },
    create(collection, data) {
        return Axios.post(pre + collection, data);
    },
    update(collection, id, data) {
        return Axios.put(pre + collection + "/" + id, data);
    },
    delete(collection, id) {
        return Axios.delete(pre + collection + "/" + id);
    }
};