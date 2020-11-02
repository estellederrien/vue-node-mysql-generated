// ==========================================================
// VUEX DATA STORE WITH VuexPersistence PLUGIN - SHARING DATA BETWEEN COMPONENTS ! - VUEX MAGASIN DE DATA - PARTAGER DES DATAS ENTRE LES COMPONENTS 
// ==========================================================

// ==========================================================
// INFORMATION
// HOW TO USE IN COMPONENTS - COMMENT UTILISER CA DANS LES COMPONENTS  : 
// SET USER ( WHEN YOU LOG IN): this.$store.commit('setUser', response.data) 
// GET USER : this.user = this.$store.getters.user 
// DELETE USER (WHEN YOU LOG OUT ): this.$store.commit('deleteUser') 
// START ACTION (LOAD  DATA FROM DB) : store.dispatch('increment')
// ==========================================================

// ==========================================================
// IMPORT NODE MODULES
// ==========================================================
import axios from 'axios';
import VuexPersistence from 'vuex-persist'

// ==========================================================
// Initialisations Variables
// ==========================================================
const resource_uri = "http://localhost:3000/users/";
const anonymous = { _id: "anonymous", nom: "anonymous", prenom: "anonymous", phone: "", email: "anonymous@anonymous.fr", password: "", img: "", filenames: [] };
const init_users_filters = {
    ageValues: [18, 60],
    role: "",
    jobs: [],
    users: [],
    groups: []
};
// ==========================================================
// States
// ==========================================================
const state = {
    user: anonymous,
    logged: false,
    usersFilters: init_users_filters
};

// ==========================================================
// Getters
// ==========================================================
const getters = {
    user: (state) => {
        return state.user;
    },
    usersFilters: (state) => {
        return state.usersFilters;

    }
};

// ==========================================================
// Actions ( For Dbs queries)
// ==========================================================
const actions = {
    async fetchTasks({ commit }) {
        const response = await axios.get(resource_uri);
        commit('setTasks', response.data);
    },
    async addTask({ commit }, task) {
        const response = await axios.post(resource_uri, task);
        commit('newTask', response.data);
    },
    async updateTask({ commit }, task) {
        const response = await axios.put(`${resource_uri}${task.id}`, task);
        commit('updTask', response.data);
    },
    async removeTask({ commit }, task) {
        const response = await axios.delete(`${resource_uri}${task.id}`);
        commit('deleteTask', task);
    }
};

// ==========================================================
// Mutations
// ==========================================================
const mutations = {
    setUser(state, user) {
        state.user = user;
        state.logged = true;
    },
    deleteUser(state, user) {
        localStorage.removeItem("user");
        state.logged = false;
        state.user = anonymous;
    },
    setUsersFilters(state, usersFilters) {
        state.usersFilters = usersFilters;
    },
    deleteUsersFilters(state, userFilters) {
        localStorage.removeItem("usersFilters");
        state.userFilters = {
            ageValues: [18, 60],
            role: "",
            jobs: [],
            users: [],
            groups: []
        }
    }
};

/* const vuexLocal = new VuexPersistence({
    storage: window.localStorage
}) */

export default {
    state,
    getters,
    actions,
    mutations,
    plugins: [new VuexPersistence().plugin]
}