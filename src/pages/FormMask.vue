<template>
  <q-layout>
    <q-page-container>
      <q-container>
        <q-page padding class="q-gutter-sm">
          <div class="container-fluid">
            <div>
              <q-card class="shadow-up-6">
                <q-card-section>
                  <h5 class="q-mb-md">Basic Form With Formatter Js</h5>
                  <p>
                    <!-- <a
              href="https://github.com/firstopinion/formatter.js"
              target="_blank"
              >Formatter</a
            > -->
                    Format user input to match a specified pattern.
                  </p>
                  <div class="q-mb-md">
                    <q-form
                      @submit="submitForm"
                      class="fit row wrap justify-evenly items-start content-start"
                    >
                      <q-input
                        v-model="formData.date"
                        label="Date"
                        placeholder="2015-01-01"
                        class="col col-md-6 q-gutter-md q-col-gutter-md"
                      />
                      <q-input
                        v-model="formData.time"
                        label="Time"
                        placeholder="00:00"
                        class="col col-md-6 q-gutter-md q-col-gutter-md"
                      />
                      <q-input
                        v-model="formData.dateTime"
                        label="Date & Time"
                        placeholder="01/01/2015 00:00"
                        class="col col-md-6 q-gutter-md q-col-gutter-md"
                      />
                      <q-input
                        v-model="formData.characters"
                        label="Characters Only (max 10)"
                        placeholder="asdfghjkl (max 10)"
                        class="col col-md-6 q-gutter-md q-col-gutter-md"
                      />
                      <q-input
                        v-model="formData.phone"
                        label="Phone Number"
                        placeholder="Placeholder"
                        class="col col-md-6 q-gutter-md q-col-gutter-md"
                      />
                      <q-input
                        v-model="formData.creditInput"
                        label="Credit Input"
                        placeholder="Placeholder"
                        class="col col-md-6 q-gutter-md q-col-gutter-md"
                      />
                      <q-input
                        v-model="formData.productKey"
                        label="Product Key"
                        class="col col-md-6 q-gutter-md q-col-gutter-md"
                      />
                      <q-input
                        v-model="formData.purchaseCode"
                        label="Purchase Code"
                        class="col col-md-6 q-gutter-md q-col-gutter-md"
                      />
                      <q-input
                        v-model="formData.currency"
                        label="Currency"
                        class="col col-md-6 q-gutter-md q-col-gutter-md"
                      />
                      <q-input
                        v-model="formData.internationalNumber"
                        label="International Number"
                        class="col col-md-6 q-gutter-md q-col-gutter-md"
                      />
                      <q-input
                        v-model="formData.radixPoint"
                        label="Radix Point"
                        class="col col-md-6 q-gutter-md q-col-gutter-md"
                      />
                      <q-input
                        v-model="formData.ssn"
                        label="SSN"
                        class="col col-md-6 q-gutter-md q-col-gutter-md"
                      />
                      <q-input
                        v-model="formData.phoneEx"
                        label="Phone/xEx"
                        class="col col-md-6 q-gutter-md q-col-gutter-md"
                      />
                      <q-input
                        v-model="formData.isbn"
                        label="ISBN"
                        class="col col-md-6 q-gutter-md q-col-gutter-md"
                      />
                      <q-input
                        v-model="formData.percentage"
                        label="Percentage"
                        class="col col-md-6 q-gutter-md q-col-gutter-md"
                      />
                      <q-input
                        v-model="formData.purchaseOrder"
                        label="Purchase Order"
                        class="col col-md-6 q-gutter-md q-col-gutter-md"
                      />
                    </q-form>
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
          <div>
            <q-card class="shadow-up-6">
              <q-card-section>
                <h5 class="q-mb-md">Basic Form With Mask Js</h5>
                <q-form
                  class="fit row wrap justify-evenly items-start content-start"
                >
                  <q-input
                    data-mask="99/99/9999"
                    v-model="formData.date"
                    label="Date"
                    placeholder="MM/DD/YYYY"
                    class="col col-md-6 q-gutter-md q-col-gutter-md"
                  />
                  <q-input
                    data-mask="(999) 999-9999"
                    v-model="formData.phone"
                    label="Phone"
                    placeholder="(123) 456-7890"
                    class="col col-md-6 q-gutter-md q-col-gutter-md"
                  />
                  <q-input
                    data-mask="999-99-9999"
                    v-model="formData.ssn1"
                    label="SSN field 1"
                    placeholder="123-45-6789"
                    class="col col-md-6 q-gutter-md q-col-gutter-md"
                  />
                  <q-input
                    data-mask="+40 999 999 999"
                    v-model="formData.phone2"
                    label="Phone field + ext."
                    placeholder="+40 123 456 789"
                    class="col col-md-6 q-gutter-md q-col-gutter-md"
                  />
                  <q-input
                    data-mask="a*-999-a999"
                    v-model="formData.productKey"
                    label="Product Key"
                    placeholder="A-123-B456"
                    class="col col-md-6 q-gutter-md q-col-gutter-md"
                  />
                  <q-input
                    data-mask="$ 999,999,999.99"
                    v-model="formData.currency"
                    label="Currency"
                    placeholder="$ 123,456,789.00"
                    class="col col-md-6 q-gutter-md q-col-gutter-md"
                  />
                  <q-input
                    data-mask="99-99-9999"
                    v-model="formData.date2"
                    label="Date 2"
                    placeholder="MM-DD-YYYY"
                    class="col col-md-6 q-gutter-md q-col-gutter-md"
                  />
                  <q-input
                    data-mask="~9.99 ~9.99 999"
                    v-model="formData.eyeScript"
                    label="Eye Script"
                    placeholder="1.23 4.56 789"
                    class="col col-md-6 q-gutter-md q-col-gutter-md"
                  />
                  <q-input
                    data-mask="99%"
                    v-model="formData.percent"
                    label="Percent"
                    placeholder="75%"
                    class="col col-md-6 q-gutter-md q-col-gutter-md"
                  />
                  <q-input
                    data-mask="999.999.999.9999"
                    v-model="formData.pcIp"
                    label="Pc Ip"
                    placeholder="192.168.0.1"
                    class="col col-md-6 q-gutter-md q-col-gutter-md"
                  />
                </q-form>
              </q-card-section>
            </q-card>
            <div
              class="row wrap justify-between items-start content-between q-mt-sm q-mx-xs"
            >
              <div class="col-md-6 q-col-gutter-xs q-mt-md">
                <q-card class="shadow-up-6">
                  <q-card-section>
                    <h5 class="q-mb-md q-mt-xs">Basic usage</h5>
                    <p>
                      When initializing a typeahead, you pass the plugin method
                      one or more datasets. The source of a dataset is
                      responsible for computing a set of suggestions for a given
                      query.
                    </p>
                    <div id="the-basics">
                      <q-input
                        class="typeahead"
                        type="text"
                        placeholder="Countries"
                      />
                    </div>
                  </q-card-section>
                </q-card>
              </div>

              <div class="col-md-6 q-col-gutter-xs q-mt-md">
                <q-card class="shadow-up-6">
                  <q-card-section>
                    <h5 class="q-mb-md q-mt-xs">Bloodhound</h5>
                    <p>
                      Suggestion Engine - For more advanced use cases, rather
                      than implementing the source for your dataset yourself,
                      you can take advantage of Bloodhound, the typeahead.js
                      suggestion engine.
                    </p>
                    <div id="bloodhound">
                      <q-input
                        class="typeahead"
                        type="text"
                        placeholder="Countries"
                      />
                    </div>
                  </q-card-section>
                </q-card>
              </div>

              <div class="col-md-6 q-col-gutter-xs q-mt-md">
                <q-card class="shadow-up-6">
                  <q-card-section>
                    <h5 class="q-mb-md q-mt-xs">Prefetch</h5>
                    <p>
                      Prefetched data is fetched and processed on
                      initialization. If the browser supports local storage, the
                      processed data will be cached there to prevent additional
                      network requests.
                    </p>
                    <div id="prefetch">
                      <q-input
                        class="typeahead"
                        type="text"
                        placeholder="Countries"
                      />
                    </div>
                  </q-card-section>
                </q-card>
              </div>

              <div class="col-md-6 q-col-gutter-xs q-mt-md">
                <q-card class="shadow-up-6">
                  <q-card-section>
                    <h5 class="q-mb-md q-mt-xs">Default Suggestions</h5>
                    <p>
                      Default suggestions can be shown for empty queries by
                      setting the minLength option to 0 and having the source
                      return suggestions for empty queries.
                    </p>
                    <div id="default-suggestions">
                      <q-input
                        class="typeahead"
                        type="text"
                        placeholder="NFL Teams"
                      />
                    </div>
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-md-6 col-xs-12 q-col-gutter-xs wrap q-mt-md">
                <q-card class="shadow-up-6">
                  <q-card-section>
                    <h5 class="q-mb-md q-mt-xs">Multiple Datasets</h5>
                    <p>Use multiple datasets like this</p>
                    <div id="multiple-datasets">
                      <q-input
                        class="typeahead"
                        type="text"
                        placeholder="NBA and NHL teams"
                      />
                    </div>
                  </q-card-section>
                </q-card>
              </div>

              <div class="col-md-6 col-xs-12 q-col-gutter-xs wrap q-mt-md">
                <q-card class="shadow-up-6">
                  <q-card-section>
                    <h5 class="q-mb-md q-mt-xs">Scrollable Dropdown Menu</h5>
                    <p>You can use scrollable dropdown</p>
                    <div id="scrollable-dropdown-menu">
                      <q-input
                        class="typeahead"
                        type="text"
                        placeholder="Countries"
                      />
                    </div>
                  </q-card-section>
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
export default {
  data() {
    return {
      formData: {
        date: "",
        time: "",
        dateTime: "",
        characters: "",
        phone: "",
        creditInput: "",
        productKey: "",
        purchaseCode: "",
        currency: "",
        internationalNumber: "",
        radixPoint: "",
        ssn: "",
        phoneEx: "",
        isbn: "",
        percentage: "",
        purchaseOrder: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic here
    },
  },
};
</script>
