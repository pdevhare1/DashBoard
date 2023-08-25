<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <q-card
          v-bind:style="$q.screen.lt.sm ? { width: '80%' } : { width: '30%' }"
        >
          <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="col text-h6 ellipsis">Sign In to Admin</div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-gutter-md" @submit="login">
              <q-input filled v-model="username" label="Username" lazy-rules />

              <q-input
                type="password"
                filled
                v-model="password"
                label="Password"
                lazy-rules
              />

              <div class="row justify-between q-mt-md">
                <q-checkbox
                  v-model="rememberMe"
                  label="Remember Me"
                ></q-checkbox>
                <q-btn
                  to="/new-page"
                  flat
                  color="primary"
                  label="Forgot Pwd?"
                />
              </div>

              <div class="text-center q-mt-md">
                <q-btn
                  to="/"
                  label="Login"
                  type="submit"
                  color="primary"
                  style="width: 90%"
                  size="md"
                />
              </div>

              <div class="row flex-center q-mt-md">
                <q-btn
                  square
                  v-for="social in socialLogins"
                  :key="social.icon"
                  :icon="social.icon"
                  :color="social.color"
                  class="q-mx-xs"
                />
              </div>
              <div class="text-center m-t-20 db">
                Don't have an account?
                <router-link to="/register">Sign Up!</router-link>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  setup() {
    const username = ref("Prathamesh");
    const password = ref("12345");
    const rememberMe = ref(false);

    const socialLogins = [
      { icon: "fab fa-facebook-f", color: "indigo" },
      { icon: "fab fa-google-plus-g", color: "orange" },
    ];

    const login = () => {
      // Add your login logic here
      console.log("Logging in...");
    };

    return {
      username,
      password,
      rememberMe,
      socialLogins,
      login,
    };
  },
});
</script>

<style>
.bg-image {
  background-image: url("../assets/img/Auth/auth-bg.jpg");
  background-size: cover;
  background-position: center;
}
</style>
