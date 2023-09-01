<template>
  <q-layout>
    <q-page-container>
      <q-container>
        <q-page padding class="q-gutter-sm">
          <div class="container-fluid">
            <div>
              <q-card class="shadow-up-4">
                <div class="q-pa-md">
                  <q-table
                    color="secondary"
                    :rows="dogs"
                    :columns="columns"
                    row-key="name"
                    :loading="loading"
                    v-model:pagination="pagination"
                    :rows-per-page-options="[1, 3, 5, 10, 15, 0]"
                    @request="handelRequest"
                  >
                    <template #loading>
                      <q-inner-loading showing color="secondary" />
                    </template>
                  </q-table>
                </div>
              </q-card>
            </div>
          </div>
        </q-page>
      </q-container>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  setup() {
    const loading = ref(true);
    const dogs = ref([]);
    const pagination = ref({
      page: 1,
      rowsPerPage: 3,
    });

    const columns = [
      {
        name: "name",
        label: "Name",
        field: "name",
        align: "left",
      },
      {
        name: "age",
        label: "Age",
        field: "age",
        align: "center",
      },
      {
        name: "email",
        label: "Email",
        field: "email",
        align: "left",
      },
    ];

    const fetchDogs = (page = 0) => {
      axios
        .get("https://table.quasarcomponents.com/dogs")
        .then((response) => {
          dogs.value = response.data.data;
          // const meta = response.data.meta;
          // pagination.value.page = meta.current_page;
          // pagination.value.rowsNumber = meta.total;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        })
        .finally(() => {
          loading.value = false;
        });
    };

    const handelRequest = (props) => {
      fetchDogs(props.pagination.page);
    };

    fetchDogs(); // Fetch initial data
    return {
      handelRequest,
      pagination,
      loading,
      dogs,
      columns,
    };
  },
};
</script>




<!-- {
  params: { page: page, per_page: pagination.value.rowsPerPage },
} -->
