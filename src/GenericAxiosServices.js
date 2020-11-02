// GENERIC REST AXIOS SERVICE

import Axios from 'axios';

export default {
    getAll(collection) {
        return Axios.get(collection);
    },
    get(collection, id) {
        return Axios.get(collection + "/" + id);
    },
    create(collection, data) {
        return Axios.post(collection, data);
    },
    update(collection, id, data) {
        return Axios.put(collection + "/" + id, data);
    },
    delete(collection, id) {
        return Axios.delete(collection + "/" + id);
    }
};