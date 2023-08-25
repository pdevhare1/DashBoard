<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <q-card
          v-bind:style="$q.screen.lt.sm ? { width: '80%' } : { width: '30%' }"
        >
          <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="col text-h6 ellipsis">Register to Admin</div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-gutter-md" @submit="register">
              <q-input filled v-model="name" label="Name" lazy-rules />

              <q-input filled v-model="email" label="Email" lazy-rules />

              <q-input
                type="password"
                filled
                v-model="password"
                label="Password"
                lazy-rules
              />

              <q-input
                type="password"
                filled
                v-model="confirmPassword"
                label="Confirm Password"
                lazy-rules
              />

              <q-checkbox v-model="agreeTerms" label="Agree to all Terms" />
              <div class="text-center q-mt-md">
                <q-btn
                  label="Sign Up"
                  type="submit"
                  color="red"
                  style="width: 90%"
                  size="md"
                />
              </div>
              <div class="text-center m-t-20 db">
                Already have an account?
                <router-link to="/login">Login</router-link>
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
  name: "Register",
  setup() {
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const agreeTerms = ref(false);

    const register = () => {
      // Add your registration logic here
      console.log("Registering...");
    };

    return {
      name,
      email,
      password,
      confirmPassword,
      agreeTerms,
      register,
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
