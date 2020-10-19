<template>
  <v-flex class="d-flex flex-column align-start">
    <h2>Daftar</h2>
    <v-text-field
      class="mt-4"
      outlined
      v-model.trim="$v.signUpForm.username.$model"
      :error-messages="usernameError"
      label="Username"
    ></v-text-field>
    <v-text-field
      outlined
      v-model.trim="$v.signUpForm.full_name.$model"
      :error-messages="fullnameError"
      label="Nama Lengkap"
    ></v-text-field>
    <v-text-field
      outlined
      v-model.trim="$v.signUpForm.email.$model"
      :error-messages="emailError"
      label="Email"
    ></v-text-field>
    <v-text-field
      outlined
      v-model.trim="$v.signUpForm.password.$model"
      :error-messages="passwordError"
      :type="showPass ? 'text' : 'password'"
      label="Password"
      :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="showPass = !showPass"
    ></v-text-field>
    <v-btn @click="submitSignUp" color="primary">Daftar!</v-btn>
    <p v-if="isFormError" class="mt-2 red--text text-caption error-caption">
      "Manusia memang sering melakukan kesalahan, tapi yang terpenting adalah
      bagaimana kita memperbaikinya" <br />
      -Admin
    </p>
    <p
      v-if="isSignUpSuccess"
      class="mt-2 primary--text text-caption error-caption"
    >
      Alhamdulillah akun telah terdaftar, silahkan untuk melakukan  <a to="/home/masuk">Login</a> :)
    </p>

    <p v-if="isSignUpError" class="mt-2 red--text text-caption error-caption">
      Maaf, terjadi kesalahan saat pendaftaran akun, mohon ulangi pendaftaran kembali. ^^
    </p>
  </v-flex>
</template>

<style scoped>
.v-text-field {
  width: 300px;
}
.error-caption {
  width: 350px;
}
</style>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      showPass: false,
      signUpForm: {
        username: "",
        email: "",
        password: "",
        full_name: "",
      },
      isFormError: false,
      isSignUpSuccess: false,
      isSignUpError: false,
    };
  },
  validations: {
    signUpForm: {
      username: {
        required,
        minLength: minLength(6),
      },
      full_name: {
        required,
        minLength: minLength(6),
      },
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(8),
      },
    },
  },
  computed: {
    usernameError() {
      const errors = [];
      if (!this.$v.signUpForm.username.$dirty) return errors;
      !this.$v.signUpForm.username.minLength &&
        errors.push("Username minimal 6 digit");
      !this.$v.signUpForm.username.required &&
        errors.push("Username tidak boleh kosong");
      return errors;
    },
    fullnameError() {
      const errors = [];
      if (!this.$v.signUpForm.full_name.$dirty) return errors;
      !this.$v.signUpForm.full_name.minLength &&
        errors.push("Nama Lengkap minimal 6 digit");
      !this.$v.signUpForm.full_name.required &&
        errors.push("Nama Lengkap tidak boleh kosong");
      return errors;
    },
    emailError() {
      const errors = [];
      if (!this.$v.signUpForm.email.$dirty) return errors;
      !this.$v.signUpForm.email.email && errors.push("Email tidak valid");
      !this.$v.signUpForm.email.required &&
        errors.push("Email tidak boleh kosong");
      return errors;
    },
    passwordError() {
      const errors = [];
      if (!this.$v.signUpForm.password.$dirty) return errors;
      !this.$v.signUpForm.password.minLength &&
        errors.push("Password minimal 8 digit");
      !this.$v.signUpForm.password.required &&
        errors.push("Password tidak boleh kosong");
      return errors;
    },
  },
  methods: {
    submitSignUp: function () {
      this.isSignUpSuccess = false;
      this.isSignUpError = false;
      this.$v.$touch();
      if (this.$v.signUpForm.$invalid) {
        this.isFormError = true;
      } else {
        this.isFormError = false;
        this.axios
          .post("/user/register", this.signUpForm)
          .then((response) => {
            console.log(response);
            this.isSignUpSuccess = true;
          })
          .catch((error) => {
            console.log(error);
            this.isSignUpError = true;
          });
      }
    },
  },
};
</script>