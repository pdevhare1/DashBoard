<template>
  <q-layout>
    <q-page-container>
      <q-page padding class="q-gutter-sm">
        <div class="container-fluid">
          <div class="row">
            <div class="col s12">
              <q-card class="dark text-white shadow-up-6">
                <q-card-section>
                  <h5 class="text-h6">Form Radio Buttons</h5>
                  <p>
                    Radio Buttons are used when the user must make only one
                    selection out of a group of items. The
                    <code>for</code> attribute is necessary to bind our custom
                    radio button with the input. Add the input's
                    <code>id</code> as the value of the
                    <code>for</code> attribute of the label.
                  </p>
                  <p>
                    Add radio buttons to a group by adding the name attribute
                    along with the same corresponding value for each of the
                    radio buttons in the group. Create disabled radio buttons by
                    adding the disabled attribute as shown below.
                  </p>
                  <form action="#">
                    <p>
                      <q-radio v-model="selectedColor" val="red" label="Red" />
                    </p>
                    <p>
                      <q-radio
                        v-model="selectedColor"
                        val="yellow"
                        label="Yellow"
                      />
                    </p>
                    <p>
                      <q-radio
                        class="with-gap"
                        v-model="selectedColor"
                        val="green"
                        label="Green"
                      />
                    </p>
                    <p>
                      <q-radio
                        v-model="selectedColor"
                        val="brown"
                        label="Brown"
                        :disable="true"
                      />
                    </p>
                  </form>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <q-card class="dark text-white shadow-up-6">
              <q-card-section>
                <h5 class="text-h6">With Gap</h5>
                <p>
                  To create a radio button with a gap, add
                  <code>class="with-gap"</code> to your input. See the example
                  below.
                </p>
                <p>
                  <q-radio
                    v-model="selectedColor"
                    val="red"
                    label="Red"
                    class="with-gap"
                  />
                </p>
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
      selectedColor: "red",
    };
  },
};
</script>
