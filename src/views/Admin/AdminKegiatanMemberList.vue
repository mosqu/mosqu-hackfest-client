<template>
  <v-container>
    <div>
      <v-data-table
        :headers="headers"
        :items="items"
        :options.sync="options"
        :server-items-length="total"
        :loading="loading"
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
      total: 0,
      loading: true,
      options: {},
      search: "",
      headers: [
        { text: "No", value: "no" },
        { text: "Nama", value: "name" },
        { text: "Alamat", value: "address" },
        { text: "Nomor", value: "phone_number" },
      ],
      items: [],
    };
  },
  watch: {
    options: {
      handler () {
        this.getDataFromApi();
      },
      deep: true,
    },
  },
  mounted () {
    this.getDataFromApi();
  },
  methods: {
    getDataFromApi () {
        const { sortBy, sortDesc, page, itemsPerPage } = this.options;
        this.loading = true;
        this.axios.get(`program/jamaah/list?masjid_program_uid=${this.masjid_program_uid}&sortBy=${sortBy}&sortDesc=${sortDesc}&page=${page}&itemsPerPage=${itemsPerPage}`)
        .then((response) => {
          this.items = response.data.data;
          const start = (page-1)*itemsPerPage;
          for (var i = 0; i < this.items.length; i++) {
            this.items[i].no = start + i + 1;
          }
          this.total = response.data.total;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
      },
  },
  
};
</script>
