<template>
<div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
        <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
            <span class="text-uppercase page-subtitle">Let's test SEQUELIZE JOINTURES !</span>
            <h3 class="page-title">Sequelize jointures</h3>
        </div>
    </div>

    <d-col lg="12" class="mb-4">
        <d-card class="card-small mb-4">
            <!-- Form Example -->
            <d-card-header class="border-bottom">
                <h6 class="m-0">Jointure On Employee 2 + The office he belongs to . </h6>
            </d-card-header>
            <d-card-body>
                {{employees}}
            </d-card-body>
        </d-card>
    </d-col>

    <d-col lg="12" class="mb-4">
        <d-card class="card-small mb-4">
            <!-- Form Example -->
            <d-card-header class="border-bottom">
                <h6 class="m-0">Jointure On Employee 4 + The office he belongs to . </h6>
            </d-card-header>
            <d-card-body>
                {{employees2}}
            </d-card-body>
        </d-card>
    </d-col>
</div>
</template>

<script>
import GenericAxiosServices from '@/api-services/GenericAxiosServices';
import axios from 'axios';
import qs from 'qs';
export default {
    data() {
        return {
            employees: [],
            employees2: []
        };
    },
    components: {

    },
    methods: {

    },
    computed: {

    },
    created() {
        // JOINTURE EXAMPLE 1
        axios.get("/api/employees", {
            "params": {
                where: {
                    id: 2
                },
                include: [{
                    model: "offices"
                }]
            },
            paramsSerializer: params => {
                return qs.stringify(params)
            }
        }).then((response) => {
            this.employees = response.data;
        }).catch((error) => {
            console.log(error.response.data);
        });

        // JOINTURE EXAMPLE 2
        axios.get("/api/employees", {
            "params": {
                attributes: ['lastName', 'firstName'],
                where: {
                    id: 4
                }
            },
            paramsSerializer: params => {
                return qs.stringify(params)
            }
        }).then((response) => {
            this.employees2 = response.data;
        }).catch((error) => {
            console.log(error.response.data);
        });

    }

};
</script>

<style>
.d-card-body {
    overflow: auto;
    max-width: 100%;
    max-height: 25vh;
    min-height: 25vh
}
</style>
