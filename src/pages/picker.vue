<template>
  <q-layout>
    <q-page-container>
      <q-page padding class="q-gutter-sm">
        <div class="container-fluid">
          <div class="row">
            <div class="col s12">
              <q-card class="dark text-white shadow-up-6">
                <q-card-section>
                  <h5 class="text-h6">Date Picker</h5>
                  <p>
                    We use a modified version of pickadate.js to create a
                    materialized date picker. Test it out below!
                  </p>
                  <div class="q-input">
                    <div class="q-pa-md" style="max-width: 50%">
                      <q-input
                        filled
                        v-model="date"
                        mask="date"
                        :rules="['date']"
                      >
                        <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy
                              cover
                              transition-show="scale"
                              transition-hide="scale"
                            >
                              <q-date v-model="date">
                                <div class="row items-center justify-end">
                                  <q-btn
                                    v-close-popup
                                    label="Close"
                                    color="primary"
                                    flat
                                  />
                                </div>
                              </q-date>
                            </q-popup-proxy>
                          </q-icon>
                        </template>
                      </q-input>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <q-card class="dark text-white shadow-up-6">
              <q-card-section>
                <h5 class="text-h6">Initialization</h5>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <q-card class="dark text-white shadow-up-6">
              <q-card-section>
                <h5 class="text-h6">Options</h5>
                <table class="q-table striped responsive-table text-center">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Default</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>format</td>
                      <td>String</td>
                      <td>'mmm dd, yyyy'</td>
                      <td>The date output format for the input field value.</td>
                    </tr>
                    <tr>
                      <td>parse</td>
                      <td>Function</td>
                      <td>null</td>
                      <td>
                        Used to create a date object from the current input
                        string.
                      </td>
                    </tr>
                    <tr>
                      <td>defaultDate</td>
                      <td>Date</td>
                      <td>null</td>
                      <td>The initial date to view when first opened.</td>
                    </tr>
                    <tr>
                      <td>setDefaultDate</td>
                      <td>Boolean</td>
                      <td>false</td>
                      <td>Make the defaultDate the initial selected value.</td>
                    </tr>
                    <!-- ... Other rows ... -->
                  </tbody>
                </table>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <q-card class="dark text-white shadow-up-6">
              <q-card-section>
                <h5 class="text-h6">Datepicker Internationalization options</h5>
                <p>Use these in the i18n option to localize the datepicker.</p>
                <table class="q-table striped responsive-table text-center">
                  <thead>
                    <tr>
                      <th>Key</th>
                      <th>Text</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>clear</td>
                      <td>'Clear'</td>
                    </tr>
                    <tr>
                      <td>today</td>
                      <td>'Today'</td>
                    </tr>
                    <tr>
                      <td>done</td>
                      <td>'Ok'</td>
                    </tr>
                    <tr>
                      <td>previousMonth</td>
                      <td>'‹'</td>
                    </tr>
                    <tr>
                      <td>nextMonth</td>
                      <td>'›'</td>
                    </tr>
                    <tr>
                      <td>months</td>
                      <td>
                        [ 'January', 'February', 'March', 'April', 'May',
                        'June', 'July', 'August', 'September', 'October',
                        'November', 'December' ]
                      </td>
                    </tr>
                    <tr>
                      <td>monthsShort</td>
                      <td>
                        [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                        'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]
                      </td>
                    </tr>
                    <tr>
                      <td>weekdays</td>
                      <td>
                        [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday',
                        'Thursday', 'Friday', 'Saturday' ]
                      </td>
                    </tr>
                    <tr>
                      <td>weekdaysShort</td>
                      <td>
                        [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ]
                      </td>
                    </tr>
                    <tr>
                      <td>weekdaysAbbrev</td>
                      <td>['S','M','T','W','T','F','S']</td>
                    </tr>
                  </tbody>
                </table>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  // You can add your component logic here
};
</script>
