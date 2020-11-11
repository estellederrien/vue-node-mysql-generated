<template>
<div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
        <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
            <span class="text-uppercase page-subtitle">Let's test ALL AUTOMATIC REST GENERATED BACKENDS </span>
            <h3 class="page-title">Data Tables</h3>
        </div>
    </div>
    <crudgenerictable :table_name="'offices'" :disabled_inputs='["id","created_at","deleted_at","updated_at"]'></crudgenerictable>
    <crudgenerictable :table_name="'customers'" :disabled_inputs='["id","created_at","deleted_at","updated_at"]'></crudgenerictable>
    <crudgenerictable :table_name="'employees'" :disabled_inputs='["id","created_at","deleted_at","updated_at"]'></crudgenerictable>
    <!-- <crudgenerictable :table_name="'products'" :disabled_inputs='["id","created_at","deleted_at","updated_at"]'></crudgenerictable> -->
</div>
</template>

<script>
import GenericAxiosServices from '@/api-services/GenericAxiosServices';
// PERSONAL COMPONENTS
import crudgenerictable from "./CrudGenericTable.vue";

export default {
    data() {
        return {

        };
    },
    components: {
        crudgenerictable
    },
    methods: {

    },
    computed: {

    },
    created() {

    }

};
// GET QUERY USING GENERIC CRUD AND PARAMS EXAMPLE
/*    GenericAxiosServices.getAll("employees", {
         "id": 2
     }).then((response) => {
         console.log(response.data);
         this.employees = response.data
     }).catch((error) => {
         console.log(error.response.data);
     }); */
</script>
