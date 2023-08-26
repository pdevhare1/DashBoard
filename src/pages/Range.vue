<template>
  <q-layout>
    <q-page-container>
      <q-page padding class="q-gutter-sm">
        <div class="container-fluid">
          <div class="row">
            <div class="col s12">
              <q-card class="dark text-white shadow-up-6">
                <q-card-section>
                  <h5 class="text-h6">Form Range</h5>
                  <p>
                    Add a range slider for values with a wide range. This one is
                    set to be a number between 0 and 100. We have two different
                    types of sliders. nouiSlider is a 3rd party plugin which
                    we've modified. To use the noUiSlider, you will have to
                    manually link the <code>nouislider.css</code> and
                    <code>nouislider.js</code> files located in the extras
                    folder.
                  </p>
                  <h5 class="text-h6">noUiSlider</h5>
                  <p>
                    See noUiSlider's official documentation here to see a
                    variety of slider options
                  </p>
                  <q-range
                    v-model="standard"
                    :min="0"
                    :max="50"
                    color="green"
                  />
                  <div id="range-input" ref="rangeInput"></div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <q-card class="dark text-white shadow-up-6">
              <q-card-section>
                <h5 class="text-h6">HTML5 Range</h5>
                <q-range
                  v-model="standard"
                  :min="0"
                  :max="50"
                  color="green"
                  label-always
                />
                <div id="range-input" ref="rangeInput"></div>
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
