<template>
  <v-container>
    <div>
      <v-data-table
        :headers="headers"
        :items="items"
        class="elevation-1"
        items-per-page="10"
        :search="search"
        v-model="selected"
      >
        <template v-slot:top>
          <v-text-field
            v-model="search"
            label="Search"
            class="mx-4"
          ></v-text-field>
        </template>
        <template v-slot:item.action="{ item }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon to="submitMember" v-bind="attrs" v-on="on">
                <v-icon small> mdi-account-plus </v-icon>
              </v-btn>
              <v-btn icon :to="'listMember/' + item.masjid_program_uid" v-bind="attrs" v-on="on">
                <v-icon small> mdi-format-list-bulleted </v-icon>
              </v-btn>
              Lala
            </template>
            <span>Tambahkan Anggota</span>
          </v-tooltip>
        </template>
      </v-data-table>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      headers: [
        { text: "No", value: "no" },
        { text: "Nama Kegiatan", value: "name" },
        { text: "Aksi", value: "action" },
      ],
      items: [],
      selected: [],
    };
  },
  computed: {
    programId() {
      return this.selected[0].masjid_program_uid;
    },
  },
  mounted() {
    this.axios("program/list/")
      .then((response) => {
        console.log(response.data);
        this.items = response.data.data;
        for (var i = 0; i < this.items.length; i++) {
          this.items[i].no = i + 1;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
