<template>
  <q-layout>
    <q-page-container>
      <q-page padding class="q-gutter-sm">
        <div class="col s12">
          <q-card>
            <q-card-section>
              <h5 class="card-title activator">Form Repeater</h5>
              <q-form
                class="h-form b-form"
                @submit.prevent="submitForm"
                style="margin-top: -5%"
              >
                <div class="form-body">
                  <q-card-section>
                    <h6 class="font-medium">Whole Form Repeater</h6>
                    <div
                      class="row q-gutter-sm q-mt-sm"
                      v-for="(formItem, index) in formItems"
                      :key="index"
                    >
                      <div class="col col-2">
                        <q-input v-model="formItem.name" label="Name" />
                      </div>
                      <div class="col col-2">
                        <q-input v-model="formItem.email" label="Email" />
                      </div>
                      <div class="col col-2">
                        <q-input v-model="formItem.password" label="Password" />
                      </div>
                      <div class="col col-2">
                        <q-input v-model="formItem.message" label="Message" />
                      </div>
                      <q-btn type="submit" color="primary">Submit</q-btn>
                      <q-btn @click="removeFormItem(index)" color="negative"
                        >Delete</q-btn
                      >
                    </div>
                    <q-separator class="q-mt-lg" color="blue" />
                    <q-btn
                      class="q-mt-sm"
                      type="button"
                      @click="addFormItem"
                      color="primary"
                      >Add</q-btn
                    >
                  </q-card-section>
                </div>
              </q-form>
            </q-card-section>
          </q-card>
          <div
            class="row wrap justify-between items-start content-between q-mt-sm q-mx-xs"
          >
            <div class="col-md-6 q-col-gutter-xs q-mt-md">
              <q-card class="shadow-up-6">
                <q-card-section>
                  <h5 class="q-mb-md q-mt-xs">Form Control Repeater</h5>
                  <div class="col col-11">
                    <q-input label="Name" />
                  </div>
                  <div
                    class="row q-gutter-sm q-mt-sm"
                    v-for="(email, index) in emails"
                    :key="index"
                  >
                    <div class="col col-6">
                      <q-input v-model="email.value" label="Email" />
                    </div>
                    <q-btn
                      class="q-mt-sm"
                      type="button"
                      @click="removeFormEmail(index)"
                      color="negative"
                      icon="close"
                    />
                  </div>
                  <q-btn
                    class="q-mt-sm"
                    type="button"
                    @click="addFormEmail"
                    color="primary"
                    >Add Email</q-btn
                  >
                  <div class="col col-11">
                    <q-input label="Designation" />
                  </div>
                  <div class="col col-11">
                    <q-input label="About" />
                  </div>
                  <div class="col col-6"></div>
                  <q-space />
                  <q-btn
                    class="q-mt-sm"
                    style="margin-left: 82%"
                    type="submit"
                    color="primary"
                    >Submit</q-btn
                  >
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      formItems: [
        // Initial form item
        { name: "", email: "", password: "", message: "" },
        { Email: "" },
      ],
      emails: [{ value: "" }],
    };
  },
  methods: {
    submitForm() {
      if (this.validateForm()) {
        const formData = this.formItems.map((item) => {
          return {
            name: item.name,
            email: item.email,
            password: item.password,
            message: item.message,
          };
        });
        console.log("Form data to be submitted:", formData);
        this.formItems = [];
      }
    },
    validateForm() {
      let isValid = true;

      this.formItems.forEach((formItem, index) => {
        if (
          !formItem.name ||
          !formItem.email ||
          !formItem.password ||
          !formItem.message
        ) {
          // Mark the field as invalid
          formItem.isValid = false;
          isValid = false;
        } else {
          formItem.isValid = true;
        }
      });

      return isValid;
    },
    submitForm() {
      if (this.validateForm()) {
        const formData = this.formItems.map((item) => {
          return {
            name: item.name,
            email: item.email,
            password: item.password,
            message: item.message,
          };
        });
        console.log("Form data to be submitted:", formData);
        this.formItems = [];
      }
    },
    validateForm() {
      let isValid = true;
      this.formItems.forEach((formItem, index) => {
        if (
          !formItem.name ||
          !formItem.email ||
          !formItem.password ||
          !formItem.message
        ) {
          // Mark the field as invalid
          formItem.isValid = false;
          isValid = false;
        } else {
          formItem.isValid = true;
        }
      });
      return isValid;
    },
    addFormItem() {
      this.formItems.push({ name: "", email: "", password: "", message: "" });
    },
    addFormEmail() {
      this.emails.push({ value: "" });
    },
    removeFormEmail(index) {
      this.emails.splice(index, 1);
    },
    removeFormItem(index) {
      this.formItems.splice(index, 1);
    },
  },
};
</script>
