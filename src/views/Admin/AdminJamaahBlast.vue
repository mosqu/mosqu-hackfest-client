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
        <v-col lg="12" md="12" sm="12">
          <canvas id="canvas" width="600" height="600"></canvas>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>

const QRCode = require('qrcode');

export default {
  
  data() {
    return {
      message: "",
      phone: "",
      connection: null,
    };
  },

  created: function() {
      this.connectWebSocket();
  },
  
  methods: {
    sendMessage() {    
      this.connection.send(JSON.stringify({
        message: this.message,
        phone: this.phone
      }));
    },

    connectWebSocket() {
            console.log("Starting connection to WebSocket Server");
            const url = process.env.NODE_ENV == 'development' ? 'localhost:3000' : 'mosqu-service.herokuapp.com';
            this.connection = new WebSocket(`ws://${url}/blast`);

            this.connection.onmessage = function(event) {
              console.log(event);
              const data = JSON.parse(event.data);

              if (data.action == 'qr') {
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

            }

            this.connection.onopen = function() {
                console.log("Successfully connected to the websocket server...");
            }

            this.connection.onerror = function(error) {
                console.log(`WebSocket error: ${error}`);
            }

            this.connection.onclose = function() {
                console.log("Connection to the websocket server is closed...");
            }
       }

  }
};
</script>
