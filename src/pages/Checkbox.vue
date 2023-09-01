<template>
  <q-layout>
    <q-page-container>
      <q-page padding class="q-gutter-sm">
        <!-- Form Checkboxes Card -->
        <q-card class="shadow-up-4">
          <q-card-section>
            <h5 class="text-h5">Form Checkboxes</h5>
            <p>
              Use checkboxes when looking for yes or no answers. The <code>for</code> attribute is necessary to bind our custom checkbox with the input. Add the input's <code>id</code> as the value of the <code>for</code> attribute of the label.
            </p>
            <form action="#">
              <p>
                <label>
                  <q-checkbox v-model="checkboxValues.red" />
                  <span>Red</span>
                </label>
              </p>
              <p>
                <label>
                  <q-checkbox v-model="checkboxValues.yellow" />
                  <span>Yellow</span>
                </label>
              </p>
              <p>
                <label>
                  <q-checkbox v-model="checkboxValues.filledIn" class="filled-in" />
                  <span>Filled in</span>
                </label>
              </p>
              <p>
                <label>
                  <q-checkbox id="indeterminate-checkbox" v-model="checkboxValues.indeterminate" />
                  <span>Indeterminate Style</span>
                </label>
              </p>
              <p>
                <label>
                  <q-checkbox v-model="checkboxValues.green" disabled />
                  <span>Green</span>
                </label>
              </p>
              <p>
                <label>
                  <q-checkbox v-model="checkboxValues.brown" disabled />
                  <span>Brown</span>
                </label>
              </p>
            </form>
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
      checkboxValues: {
        red: false,
        yellow: false,
        filledIn: false,
        indeterminate: false,
        green: false,
        brown: false
      }
    };
  }
};
</script>
