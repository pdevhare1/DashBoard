<template>
  <q-layout>
    <q-page-container>
      <q-page padding class="q-gutter-sm">
        <div class="container-fluid">
          <div class="row">
            <div class="col s12">
              <q-card class="dark text-white shadow-up-6">
                <q-card-section>
                  <h5 class="text-h6">Form Switch</h5>
                  <p>
                    Switches are special checkboxes used for binary states such
                    as on / off
                  </p>
                  <form action="#">
                    <p>
                      <a>off</a>
                      <q-toggle v-model="switchValue" />
                      <a>on</a>
                    </p>
                    <p>
                      <a>off</a>
                      <q-toggle v-model="disabledSwitchValue" :disable="true" />
                      <a>on</a>
                    </p>
                  </form>
                  <pre class="pre-scroll">
                    <code class="language-markup">
                      &lt;!-- Switch -->
                      &lt;q-toggle v-model="switchValue" />

                      &lt;!-- Disabled Switch -->
                      &lt;q-toggle v-model="disabledSwitchValue" :disable="true" />
                    </code>
                  </pre>
                </q-card-section>
              </q-card>
            </div>
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
      switchValue: true,
      disabledSwitchValue: false,
    };
  },
};
</script>
