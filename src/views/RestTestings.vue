<template>
<div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
        <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
            <span class="text-uppercase page-subtitle">Let's test ALL AUTOMATIC REST GENERATED BACKENDS </span>
            <h3 class="page-title">Data Tables</h3>
        </div>
    </div>
    <!-- Default Light Table -->
    <div class="row">
        <div class="col">
            <div class="card card-small mb-4">
                <div class="card-header border-bottom">
                    <h6 class="m-0">Get {{customers.length}} employees from existing classicmodels SQL table using front end GenericAxiosServices.js + Back end </h6>
                </div>
                <div class="card-body p-0 pb-3 text-center" style="overflow:auto;max-height:400px">
                    <!-- GENERATING TABLE -->
                    <table class="table table-dark mb-0">
                        <thead class="thead-dark">
                            <tr>
                                <th v-for="(key,value) in customers[0]" :key="$index">{{value}} </th>
                            </tr>
                        </thead>
                        <tr v-for="c in customers" :key="$index">
                            <th v-for="(key,value) in c">{{key}} </th>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <!-- Default Dark Table -->
    <div class="row">
        <div class="col">

        </div>
    </div>
</div>
</template>

<script>
import GenericAxiosServices from '@/api-services/GenericAxiosServices';
export default {
    data() {
        return {
            customers: []
        };
    },
    methods: {},
    computed: {},
    created() {
        GenericAxiosServices.getAll("customers").then((response) => {
            console.log(response.data);
            this.customers = response.data
        }).catch((error) => {
            console.log(error.response.data);
        });
    }
};
</script>
