<template>
  <q-layout>
    <q-page-container>
      <q-page padding class="q-gutter-sm">
        <!-- Form Autocomplete Card -->
        <q-card class="dark text-white shadow-up-6">
          <q-card-section>
            <h5 class="text-h5">Form-Autocomplete</h5>
            <p>
              Add an autocomplete dropdown below your input to suggest possible
              values in your form. You can populate the list of autocomplete
              options dynamically as well.
            </p>
            <q-input outlined v-model="autocompleteValue" label="Autocomplete">
              <template v-slot:prepend>
                <q-icon name="textsms" />
              </template>
            </q-input>
          </q-card-section>
          <q-card-section>
            <q-code>
              <!-- Code snippet for Autocomplete input -->
            </q-code>
          </q-card-section>
        </q-card>

        <!-- Initialization Card -->
        <q-card>
          <q-card-section>
            <h5 class="text-h5">Initialization</h5>
            <p>
              The data is a JSON object where the key is the matching string and
              the value is an optional image URL.
            </p>
            <q-code>
              <!-- Code snippet for Autocomplete initialization -->
            </q-code>
          </q-card-section>
        </q-card>

        <!-- Options Card -->
        <q-card>
          <q-card-section>
            <h5 class="text-h5">Options</h5>
            <q-table
              :rows="optionsData"
              :columns="optionsColumns"
              row-key="name"
              dense
              flat
            ></q-table>
          </q-card-section>
        </q-card>

        <!-- sortFunction Card -->
        <q-card>
          <q-card-section>
            <h5 class="text-h5">sortFunction</h5>
            <p>
              This is the default compareFunction. You can write your own
              compareFunction by passing in a function with these same 3
              parameters. You can read more about how a compareFunction works
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"
                >here</a
              >.
            </p>
            <q-code>
              <!-- Code snippet for sortFunction -->
            </q-code>
          </q-card-section>
        </q-card>

        <!-- Methods Card -->
        <q-card>
          <q-card-section>
            <h5 class="text-h5">Methods</h5>
            <p>
              Because jQuery is no longer a dependency, all the methods are
              called on the plugin instance. You can get the plugin instance
              like this:
            </p>
            <q-code>
              <!-- Code snippet for Methods -->
            </q-code>
            <h5 class="text-h5">.selectOption();</h5>
            <p>Select a specific autocomplete option.</p>
            <q-code>
              <!-- Code snippet for selectOption method -->
            </q-code>
            <h5 class="text-h5">.updateData();</h5>
            <p>Update autocomplete options data.</p>
            <q-code>
              <!-- Code snippet for updateData method -->
            </q-code>
            <h5 class="text-h5">.destroy();</h5>
            <p>Destroy plugin instance and teardown.</p>
            <q-code>
              <!-- Code snippet for destroy method -->
            </q-code>
          </q-card-section>
        </q-card>

        <!-- Properties Card -->
        <q-card>
          <q-card-section>
            <h5 class="text-h5">Properties</h5>
            <q-table
              :rows="propertiesData"
              :columns="propertiesColumns"
              row-key="name"
              dense
              flat
            ></q-table>
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
      autocompleteValue: "",
      optionsData: [
        {
          name: "data",
          type: "Object",
          default: "{}",
          description:
            "Data object defining autocomplete options with optional icon strings.",
        },
        // Add other option data here
      ],
      optionsColumns: [
        {
          name: "name",
          required: true,
          label: "Name",
          align: "left",
          field: "name",
        },
        {
          name: "type",
          required: true,
          label: "Type",
          align: "left",
          field: "type",
        },
        {
          name: "default",
          required: true,
          label: "Default",
          align: "left",
          field: "default",
        },
        {
          name: "description",
          required: true,
          label: "Description",
          align: "left",
          field: "description",
        },
      ],
      propertiesData: [
        {
          name: "el",
          type: "Element",
          description: "The DOM element the plugin was initialized with.",
        },
        // Add other properties data here
      ],
      propertiesColumns: [
        {
          name: "name",
          required: true,
          label: "Name",
          align: "left",
          field: "name",
        },
        {
          name: "type",
          required: true,
          label: "Type",
          align: "left",
          field: "type",
        },
        {
          name: "description",
          required: true,
          label: "Description",
          align: "left",
          field: "description",
        },
      ],
    };
  },
};
</script>
