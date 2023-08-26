<template>
  <q-layout>
    <q-page-container>
      <q-page padding class="q-gutter-sm">
        <div class="container-fluid">
          <div class="row">
            <div class="col s12">
              <q-card class="dark text-white shadow-up-6">
                <q-card-section>
                  <h5 class="text-h6">Options</h5>
                  <q-table
                    class="striped responsive-table dark text-white shadow-up-6 text-center"
                    :rows="optionsTableRows"
                    :columns="optionsTableColumns"
                  />
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <q-card class="dark text-white shadow-up-6">
              <q-card-section>
                <h5 class="text-h6">Methods</h5>
                <p>
                  Because jQuery is no longer a dependency, all the methods are
                  called on the plugin instance. You can get the plugin instance
                  like this:
                </p>
                <pre class="pre-scroll">
                  <code class="language-javascript col s12">
                    var instance = M.FormSelect.getInstance(elem);

                    /* jQuery Method Calls
                        You can still use the old jQuery plugin method calls.
                        But you won't be able to access instance properties.

                        $('select').formSelect('methodName');
                        $('select').formSelect('methodName', paramName);
                    */
                  </code>
                </pre>
                <h5 class="text-h6">.getSelectedValues();</h5>
                <p>Get selected values in an array.</p>
                <h6>Return Value</h6>
                <p><b>Array:</b> Array of selected values.</p>
                <pre>
                  <code class="language-javascript col s12">
                    instance.getSelectedValues();
                  </code>
                </pre>
                <h5 class="text-h6">.destroy();</h5>
                <p>Destroy plugin instance and teardown</p>
                <pre>
                  <code class="language-javascript col s12">
                    instance.destroy();
                  </code>
                </pre>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <q-card class="dark text-white shadow-up-6">
              <q-card-section>
                <h5 class="text-h6">Properties</h5>
                <q-table
                  flat
                  bordered
                  title="Properties"
                  :rows="tableData"
                  :columns="tableColumns"
                  row-key="name"
                  class="dark text-white text-center"
                />
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
  data() {
    return {
      optionsTableColumns: [
        { name: "Name", field: "name" },
        { name: "Type", field: "type" },
        { name: "Default", field: "default" },
        { name: "Description", field: "description" },
      ],
      optionsTableRows: [
        {
          name: "classes",
          type: "String",
          default: "''",
          description: "Classes to be added to the select wrapper element.",
        },
        {
          name: "dropdownOptions",
          type: "Object",
          default: "{}",
          description: "Pass options object to select dropdown initialization.",
        },
      ],
      tableData: [
        {
          name: "el",
          type: "Element",
          description: "The DOM element the plugin was initialized with.",
        },
        {
          name: "options",
          type: "Object",
          description: "The options the instance was initialized with.",
        },
        // ... other data entries ...
      ],
      tableColumns: [
        {
          name: "name",
          required: true,
          label: "Name",
          align: "left",
          field: "name",
        },
        { name: "type", align: "left", label: "Type", field: "type" },
        {
          name: "description",
          align: "left",
          label: "Description",
          field: "description",
        },
      ],
    };
  },
};
</script>
