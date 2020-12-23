<template>
  <v-container>
    <form class="pa-4" v-on:keyup.enter="submit">
      <v-card flat outlined class="ma-4">
        <v-toolbar flat color="primary white--text">
          <v-toolbar-title>Kepala Keluarga</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-text-field
            outlined
            v-model="jamaah.name"
            label="Nama"
          ></v-text-field>
          <v-text-field
            outlined
            v-model="jamaah.address"
            label="Alamat"
          ></v-text-field>
          <v-menu
            v-model="menu[0]"
            :close-on-content-click="false"
            max-width="290"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :value="!jamaah.birthdate ? '' : formatDate(jamaah.birthdate)"
                outlined
                clearable
                label="Tanggal Lahir"
                readonly
                v-bind="attrs"
                v-on="on"
                @click:clear="jamaah.birthdate = null"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="jamaah.birthdate"
              :max="new Date().toISOString().substr(0, 10)"
              no-title
              @change="closeAndUpdateAge(0)"
            ></v-date-picker>
          </v-menu>
          <v-text-field
            outlined
            v-model="jamaah.age"
            readonly
            type="number"
            label="Umur"
          ></v-text-field>
          <v-text-field
            outlined
            v-model="jamaah.phone_number"
            hint="Gunakan format 628XXXXXXXX"
            type="number"
            label="Nomor HP"
          ></v-text-field>
          <v-text-field
            outlined
            v-model="jamaah.occupation"
            label="Pekerjaan"
          ></v-text-field>
          <v-select
            :items="status.salary ? status.salary : []"
            label="Penghasilan"
            item-text="description"
            item-value="status_uid"
            v-model="jamaah.salary_id"
            outlined
          ></v-select>
          <v-select
            :items="status.family ? status.family : []"
            label="Status Keluarga"
            item-text="description"
            item-value="status_uid"
            v-model="jamaah.family_status_id"
            outlined
          ></v-select>
          <v-select
            :items="['Menetap', 'Sementara']"
            outlined
            v-model="jamaah.status_mukim"
            label="Status Mukim"
          ></v-select>
          <v-text-field
            outlined
            v-model="jamaah.keahlian_khusus"
            label="Keahlian Khusus"
          ></v-text-field>
        </v-card-text>
      </v-card>
      <v-card
        v-for="(member, index) in members"
        :key="index"
        flat
        outlined
        class="ma-4"
      >
        <v-toolbar flat color="primary white--text">
          <v-toolbar-title>Anggota {{ index + 1 }}</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-text-field
            outlined
            v-model="members[index].name"
            label="Nama"
          ></v-text-field>

          <v-menu
            v-model="menu[index + 1]"
            :close-on-content-click="false"
            max-width="290"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :value="
                  !members[index].birthdate
                    ? ''
                    : formatDate(members[index].birthdate)
                "
                outlined
                clearable
                label="Tanggal Lahir"
                readonly
                v-bind="attrs"
                v-on="on"
                @click:clear="members[index].birthdate = null"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="members[index].birthdate"
              :max="new Date().toISOString().substr(0, 10)"
              no-title
              @change="closeAndUpdateAge(index + 1)"
            ></v-date-picker>
          </v-menu>
          <v-text-field
            outlined
            v-model="members[index].age"
            type="number"
            label="Umur"
          ></v-text-field>
          <v-text-field
            outlined
            v-model="members[index].phone_number"
            hint="Gunakan format 628XXXXXXXX"
            type="number"
            label="Nomor HP"
          ></v-text-field>
          <v-text-field
            outlined
            v-model="members[index].occupation"
            label="Pekerjaan"
          ></v-text-field>
          <v-select
            :items="status.salary ? status.salary : []"
            label="Penghasilan"
            item-text="description"
            item-value="status_uid"
            v-model="members[index].salary_id"
            outlined
          ></v-select>
          <v-select
            :items="status.family ? status.family : []"
            label="Status Keluarga"
            item-text="description"
            item-value="status_uid"
            v-model="members[index].family_status_id"
            outlined
          ></v-select>
          <v-select
            :items="['Menetap', 'Sementara']"
            outlined
            v-model="members[index].additional_info.status_mukim"
            label="Status Mukim"
          ></v-select>
          <v-text-field
            outlined
            v-model="members[index].additional_info.keahlian_khusus"
            label="Keahlian Khusus"
          ></v-text-field>
        </v-card-text>
      </v-card>
      <v-btn class="ma-4" @click="addMember" color="primary">
        Tambahkan Anggota
      </v-btn>
      <v-btn class="ma-4" @click="removeMember" color="accent">
        Hapus Anggota
      </v-btn>
      <v-card flat outlined class="ma-4">
        <v-toolbar flat color="primary white--text">
          <v-toolbar-title>Aktivitas</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-text-field
            outlined
            v-model="jamaah.additional_info.sholat"
            label="Sholat"
          ></v-text-field>
          <v-text-field
            outlined
            v-model="jamaah.additional_info.zakat"
            label="Zakat"
          ></v-text-field>
          <v-text-field
            outlined
            v-model="jamaah.additional_info.pengajian"
            label="Pengajian"
          ></v-text-field>
          <v-text-field
            outlined
            v-model="jamaah.additional_info.catatan"
            label="Catatan"
          ></v-text-field>
        </v-card-text>
      </v-card>
      <v-btn @click="submitJamaah" color="primary">
        Submit!
        <v-progress-circular
          v-if="this.isSubmitLoading == true"
          class="ml-2"
          indeterminate
          color="secondary"
          size="16"
          width="2"
        ></v-progress-circular>
      </v-btn>
      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-card-title class="headline"> Info </v-card-title>

          <v-card-text>
            {{ dialogMessage }}
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green darken-1" text @click="dialog = false">
              OK
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </form>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      isSubmitLoading: false,
      isSubmitSuccess: false,
      date: [],
      jamaah: {
        additional_info: {},
      },
      members: [],
      menu: [false],
      notEmptyRule: [(v) => !!v || "Kolom ini tidak boleh kosong"],
      dialog: false,
      dialogMessage: "",
      status: {}
    };
  },
  async created() {
    await this.getStatus();
  },
  methods: {
    getStatus() {
      this.axios.get("/jamaah/status")
        .then((response) => {
          this.status = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    submitJamaah() {
      this.jamaah.masjid_uid = this.$store.getters.getMasjid;
      this.jamaah.members = this.members;
      console.log(this.jamaah);
      this.isSubmitLoading = true;
      this.axios
        .post("/jamaah", this.jamaah)
        .then((response) => {
          console.log(response);
          if (response.data.status) {
            this.isSubmitSuccess = true;
            this.isSubmitLoading = false;
            this.dialogMessage = "Submit sukses!"
            this.dialog = true;
            this.clear();
          } else {
            this.isSubmitLoading = false;
            this.dialogMessage = "Submit gagal... \n";
            this.dialog = true;
          }
        })
        .catch((error) => {
          console.log(error);
          this.isSubmitLoading = false;
          this.dialogMessage = "Submit gagal... \n" + error;
          this.dialog = true;
        });
    },
    addMember() {
      this.members.push({
        additional_info: {},
      });
      this.menu.push(false);
      console.log(this.members);
    },
    removeMember() {
      this.members.pop();
      this.menu.pop();
      console.log(this.members);
    },
    formatDate(targetDate) {
      return this.$moment(targetDate).format("D MMMM YYYY");
    },
    closeAndUpdateAge(idx) {
      if (this.jamaah.birthdate != null) {
        this.jamaah.age = this.$moment().diff(
          this.$moment(this.jamaah.birthdate),
          "years"
        );
      }
      console.log(this.jamaah);

      if (this.members.length > 0) {
        for (var i = 0; i < this.members.length; i++) {
          if (this.members[i].birthdate != null) {
            this.members[i].age = this.$moment().diff(
              this.$moment(this.members[i].birthdate),
              "years"
            );
          }
        }
        console.log(this.members);
      }
      this.menu[idx] = false;
    },
    clear(){
      this.jamaah = { additional_info: {} };
      this.members = [];
      window.scrollTo(0,0);
    }
  },
};
</script>
