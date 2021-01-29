<style scoped>
.canvas-qrcode {
  border-style: dotted;
  border-width: 2px;
}
</style>

<template>
  <v-container>
    <div>
      <v-row no-gutters>
        <v-col lg="6" md="6" sm="12" class="mb-5">
          <div class="title mb-3">Aktivasi Bot WA</div>
          <div class="qrcode">
            <div>QR Code</div>
            <canvas id="canvas" class="canvas-qrcode" width="300" height="300"></canvas>
          </div>
          <div>Status : <span class="font-weight-bold">{{ message }}</span></div>
          <div class="button-activate">
            <v-btn
              depressed
              color="primary"
              @click="activateBot"
            >
              Activate
              <v-progress-circular
                v-if="loadingActivate"
                class="ml-2"
                indeterminate
                color="white"
                size="16"
                width="2"
              ></v-progress-circular>
            </v-btn>
          </div>
        </v-col>
        <v-col lg="6" md="6" sm="12" class="mb-5">
          <div class="title mb-3">Registrasi Trigger</div>
          <div class="message">
            <v-text-field outlined label="Trigger Key" v-model="trigger.key"></v-text-field>
          </div>
          <div class="message">
            <v-textarea
              outlined
              counter
              name="input-7-4"
              label="Trigger Content"
              v-model="trigger.content"
            ></v-textarea>
          </div>
          <div class="send">
            <v-btn
              depressed
              color="primary"
              @click="submitTrigger"
            >
              Submit
              <v-progress-circular
                v-if="loadingSubmit"
                class="ml-2"
                indeterminate
                color="white"
                size="16"
                width="2"
              ></v-progress-circular>
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col sm="12" md="12" lg="12">
          <div class="title mb-3">Trigger List</div>
          <v-data-table
            :refresh="refresh"
            :headers="headers"
            :items="items"
            items-per-page="10"
            :search="search"
          ></v-data-table>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>

const QRCode  = require('qrcode');
const io      = require('socket.io-client');

export default {
  
  data() {
    return {
      trigger: {
        key: null,
        content: null
      },
      connection: null,
      loading: false,
      message: '',
      loadingActivate: false,
      loadingSubmit: false,
      headers: [
        { text: "No", value: "no" },
        { text: "Key", value: "key" },
        { text: "Content", value: "content" },
      ],
      items: [],
      refresh: 1
    };
  },

  created: function() {
    this.getTriggerList();
    this.connectSocketIo();
  },
  
  methods: {
    getTriggerList() {
      this.axios.get("/masjid/bot/trigger/list")
        .then((response) => {
          this.items = response.data;
          for (var i = 0; i < this.items.length; i++) {
            this.items[i].no = i + 1;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    activateBot() {
      if (this.connection) {
        this.loadingActivate  = true;
        this.message          = 'Generating QR Code...';
        this.connection.emit('bot', {
          masjid_uid: this.$store.getters.getMasjid
        });
      } else {
        alert('Socket.io is not connected');
      }
    },

    connectSocketIo() {
      const url       = process.env.NODE_ENV == 'development' ? 'http://localhost:3000' : 'https://mosqu-service.herokuapp.com';
      this.connection = io(url);
      const _this     = this;

      this.connection.on('message', (data) => {
        this.message = data.message;
      });

      this.connection.on('bot/response', (data) => {
          if (data.action == 'qr') {
            const canvas      = document.getElementById('canvas');
            QRCode.toCanvas(canvas, data.data, (error) => {
              if (error) {
                _this.message = error;
              } else {
                _this.message = data.message;
              }
            });
          } else if (data.action == 'ready') {
            _this.loadingActivate = false;
            const canvas    = document.getElementById('canvas');
            const context   = canvas.getContext('2d');
            context.clearRect(0, 0, canvas.width, canvas.height);
            _this.message   = data.message;
          }
      });
    },

    submitTrigger() {
      if (this.trigger.key && this.trigger.content) {
        this.loadingSubmit = true;
        this.axios
          .post("/masjid/bot/trigger", {
            key: this.trigger.key.toLowerCase(),
            content: this.trigger.content,
            masjid_uid: this.$store.getters.getMasjid
          })
          .then((response) => {
            this.loadingSubmit = false;
            if (response.data.status) {
              this.refresh = this.refresh + 1;
              alert('success');
            } else {
              alert(response.data.msg);
            }
          })
          .catch((error) => {
            console.log(error);
            this.loadingSubmit = false;
            alert(error);
          });
      } else {
        alert('Key and content is empty');
      }
    }

  }
};
</script>
