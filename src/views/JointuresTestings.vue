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
                <h6 class="m-0">Jointure Employee + The office he belongs to . </h6>
            </d-card-header>
            <d-card-body style="overflow:auto;max-width:100%;max-height:65vh;min-height:65vh ">
                {{employees}}
            </d-card-body>
        </d-card>
    </d-col>
</div>
</template>

<script>
import GenericAxiosServices from '@/api-services/GenericAxiosServices';

export default {
    data() {
        return {
            employees: []
        };
    },
    components: {

    },
    methods: {

    },
    computed: {

    },
    created() {
        GenericAxiosServices.getAll("employees", {
            "params":{"id": 2},"include":{"name":"offices"}
        }).then((response) => {
            this.employees = response.data;
        }).catch((error) => {
            console.log(error.response.data);
        });
    }

};
</script>
