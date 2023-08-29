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
              <p class="card-subtitle">
                This is the basic horizontal form with labels on the left and
                form controls on the right in one line. Add
                <code>.h-form</code> class to the form tag to have horizontal
                form styling. Also, put form labels inside div with
                <code>.h-form-label</code> class.
              </p>
            </q-card-section>
            <form class="h-form" @submit.prevent="submitForm">
              <div class="form-body">
                <div class="divider"></div>
                <q-card-section>
                  <h6 class="font-medium">Personal Info</h6>
                  <div class="row">
                    <div class="col-1 q-mt-md">
                      <div class="h-form-label">
                        <label for="f-nameh">First Name</label>
                      </div>
                    </div>
                    <div class="input-field col s9">
                      <q-input
                        id="f-nameh"
                        v-model="personalInfo.firstName"
                        placeholder="First Name Here"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-1 q-mt-md">
                      <div class="h-form-label">
                        <label for="f-nameh">Last Name</label>
                      </div>
                    </div>
                    <div class="input-field col s9">
                      <q-input
                        id="f-nameh"
                        v-model="personalInfo.firstName"
                        placeholder="Last Name Here"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-1 q-mt-md">
                      <div class="h-form-label">
                        <label for="f-nameh">Email</label>
                      </div>
                    </div>
                    <div class="input-field col s9">
                      <q-input
                        id="f-nameh"
                        v-model="personalInfo.firstName"
                        placeholder="Email Here"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-1 q-mt-md">
                      <div class="h-form-label">
                        <label for="f-nameh">Contact Number</label>
                      </div>
                    </div>
                    <div class="input-field col s9">
                      <q-input
                        id="f-nameh"
                        v-model="personalInfo.firstName"
                        placeholder="Contact Number Here"
                      />
                    </div>
                  </div>
                </q-card-section>
                <q-card-section>
                  <h6 class="font-medium">Requirements</h6>
                  <div class="row">
                    <div class="col-1 q-mt-md">
                      <div class="h-form-label">
                        <label for="f-nameh">Company</label>
                      </div>
                    </div>
                    <div class="input-field col s9">
                      <q-input
                        id="f-nameh"
                        v-model="personalInfo.firstName"
                        placeholder="Company Name Here"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-1 q-mt-md">
                      <div class="h-form-label">
                        <label for="f-nameh">Interested In</label>
                      </div>
                    </div>
                    <div class="input-field col s9">
                      <q-select
                        v-model="model"
                        :options="options"
                        label="Choose your option"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-1 q-mt-md">
                      <div class="h-form-label">
                        <label for="f-nameh">Budget</label>
                      </div>
                    </div>
                    <div class="input-field col s9">
                      <q-select
                        v-model="model"
                        :options="options"
                        label="Choose your option"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-1 q-mt-md">
                      <div class="h-form-label">
                        <label for="f-nameh">Select File</label>
                      </div>
                    </div>
                    <div class="input-field col s9 q-mt-sm">
                      <q-uploader
                        url="http://localhost:4444/upload"
                        color="teal"
                        flat
                        bordered
                        no-thumbnails
                        style="width: 15%"
                        label="Select files"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-1 q-mt-md">
                      <div class="h-form-label">
                        <label for="f-nameh">About Project</label>
                      </div>
                    </div>
                    <div class="input-field col s9">
                      <q-input
                        id="f-nameh"
                        v-model="personalInfo.firstName"
                        placeholder="About Project Here"
                      />
                    </div>
                  </div>
                </q-card-section>
                <div class="divider"></div>
                <!-- ... More sections for additional fields ... -->
                <q-card-section>
                  <div class="form-action q-gutter-sm">
                    <q-btn @click="saveForm" color="primary">Save</q-btn>
                    <q-btn color="primary" @click="cancelForm">Cancel</q-btn>
                  </div>
                </q-card-section>
              </div>
            </form>
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
