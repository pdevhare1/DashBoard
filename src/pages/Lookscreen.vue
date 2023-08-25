<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <q-card
          v-bind:style="$q.screen.lt.sm ? { width: '80%' } : { width: '30%' }"
        >
          <q-card-section>
            <div class="text-center">
              <q-avatar round size="100px">
                <img
                  src="https://cdn.quasar.dev/img/boy-avatar.png"
                  class="circle align-self-center"
                />
              </q-avatar>
              <h6 style="margin-top: 3%">User</h6>
            </div>
            <q-form @submit.prevent="login">
              <q-input
                filled
                type="password"
                v-model="password"
                label="Password"
                required
              />
              <div class="text-center">
                <q-btn
                  to="/"
                  type="submit"
                  color="indigo"
                  class="q-mt-md"
                  label="Login"
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
      password: "123",
    };
  },
  methods: {
    login() {
      // Handle login logic
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
