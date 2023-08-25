<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <q-card
          v-bind:style="$q.screen.lt.sm ? { width: '80%' } : { width: '30%' }"
        >
          <q-card-section>
            <div class="text-center">
              <h6 style="margin-top: 3%">Recover Password</h6>
            </div>
            <q-form class="q-gutter-md" @submit.prevent="recoverPassword">
              <q-input
                filled
                type="text"
                v-model="name"
                label="Name"
                required
              />
              <q-input
                filled
                type="email"
                v-model="email"
                label="Email"
                required
              />
              <div class="text-center">
                <q-btn
                  type="submit"
                  color="indigo"
                  class="q-mt-md"
                  label="Reset"
                  ripple
                />
              </div>
            </q-form>
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
      name: "",
      email: "",
    };
  },
  methods: {
    recoverPassword() {
      // Handle password recovery logic
    },
  },
};
</script>

<style>
.bg-image {
  background-image: url("../assets/img/Auth/auth-bg.jpg");
  background-size: cover;
  background-position: center;
}
</style>
