<template>
  <q-layout>
    <q-page-container>
      <q-page padding class="q-gutter-sm">
        <q-card>
          <q-card-section>
            <h5 class="q-mb-md">Validations example</h5>
            <p>
              <a href="http://jqueryvalidation.org/" target="_blank"
                >jQuery Validation</a
              >
              This jQuery plugin makes simple clientside form validation easy,
              whilst still offering plenty of customization options.
            </p>

            <q-form
              @submit="submitForm"
              v-model="formValid"
              class="q-gutter-sm"
            >
              <q-input
                filled
                label="Username *"
                v-model="formData.uname"
                :error="errors.uname"
                lazy-rules
              ></q-input>

              <q-input
                filled
                label="E-Mail *"
                v-model="formData.cemail"
                :error="errors.cemail"
                lazy-rules
                type="email"
              ></q-input>

              <q-input
                filled
                label="Password *"
                v-model="formData.password"
                :error="errors.password"
                lazy-rules
                type="password"
              ></q-input>

              <q-input
                filled
                label="Confirm Password *"
                v-model="formData.cpassword"
                :error="errors.cpassword"
                lazy-rules
                type="password"
              ></q-input>

              <q-input
                filled
                label="URL *"
                v-model="formData.curl"
                :error="errors.curl"
                lazy-rules
                type="url"
              ></q-input>

              <q-select
                filled
                v-model="formData.crole"
                :options="roleOptions"
                label="Role *"
                lazy-rules
              ></q-select>

              <q-input
                filled
                label="Your comment *"
                v-model="formData.ccomment"
                :error="errors.ccomment"
                lazy-rules
              ></q-input>

              <div>
                <h6 class="q-mb-md">Gender *</h6>
                <q-radio
                  v-model="formData.cgender"
                  color="primary"
                  label-color="primary"
                  val="Male"
                  label="Male"
                ></q-radio>
                <q-radio
                  v-model="formData.cgender"
                  color="primary"
                  label-color="primary"
                  val="Female"
                  label="Female"
                ></q-radio>
                <div class="q-mb-md" v-if="errors.cgender">
                  {{ errors.cgender }}
                </div>
              </div>

              <div>
                <q-checkbox
                  v-model="formData.cagree"
                  label="Please agree to our policy"
                  color="primary"
                  :error="errors.cagree"
                  lazy-rules
                ></q-checkbox>
              </div>

              <q-btn
                class="q-mt-md"
                color="primary"
                type="submit"
                :disable="submitting"
              >
                Submit
              </q-btn>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        uname: "",
        cemail: "",
        password: "",
        cpassword: "",
        curl: "",
        crole: "",
        ccomment: "",
        cgender: "",
        cagree: false,
      },
      roleOptions: [
        { label: "Choose your profile", value: "" },
        { label: "Manager", value: "1" },
        { label: "Developer", value: "2" },
        { label: "Business", value: "3" },
      ],
      errors: {
        uname: "",
        cemail: "",
        password: "",
        cpassword: "",
        curl: "",
        crole: "",
        ccomment: "",
        cgender: "",
        cagree: "",
      },
      formValid: false,
      submitting: false,
    };
  },
  methods: {
    submitForm() {
      this.validateForm();
      if (this.formValid) {
        this.submitting = true;
        setTimeout(() => {
          this.submitting = false;
          this.clearForm();
          alert("Form submitted successfully!");
        }, 2000);
      } else {
        alert("Please correct the form errors before submitting.");
      }
    },
    validateForm() {
      this.errors = {};

      if (!this.formData.uname) {
        this.errors.uname = "Username is required.";
      }

      if (!this.formData.cemail) {
        this.errors.cemail = "E-Mail is required.";
      } else if (!/\S+@\S+\.\S+/.test(this.formData.cemail)) {
        this.errors.cemail = "E-Mail is not valid.";
      }

      if (!this.formData.password) {
        this.errors.password = "Password is required.";
      } else if (this.formData.password.length < 6) {
        this.errors.password = "Password must be at least 6 characters.";
      }

      if (this.formData.password !== this.formData.cpassword) {
        this.errors.cpassword = "Passwords do not match.";
      }

      if (!this.formData.curl) {
        this.errors.curl = "URL is required.";
      } else if (!/^https?:\/\/\S+$/.test(this.formData.curl)) {
        this.errors.curl = "URL is not valid.";
      }

      if (!this.formData.crole) {
        this.errors.crole = "Role is required.";
      }

      if (!this.formData.ccomment) {
        this.errors.ccomment = "Comment is required.";
      }

      if (!this.formData.cgender) {
        this.errors.cgender = "Gender is required.";
      }

      if (!this.formData.cagree) {
        this.errors.cagree = "You must agree to the policy.";
      }

      // Check if any errors are present
      for (const key in this.errors) {
        if (this.errors[key]) {
          this.formValid = false;
          return;
        }
      }

      this.formValid = true;
    },
    clearForm() {
      this.formData = {
        uname: "",
        cemail: "",
        password: "",
        cpassword: "",
        curl: "",
        crole: "",
        ccomment: "",
        cgender: "",
        cagree: false,
      };
      this.errors = {};
      this.formValid = false;
    },
  },
};
</script>
