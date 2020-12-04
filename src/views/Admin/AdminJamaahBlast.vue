<template>
  <v-container>
    <div>
      <v-row no-gutters>
        <v-col sm="12" md="8" lg="6">
          <div class="message">
            <v-textarea
              outlined
              counter
              name="input-7-4"
              label="Pesan"
              v-model="message"
            ></v-textarea>
          </div>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col sm="12" md="8" lg="6">
          <div class="phone">
            <v-text-field
                v-model="phone"
                label="Phone Number"
                required
            ></v-text-field>
          </div>
          <div class="send">
            <v-btn
              depressed
              color="primary"
              @click="sendMessage"
            >
              Send
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      phone: ""
    };
  },
  methods: {
    sendMessage() {
      console.log({
        message: this.message,
        phone: this.phone
      })
    }
  }
};
</script>
