<template>
  <q-layout>
    <q-page-container>
      <q-container>
        <q-page padding class="q-gutter-sm">
          <div class="card-content">
            <h4 class="card-title q-my-xs">Footable</h4>
            <div class="table-responsive">
              <q-table
                title="Contact Employee list"
                :rows="rows"
                :columns="columns"
                row-key="no"
                :pagination="pagination"
                class="contact-list"
              >
                <template v-slot:top-right="{ pagination }">
                  <q-btn
                    @click="openAddContactModal"
                    color="primary"
                    icon="add"
                    label="Add New Contact"
                  />
                </template>
                <template v-slot:body="props">
                  <q-tr :props="props">
                    <q-td key="no" :props="props">{{ props.row.no }}</q-td>
                    <q-td key="name" :props="props">
                      <q-chip>
                        <q-avatar>
                          <img
                            src="https://cdn.quasar.dev/img/boy-avatar.png"
                          />
                        </q-avatar>
                        {{ props.row.name }}
                      </q-chip>
                    </q-td>
                    <q-td key="email" :props="props">{{
                      props.row.email
                    }}</q-td>
                    <q-td key="phone" :props="props">{{
                      props.row.phone
                    }}</q-td>
                    <q-td key="role" :props="props">
                      <q-badge
                        rounded
                        color="orange"
                        :label="props.row.designation"
                      />
                    </q-td>
                    <q-td key="age" :props="props">{{ props.row.age }}</q-td>
                    <q-td key="joiningDate" :props="props">{{
                      props.row.joiningDate
                    }}</q-td>
                    <q-td key="salary" :props="props">{{
                      props.row.salary
                    }}</q-td>
                    <q-td key="action" :props="props">
                      <q-btn
                        flat
                        round
                        dense
                        icon="close"
                        @click="removeContact(props.row)"
                      />
                    </q-td>
                  </q-tr>
                </template>
              </q-table>
            </div>
          </div>
          <div>
            <q-table
              :rows="tableData"
              row-key="id"
              :columns="columns"
              :rows-per-page-options="[7]"
              no-data-label="No data available"
            >
              <template v-slot:top-right>
                <q-input
                  v-model="search"
                  debounce="300"
                  hint="Search"
                  dense
                  clearable
                />
              </template>
              <template v-slot:body-cell-delete="props">
                <q-td :props="props">
                  <q-btn
                    flat
                    icon="close"
                    size="sm"
                    @click="deleteRow(props.row)"
                  />
                </q-td>
              </template>
            </q-table>
          </div>
          <q-dialog v-model="isAddContactModalOpen" persistent>
            <q-card>
              <h4 class="text-h6 q-mx-md q-mb-xs">Add New Contact</h4>
              <q-card-section>
                <q-form class="q-mt-xs" @submit="saveContact">
                  <q-input
                    v-model="newContact.name"
                    label="Name"
                    required
                    style="width: 30rem"
                  ></q-input>
                  <q-input
                    v-model="newContact.email"
                    label="Email"
                    type="email"
                    required
                  ></q-input>
                  <q-input
                    v-model="newContact.phone"
                    label="Phone"
                    required
                  ></q-input>
                  <q-input
                    v-model="newContact.designation"
                    label="Designation"
                    required
                  ></q-input>
                  <q-input
                    v-model="newContact.age"
                    label="Age"
                    required
                  ></q-input>
                  <q-input
                    v-model="newContact.date"
                    label="Date"
                    type="date"
                    required
                  />
                  <q-input
                    v-model="newContact.salary"
                    label="Salary"
                    required
                  ></q-input>
                  <q-btn
                    class="q-my-sm"
                    type="submit"
                    color="primary"
                    label="Save"
                  ></q-btn>
                  <q-btn
                    @click="closeAddContactModal"
                    color="secondary"
                    label="Cancel"
                    class="q-mx-sm q-my-sm"
                  ></q-btn>
                </q-form>
              </q-card-section>
            </q-card>
          </q-dialog>
        </q-page>
      </q-container>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        { name: "no", label: "No", align: "center" },
        { name: "name", label: "Name", align: "left" },
        { name: "email", label: "Email", align: "left" },
        { name: "phone", label: "Phone", align: "left" },
        { name: "role", label: "Role", align: "center" },
        { name: "age", label: "Age", align: "center" },
        { name: "joiningDate", label: "Joining date", align: "center" },
        { name: "salary", label: "Salary", align: "center" },
        { name: "action", label: "Action", align: "center" },
      ],
      rows: [
        {
          no: 1,
          name: "Jane Doe",
          email: "Jane@gmail.com",
          phone: "+123 456 789",
          designation: "Designer",
          age: 23,
          joiningDate: "12-10-2014",
          salary: "$1200",
        },
      ],
      pagination: { rowsPerPage: 10 },
      isAddContactModalOpen: false,
      newContact: {
        name: "",
        email: "",
        phone: "",
        designation: "",
        age: "",
        date: "",
        salary: "",
        file: "",
      },
    };
  },
  methods: {
    openAddContactModal() {
      this.isAddContactModalOpen = true;
    },
    closeAddContactModal() {
      this.isAddContactModalOpen = false;
    },
    saveContact() {
      const newContact = {
        no: this.rows.length + 1,
        name: this.newContact.name,
        email: this.newContact.email,
        phone: this.newContact.phone,
        designation: this.newContact.designation,
        age: this.newContact.age,
        joiningDate: this.newContact.date,
        salary: this.newContact.salary,
      };

      this.rows.push(newContact);
      this.closeAddContactModal();
      this.clearNewContact();
    },
    removeContact(contact) {
      const index = this.rows.findIndex((row) => row.no === contact.no);

      if (index !== -1) {
        this.rows.splice(index, 1);
      }
    },
    clearNewContact() {
      this.newContact = {
        name: "",
        email: "",
        phone: "",
        designation: "",
        age: "",
        date: "",
        salary: "",
        file: "",
      };
    },
  },
};
</script>

<style scoped></style>
