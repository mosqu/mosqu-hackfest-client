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
            <v-select
              v-model="phone"
              :items="numbers"
              chips
              label="Nomor HP"
              multiple
              outlined
              item-text="name"
              item-value="phone_number"
            ></v-select>
            <v-text-field
                v-model="phone"
                label="Phone Number"
                outlined
            ></v-text-field>
          </div>
          <div class="send">
            <v-btn
              depressed
              color="primary"
              @click="sendMessage"
            >
              Send
              <v-progress-circular
                v-if="loading"
                class="ml-2"
                indeterminate
                color="white"
                size="16"
                width="2"
              ></v-progress-circular>
            </v-btn>
          </div>
        </v-col>
        <v-col lg="12" md="12" sm="12">
          <canvas id="canvas" width="600" height="600"></canvas>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>

const QRCode  = require('qrcode');
const io = require('socket.io-client');

export default {
  
  data() {
    return {
      message: "",
      phone: "",
      connection: null,
      loading: false,
      numbers: [],
    };
  },

  created: function() {
      this.connectSocketIo();
      this.getPhone();
  },
  
  methods: {
    getPhone() {
      this.axios("/jamaah/list/phone")
      .then((response) => {
        this.numbers = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
    },
    sendMessage() {    
      this.loading = true;
      this.connection.emit('blast', {
        message: this.message,
        phone: this.phone
      });
    },

    connectSocketIo() {
      const url = process.env.NODE_ENV == 'development' ? 'http://localhost:3000' : 'https://mosqu-service.herokuapp.com';
      this.connection = io(url);
      const _this = this;

      this.connection.on('blast/response', function (data) {
          if (data.action == 'qr') {
            _this.loading = false;
            const canvas = document.getElementById('canvas');
            QRCode.toCanvas(canvas, data.msg, function (error) {
              if (error) {
                console.error(error) 
              } else {
                console.log('success!');
              }
            });
          } else if (data.action == 'ready') {
            const canvas = document.getElementById('canvas');
            const context = canvas.getContext('2d');
            context.clearRect(0, 0, canvas.width, canvas.height);
          } if (data.action == 'done') {
            alert(data.msg);
          }
      });
    },

  }
};
</script>
