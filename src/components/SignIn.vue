<template>
  <v-flex>
    <h2>Masuk</h2>
    <v-text-field
      class="mt-4"
      outlined
      v-model.trim="$v.loginForm.username.$model"
      :error-messages="usernameError"
      label="Username"
    ></v-text-field>
    <v-text-field
      outlined
      v-model.trim="$v.loginForm.password.$model"
      :error-messages="passwordError"
      :type="showPass ? 'text' : 'password'"
      label="Password"
      :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="showPass = !showPass"
    ></v-text-field>
    <v-btn @click="login" color="primary">
      Masuk!
      <v-progress-circular v-if="this.$store.getters.authStatus === 'loading'" class="ml-2" indeterminate color="secondary" size="16" width="2"></v-progress-circular>
    </v-btn>
    <div v-if="this.$store.getters.authStatus === 'error'" class="red--text">
      Username atau password salah
    </div>
  </v-flex>
</template>

<style scoped>
.v-text-field {
  width: 300px;
}
</style>

<script>
import { required, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      showPass: false,
      loginForm: {
        username: "",
        password: "",
      },
      isFormError: false,
      isSignUpSuccess: false,
      isSignUpError: false,
    };
  },
  validations: {
    loginForm: {
      username: {
        required,
        minLength: minLength(6),
      },
      password: {
        required,
        minLength: minLength(5),
      },
    },
  },
  computed: {
    usernameError() {
      const errors = [];
      if (!this.$v.loginForm.username.$dirty) return errors;
      !this.$v.loginForm.username.minLength &&
        errors.push("Username minimal 6 digit");
      !this.$v.loginForm.username.required &&
        errors.push("Username tidak boleh kosong");
      return errors;
    },
    passwordError() {
      const errors = [];
      if (!this.$v.loginForm.password.$dirty) return errors;
      !this.$v.loginForm.password.minLength &&
        errors.push("Password minimal 8 digit");
      !this.$v.loginForm.password.required &&
        errors.push("Password tidak boleh kosong");
      return errors;
    },
  },
  methods: {
    login: function () {
      this.$v.$touch();
      if (!this.$v.loginForm.$invalid) {
        this.$store.dispatch("login", this.loginForm);
      }
    },
  },
};
</script>