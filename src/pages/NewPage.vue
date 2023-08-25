<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <q-card
          v-bind:style="$q.screen.lt.sm ? { width: '80%' } : { width: '30%' }"
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
    const recoveryEmail = ref("");

    const recoverPassword = () => {
      // Add your password recovery logic here
      console.log("Recovering password...");
    };

    return {
      recoveryEmail,
      recoverPassword,
    };
  },
});
</script>

<style>
.bg-image {
  background-image: url("src/assets/img/Auth/auth-bg.jpg");
  background-size: cover;
  background-position: center;
}
</style>
