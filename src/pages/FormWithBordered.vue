<template>
  <q-layout>
    <q-page-container>
      <q-page padding class="q-gutter-sm">
        <div class="col s12">
          <q-card>
            <q-card-section>
              <h5 class="card-title activator">
                Project Assigning<i
                  class="material-icons right tooltipped"
                  data-position="left"
                  data-delay="50"
                  data-tooltip="Get Code"
                  >more_vert</i
                >
              </h5>
              <h6 class="card-subtitle">
                Add <code>.b-form</code> class in the form with horizontal
                styling.
              </h6>
              <q-form class="h-form b-form" @submit.prevent="submitForm">
                <div class="form-body">
                  <q-card-section>
                    <h6 class="font-medium">Personal Info</h6>
                    <div class="row">
                      <div class="col-2 q-my-xs">
                        <div class="h-form-label">
                          <label for="f-name">First Name</label>
                        </div>
                      </div>
                      <q-separator vertical class="q-mx-xs" color="blue" />
                      <div class="input-field col s9 q-mb-xs">
                        <q-input id="f-name" placeholder="First Name Here" />
                      </div>
                    </div>
                    <q-separator color="blue" />
                    <div class="row">
                      <div class="col-2 q-my-xs">
                        <div class="h-form-label">
                          <label for="l-name">Last Name</label>
                        </div>
                      </div>
                      <q-separator vertical class="q-mx-xs" color="blue" />
                      <div class="input-field col s9 q-mb-xs">
                        <q-input id="l-name" placeholder="Last Name Here" />
                      </div>
                    </div>
                    <q-separator color="blue" />
                    <div class="row">
                      <div class="col-2 q-my-xs">
                        <div class="h-form-label">
                          <label for="email1">Email</label>
                        </div>
                      </div>
                      <q-separator vertical class="q-mx-xs" color="blue" />
                      <div class="input-field col s9 q-mb-xs">
                        <q-input id="email1" placeholder="Email Here" />
                      </div>
                    </div>
                    <q-separator color="blue" />
                    <div class="row">
                      <div class="col-2 q-my-xs">
                        <div class="h-form-label">
                          <label for="con1">Contact Number</label>
                        </div>
                      </div>
                      <q-separator vertical class="q-mx-xs" color="blue" />
                      <div class="input-field col s9 q-mb-xs">
                        <q-input id="con1" placeholder="Contact Number Here" />
                      </div>
                    </div>
                  </q-card-section>
                  <q-card-section>
                    <h6 class="font-medium">Requirements</h6>
                    <div class="row">
                      <div class="col-2 q-my-xs">
                        <div class="h-form-label">
                          <label for="company">Company</label>
                        </div>
                      </div>
                      <q-separator vertical class="q-mx-xs" color="blue" />
                      <div class="input-field col s9 q-mb-xs">
                        <q-input id="company" placeholder="Company Name Here" />
                      </div>
                    </div>
                    <q-separator color="blue" />
                    <div class="row">
                      <div class="col-2 q-my-xs">
                        <div class="h-form-label">
                          <label>Interested In</label>
                        </div>
                      </div>
                      <q-separator vertical class="q-mx-xs" color="blue" />
                      <div class="input-field col s9 q-mb-xs">
                        <q-select
                          v-model="interestedIn"
                          :options="interestedInOptions"
                          label="Choose your option"
                        />
                      </div>
                    </div>
                    <q-separator color="blue" />
                    <div class="row">
                      <div class="col-2 q-my-xs">
                        <div class="h-form-label">
                          <label>Budget</label>
                        </div>
                      </div>
                      <q-separator vertical class="q-mx-xs" color="blue" />
                      <div class="input-field col s9 q-mb-xs">
                        <q-select
                          v-model="budget"
                          :options="budgetOptions"
                          label="Choose your option"
                        />
                      </div>
                    </div>
                    <q-separator color="blue" />
                    <div class="row">
                      <div class="col-2 q-my-xs">
                        <div class="h-form-label">
                          <label>Select File</label>
                        </div>
                      </div>
                      <q-separator vertical class="q-mx-xs" color="blue" />
                      <div class="input-field col s9 q-mb-xs q-mt-sm">
                        <q-uploader
                          url="http://localhost:4444/upload"
                          color="teal"
                          flat
                          bordered
                          no-thumbnails
                          style="width: 75%"
                          label="Select files"
                        />
                      </div>
                    </div>
                    <q-separator color="blue" />
                    <div class="row">
                      <div class="col-2 q-my-xs">
                        <div class="h-form-label">
                          <label for="project">About Project</label>
                        </div>
                      </div>
                      <q-separator vertical class="q-mx-xs" color="blue" />
                      <div class="input-field col s9 q-mb-xs">
                        <q-input
                          id="project"
                          class="materialize-textarea"
                          placeholder="About Project Here"
                        />
                      </div>
                    </div>
                  </q-card-section>
                  <q-card-section>
                    <div class="form-action q-gutter-sm">
                      <q-btn type="submit" color="primary">Save</q-btn>
                      <q-btn @click="cancelForm" color="negative">Cancel</q-btn>
                    </div>
                  </q-card-section>
                </div>
              </q-form>
            </q-card-section>
          </q-card>
        </div>
        <div class="col s12">
          <q-card>
            <q-card-section>
              <h5 class="card-title activator">
                Employee Profile<i
                  class="material-icons right tooltipped"
                  data-position="left"
                  data-delay="50"
                  data-tooltip="Get Code"
                  >more_vert</i
                >
              </h5>
            </q-card-section>
          </q-card>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      personalInfo: {
        firstName: "",
      },
    };
  },
  methods: {
    submitForm() {},
    saveForm() {},
    cancelForm() {},
  },
};
</script>
