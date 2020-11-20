<template>
  <v-container>
    <div>
      <v-data-table
        :headers="headers"
        :items="items"
        class="elevation-1"
        items-per-page="10"
        :search="search"
      >
        <template v-slot:top>
          <v-text-field
            v-model="search"
            label="Search"
            class="mx-4"
          ></v-text-field>
        </template>
        <template v-slot:item.action>
          <v-btn icon>
            <v-icon small> mdi-pencil </v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon small> mdi-delete </v-icon>
          </v-btn>
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
        { text: "Nama", value: "nama" },
        { text: "Alamat", value: "alamat" },
        { text: "Aksi", value: "action" },
      ],
      items: [
        {
          no: "1",
          nama: "Kuswayanto Subagyo",
          alamat: "Perum Taman Indah Sekali B7-18",
        },
        {
          no: "2",
          nama: "Suwiryo Sukamto",
          alamat: "Perum Taman Indah Sekali B7-19",
        },
        {
          no: "3",
          nama: "Maryono Gunawan",
          alamat: "Perum Taman Indah Sekali B7-20",
        },
        {
          no: "4",
          nama: "Fajar Kharisma",
          alamat: "Perum Taman Indah Sekali A5-01",
        },
        {
          no: "5",
          nama: "Arifin Ilham",
          alamat: "Perum Taman Indah Sekali A5-02",
        },
        {
          no: "6",
          nama: "Amrul Sholihin",
          alamat: "Perum Taman Indah Sekali A5-03",
        },
        {
          no: "7",
          nama: "Tantowi Yahya",
          alamat: "Perum Taman Indah Sekali A5-04",
        },
        {
          no: "8",
          nama: "Gunawan Yasmin",
          alamat: "Perum Taman Indah Sekali A8-08",
        },
        {
          no: "9",
          nama: "Budi Kadarsyah",
          alamat: "Perum Taman Indah Sekali A8-09",
        },
        {
          no: "10",
          nama: "Syamsudin Malik Hendrawan",
          alamat: "Perum Taman Indah Sekali A8-10",
        },
        {
          no: "11",
          nama: "Laswi Ridwan Chalik",
          alamat: "Perum Taman Indah Sekali A8-11",
        },
      ],
    };
  },
};
</script>
