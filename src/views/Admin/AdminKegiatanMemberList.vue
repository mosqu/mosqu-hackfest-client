<template>
  <v-container>
    <div>
      <v-data-table
        :headers="headers"
        :items="items"
        class="elevation-1"
        items-per-page=10
        :search="search"
      >
        <template v-slot:top>
          <v-text-field
            v-model="search"
            label="Search"
            class="mx-4"
          ></v-text-field>
        </template>
      </v-data-table>
    </div>
  </v-container>
</template>

<script>
export default {
  props: ["masjid_program_uid"],
  data() {
    return {
      search: "",
      headers: [
        { text: "No", value: "no" },
        { text: "Nama Kegiatan", value: "name" },
      ],
      items: [],
    };
  },
  mounted() {
    this.axios("program/jamaah/list?masjid_program_uid=" + this.masjid_program_uid)
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
