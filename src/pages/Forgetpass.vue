<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <div class="q-pa-lg example-column-equal-width">
          <div
            class="column q-gutter-md"
            style="height: 150px; margin-right: 25%"
          >
            <div class="col">
              <h4>Welcome to the Quasar Admin</h4>
            </div>
            <div class="col q-gutter-md" style="margin-left: -0.5%">
              <p>
                This is just a demo text which you can change as per your
                requeirment, so change once you get chance. this is default
                text.
              </p>
              <q-btn unelevated rounded color="red" label="Know More" />
            </div>
          </div>
        </div>
        <q-card
          v-bind:style="$q.screen.lt.sm ? { width: '80%' } : { width: '30%' }"
          class="fixed-right"
        >
        <q-card-section>
          <div class="text-center q-pt-lg">
            <div class="col text-h6 ellipsis">Recover Password</div>
          </div>
        </q-card-section>
        <q-card-section>
          <div class="logo">
            <span
              >Enter your Email and instructions will be sent to you!</span
            >
          </div>
          <q-form class="q-gutter-md" @submit="recoverPassword">
            <q-input
              filled
              v-model="recoveryEmail"
              label="Email"
              lazy-rules
            />

            <div class="row justify-center q-mt-md">
              <q-btn
                label="Reset"
                type="submit"
                color="red"
                style="width: 90%"
                size="md"
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
  background-image: url("../assets/img/Auth/auth-bg2.jpg");
  background-size: cover;
  background-position: center;
}
</style>
