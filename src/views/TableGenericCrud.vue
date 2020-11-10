<template>
<div>
    <b-button v-b-modal="'my-modal-'+table_name" @click="create()">Add</b-button><br><br>
    <b-modal @ok="save()" :id="'my-modal-'+table_name" size="lg" :title="table_name" :scrollable="true">
        <b-form-group label-cols="6" label-cols-lg="4" :label="value" label-for="input-default" v-for="(key,value) in table_content[0]">
            <b-form-input v-if="!disabled_inputs.includes(value)" placeholder="Enter value" v-model="row[value]"></b-form-input>
            <b-form-input v-if="disabled_inputs.includes(value)" disabled v-model="row[value]"></b-form-input>
        </b-form-group>
    </b-modal>
    <div class="tableFixHead">
        <table class="table table-bordered table-hover" >
            <thead>
                <tr>
                    <th v-for="(key,value,index) in table_content[0]">{{value}} </th>
                    <th> Manage </th>
                </tr>
            </thead>
            <tr v-for="e in table_content">
                <td v-for="(key,value,index) in e">{{key}} </td>
                <td>
                    <b-button class="float-left" v-b-modal="'my-modal-'+table_name" @click="update(e)">
                        <b-icon icon="pencil-square" aria-hidden="true"></b-icon>
                    </b-button>
                    <b-button class="float-right" @click="del(e.id)" variant="danger">
                        <b-icon icon="trash" aria-hidden="true"></b-icon>
                    </b-button>
                </td>
            </tr>
        </table>
    </div>
</div>
</template>
<script>
import Vue from 'vue';
import GenericAxiosServices from '@/api-services/GenericAxiosServices';
import SmartTable from "vuejs-smart-table";
Vue.use(SmartTable);
import moment from 'moment-timezone';
export default {
    props: ['table_name', 'disabled_inputs'],
    data() {
        return {
            table_content: [],
            row: {},
        };
    },
    methods: {
        create: function () {
            this.update_mode = false;
            this.row = {};
        },
        read: function () {
            GenericAxiosServices.getAll(this.table_name).then((response) => {
                this.table_content = response.data;
            }).catch((error) => {
                console.log(error.response.data);
            });
        },
        update: function (e) {
            this.row = e;
            this.$bvModal.show("my-modal");
            this.update_mode = true;
        },
        del: function (id) {
            this.$bvModal.msgBoxConfirm('Are you sure?')
                .then(value => {
                    this.boxOne = value;
                    if (value) {
                        GenericAxiosServices.delete(this.table_name, id).then((response) => {
                            this.$toast("Deleted", {
                                timeout: 2000
                            });
                            this.read()
                        }).catch((error) => {
                            console.log(error.response.data);
                        });
                    }
                })
                .catch(err => {
                    // An error occurred
                })
        },
        save() {
            if (this.update_mode) {
                GenericAxiosServices.update(this.table_name, this.table_content.id, this.row).then((response) => {
                    console.log(response.data);
                    this.read()
                    this.$toast("Saved", {
                        timeout: 2000
                    });
                }).catch((error) => {
                    console.log(error.response.data);
                });
            } else {
                GenericAxiosServices.create(this.table_name, this.row).then((response) => {
                    console.log(response.data);
                    this.$toast("Saved", {
                        timeout: 2000
                    });
                    this.read()
                }).catch((error) => {
                    console.log(error.response.data);
                });
            }
        }
    },
    computed: {},
    created() {
        this.read();
    }
};
</script>
<style>
.my-grid-class {
    height: 400px;
}
.vt-sort:before {
    font-family: FontAwesome;
    padding-right: 0.5em;
    width: 1.28571429em;
    display: inline-block;
    text-align: center;
}
.vt-sortable:before {
    content: "\f0dc";
}
.vt-asc:before {
    content: "\f160";
}
.vt-desc:before {
    content: "\f161";
}
.tableFixHead {
    overflow-y: auto;
    height: 80%;
}
.tableFixHead thead th {
    position: sticky;
    top: 0;
}
/* Just common table stuff. Really. */
table {
    border-collapse: collapse;
    width: 100%;
}
th,
td {
    padding: 8px 16px;
}
th {
    background: #eee;
}
.modal-body {
    padding: 1.875rem 2.1875rem;
    background-color: #f4f4f4;
}
</style>
