<template>
  <q-layout>
    <q-page-container>
      <q-container>
        <q-page padding class="q-gutter-sm">
          <div class="container-fluid">
            <div
              class="row wrap justify-between items-start content-between q-mt-sm q-mx-xs"
            >
              <div class="col-md-6 col-xs-12 q-col-gutter-xs wrap q-mt-md">
                <q-card>
                  <q-card-section>
                    <h5 class="card-title activator q-mt-sm">Basic Form</h5>
                    <q-form @submit="submitForm">
                      <div class="row">
                        <div class="col-md-12">
                          <q-input v-model="name" label="Name" />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <q-input v-model="email" label="Email" type="email" />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <q-input
                            v-model="password"
                            label="Password"
                            type="password"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <q-input
                            v-model="message"
                            label="Message"
                            type="textarea"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12 q-mt-sm">
                          <q-btn
                            color="cyan"
                            class="q-mb-md"
                            @click="submitForm"
                            label="Submit"
                          />
                        </div>
                      </div>
                    </q-form>
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-md-6 col-xs-12 q-col-gutter-xs wrap q-mt-md">
                <q-card>
                  <q-card-section>
                    <h5 class="card-title activator q-mt-sm">
                      Form with placeholder
                    </h5>
                    <q-form @submit="submitForm">
                      <div class="row">
                        <div class="col-md-12">
                          <q-input
                            v-model="name"
                            label="Name"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <q-input
                            v-model="email"
                            label="Email"
                            type="email"
                            placeholder="john@domainname.com"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <q-input
                            v-model="password"
                            label="Password"
                            type="password"
                            placeholder="YourPassword"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <q-input
                            v-model="message"
                            label="Message"
                            type="textarea"
                            placeholder="Oh WoW! Let me check this one too."
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12 q-mt-sm">
                          <q-btn
                            color="cyan"
                            class="q-mb-md"
                            @click="submitForm"
                            label="Submit"
                          />
                        </div>
                      </div>
                    </q-form>
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-md-6 col-xs-12 q-col-gutter-xs wrap q-mt-md">
                <q-card>
                  <q-card-section>
                    <h5 class="card-title activator q-mt-sm">
                      Form with icon<i
                        class="material-icons right tooltipped"
                        data-position="left"
                        data-delay="50"
                        data-tooltip="Get Code"
                        >more_vert</i
                      >
                    </h5>
                    <q-form @submit="submitForm">
                      <div class="row">
                        <div class="col-md-12">
                          <q-input
                            color="purple-12"
                            v-model="name"
                            label="Name"
                          >
                            <template v-slot:prepend>
                              <q-icon name="account_circle" />
                            </template>
                          </q-input>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <q-input
                            color="purple-12"
                            v-model="email"
                            label="Email"
                            type="email"
                          >
                            <template v-slot:prepend>
                              <q-icon name="email" />
                            </template>
                          </q-input>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <q-input
                            color="purple-12"
                            v-model="password"
                            label="Password"
                            type="password"
                          >
                            <template v-slot:prepend>
                              <q-icon name="lock_outline" />
                            </template>
                          </q-input>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <q-input
                            color="purple-12"
                            v-model="message"
                            label="message"
                            type="textarea"
                          >
                            <template v-slot:prepend>
                              <q-icon name="question_answer" />
                            </template>
                          </q-input>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12 q-mt-sm">
                          <q-btn
                            color="cyan"
                            class="q-mb-md"
                            @click="submitForm"
                            label="Submit"
                          />
                        </div>
                      </div>
                    </q-form>
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-md-6 col-xs-12 q-col-gutter-xs wrap q-mt-md">
                <q-card>
                  <q-card-section>
                    <h5 class="card-title activator q-mt-sm">
                      Form validation<i
                        class="material-icons right tooltipped"
                        data-position="left"
                        data-delay="50"
                        data-tooltip="Get Code"
                        >more_vert</i
                      >
                    </h5>
                    <q-form @submit="submitForm">
                      <div class="row">
                        <div class="col-md-12">
                          <q-input
                            color="purple-12"
                            v-model="name"
                            label="Name"
                          >
                            <template v-slot:prepend>
                              <q-icon name="account_circle" />
                            </template>
                          </q-input>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <q-input
                            color="purple-12"
                            v-model="email"
                            label="Email"
                            type="email"
                          >
                            <template v-slot:prepend>
                              <q-icon name="email" />
                            </template>
                          </q-input>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <q-input
                            color="purple-12"
                            v-model="password"
                            label="Password"
                            type="password"
                          >
                            <template v-slot:prepend>
                              <q-icon name="lock_outline" />
                            </template>
                          </q-input>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <q-input
                            color="purple-12"
                            v-model="message"
                            label="message"
                            type="textarea"
                          >
                            <template v-slot:prepend>
                              <q-icon name="question_answer" />
                            </template>
                          </q-input>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12 q-mt-sm">
                          <q-btn
                            color="cyan"
                            class="q-mb-md"
                            @click="submitForm"
                            label="Submit"
                          />
                        </div>
                      </div>
                    </q-form>
                  </q-card-section>
                </q-card>
              </div>
            </div>
            <div class="row q-mt-md">
              <div class="col s12">
                <q-card>
                  <q-card-section>
                    <h5 class="card-title activator">
                      Inline form<i
                        class="material-icons right tooltipped"
                        data-position="left"
                        data-delay="50"
                        data-tooltip="Get Code"
                        >more_vert</i
                      >
                    </h5>
                    <q-form class="row" @submit="submitForm">
                      <div class="col col-md-4">
                        <q-input
                          color="purple-12"
                          v-model="firstName"
                          label="First Name"
                          class="q-mx-md"
                        >
                          <template v-slot:prepend>
                            <q-icon name="account_circle" />
                          </template>
                        </q-input>
                      </div>
                      <div class="col col-md-4">
                        <q-input
                          color="purple-12"
                          v-model="password"
                          label="Password"
                          type="password"
                          class="q-mx-md"
                        >
                          <template v-slot:prepend>
                            <q-icon name="lock_outline" />
                          </template>
                        </q-input>
                      </div>
                      <div class="col col-md-4">
                        <q-btn
                          color="cyan"
                          class="waves-effect waves-light cq-mx-md"
                          type="submit"
                          label="Submit"
                          @click="submitForm"
                        />
                      </div>
                    </q-form>
                  </q-card-section>
                </q-card>
              </div>
            </div>
            <div class="row">
              <div class="col s12 q-mt-md">
                <q-card>
                  <q-card-section>
                    <h5 class="card-title activator">
                      Advanced Form Inputs<i
                        class="material-icons right tooltipped"
                        data-position="left"
                        data-delay="50"
                        data-tooltip="Get Code"
                        >more_vert</i
                      >
                    </h5>
                    <q-form @submit="submitForm">
                      <div class="row">
                        <div class="col s12 m6 l6">
                          <q-input v-model="firstName" label="First Name" />
                        </div>
                        <div class="col s12 m6 l6">
                          <q-input v-model="lastName" label="Last Name" />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col s12 m6 l6">
                          <q-input v-model="email" label="Email" type="email" />
                        </div>
                        <div class="col s12 m6 l6">
                          <q-input
                            v-model="password"
                            label="Password"
                            type="password"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col s12 m6 l6">
                          <q-select
                            v-model="selectedProfile"
                            :options="options"
                            label="Select Profile"
                          />
                        </div>
                        <div class="col s12 m6 l6">
                          <q-input v-model="dob" label="DOB" type="date" />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col s12 m6 l6 q-mt-md">
                          <q-uploader color="cyan" label="File" />
                        </div>
                        <div class="col s12 m6 l6 q-mt-md">
                          <q-uploader
                            color="cyan"
                            label="File"
                            multiple
                            placeholder="Upload one or more files"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col s12">
                          <q-input
                            v-model="message"
                            label="Message"
                            type="textarea"
                            maxlength="120"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col s12 q-mt-md">
                          <q-btn
                            color="cyan"
                            class="waves-effect waves-light right"
                            label="Submit"
                            @click="submitForm"
                          />
                        </div>
                      </div>
                    </q-form>
                  </q-card-section>
                </q-card>
              </div>
            </div>
            <div
              class="row wrap justify-between items-start content-between q-mt-sm q-mx-xs"
            >
              <div class="col-md-6 col-xs-12 q-col-gutter-xs wrap q-mt-md">
                <q-card class="q-py-sm q-px-sm">
                  <div class="card-content">
                    <h5 class="card-title activator q-mt-sm">
                      Project Assinging
                    </h5>
                  </div>
                  <q-form @submit="submitForm">
                    <div class="form-body">
                      <q-card-section style="margin-top: -75px">
                        <h6 class="font-medium">Personal Info</h6>
                        <div class="row">
                          <div class="col s12 m6 l6">
                            <q-input
                              v-model="firstName"
                              label="First Name"
                              class="q-mx-xs"
                            />
                          </div>
                          <div class="col s12 m6 l6">
                            <q-input
                              v-model="lastName"
                              label="Last Name"
                              class="q-mx-xs"
                            />
                          </div>
                        </div>
                        <div class="row">
                          <div class="col s12 m6 l6">
                            <q-input
                              v-model="email"
                              label="Email"
                              class="q-mx-xs"
                            />
                          </div>
                          <div class="col s12 m6 l6">
                            <q-input
                              v-model="contactNumber"
                              label="Contact Number"
                              class="q-mx-xs"
                            />
                          </div>
                        </div>
                      </q-card-section>
                      <q-divider />
                      <q-card-section style="margin-top: -50px">
                        <h6 class="font-medium">Requirements</h6>
                        <div class="row">
                          <div class="col s12">
                            <q-input
                              v-model="company"
                              label="Company Name"
                              class="q-mx-xs"
                            />
                          </div>
                        </div>
                        <div class="row">
                          <div class="col s12 m6 l6">
                            <q-select
                              v-model="interestedIn"
                              label="Interested In"
                              :options="interestedOptions"
                              class="q-mx-xs"
                            />
                          </div>
                          <div class="col s12 m6 l6">
                            <q-select
                              v-model="budget"
                              label="Budget"
                              :options="budgetOptions"
                              class="q-mx-xs"
                            />
                          </div>
                        </div>
                        <div class="row">
                          <div class="col s12">
                            <q-file
                              v-model="file"
                              label="File"
                              class="q-mx-xs"
                            />
                          </div>
                        </div>
                        <div class="row">
                          <div class="col s12">
                            <q-input
                              v-model="project"
                              label="About Project"
                              type="textarea"
                              class="q-mx-xs"
                            />
                          </div>
                        </div>
                      </q-card-section>
                      <q-divider />
                      <q-card-section>
                        <div class="form-action">
                          <q-btn
                            color="cyan q-mx-xs"
                            class="waves-light"
                            type="submit"
                            label="Save"
                          />
                          <q-btn
                            color="grey darken-4"
                            class="waves-light q-mx-xs"
                            type="button"
                            label="Cancel"
                          />
                        </div>
                      </q-card-section>
                    </div>
                  </q-form>
                </q-card>
              </div>
              <div class="col-md-6 col-xs-12 q-col-gutter-xs wrap q-mt-md">
                <q-card class="q-py-sm q-px-sm">
                  <div class="card-content">
                    <h5 class="card-title activator q-mt-sm">
                      Employee Profile
                    </h5>
                  </div>
                  <q-form @submit="submitForm">
                    <div class="form-body">
                      <q-card-section style="margin-top: -75px">
                        <h6 class="font-medium">About Employee</h6>
                        <div class="row">
                          <div class="col s12 m6 l6">
                            <q-input
                              v-model="firstName"
                              label="First Name"
                              class="q-mx-xs"
                            />
                          </div>
                          <div class="col s12 m6 l6">
                            <q-input
                              v-model="lastName"
                              label="Last Name"
                              class="q-mx-xs"
                            />
                          </div>
                        </div>
                        <div class="row">
                          <div class="col s12 m6 l6">
                            <q-input
                              v-model="username"
                              label="Username"
                              class="q-mx-xs"
                            />
                          </div>
                          <div class="col s12 m6 l6">
                            <q-input
                              v-model="nickName"
                              label="Nick Name"
                              class="q-mx-xs"
                            />
                          </div>
                        </div>
                      </q-card-section>
                      <q-divider />
                      <q-card-section style="margin-top: -50px">
                        <h6 class="font-medium">Contact Info & Bio</h6>
                        <div class="row">
                          <div class="col s12">
                            <q-input
                              v-model="email"
                              label="Email"
                              class="q-mx-xs"
                            />
                          </div>
                        </div>
                        <div class="row">
                          <div class="col s12">
                            <q-input
                              v-model="website"
                              label="Website"
                              placeholder="http://"
                              class="q-mx-xs"
                            />
                          </div>
                        </div>
                        <div class="row">
                          <div class="col s12">
                            <q-input
                              v-model="contactNumber"
                              label="Contact Number"
                              class="q-mx-xs"
                            />
                          </div>
                        </div>
                        <div class="row">
                          <div class="col s12">
                            <q-input
                              v-model="bio"
                              label="Bio"
                              type="textarea"
                              class="q-mx-xs"
                            />
                          </div>
                        </div>
                      </q-card-section>
                      <q-divider />
                      <q-card-section>
                        <div class="form-action">
                          <q-btn
                            color="cyan"
                            class="q-mx-xs"
                            type="submit"
                            label="Save"
                          />
                          <q-btn
                            color="grey darken-4"
                            class="q-mx-xs"
                            type="button"
                            label="Cancel"
                          />
                        </div>
                      </q-card-section>
                    </div>
                  </q-form>
                </q-card>
              </div>
            </div>
          </div>
        </q-page>
      </q-container>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const selectedProfile = ref(null);
    const options = ["Manager", "Developer", "Business"];

    const name = ref("");
    const email = ref("");
    const password = ref("");
    const message = ref("");

    const submitForm = () => {
      // Handle form submission here
      // You can access form data using name.value, email.value, etc.
      console.log("Form submitted");
      console.log("Name:", name.value);
      console.log("Email:", email.value);
      console.log("Password:", password.value);
      console.log("Message:", message.value);

      // Clear form fields after submission if needed
      name.value = "";
      email.value = "";
      password.value = "";
      message.value = "";
    };

    return {
      selectedProfile,
      options,
      name,
      email,
      password,
      message,
      submitForm,
    };
  },
};
</script>
