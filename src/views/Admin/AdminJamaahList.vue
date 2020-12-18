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
        { text: "Nama", value: "name" },
        { text: "Alamat", value: "address" },
        { text: "Aksi", value: "action" },
      ],
      items: [],
    };
  },
  mounted() {
    this.axios("jamaah/list/")
      .then((response) => {
        console.log(response.data);
        this.items = response.data.data;
        for(var i = 0; i < this.items.length; i++){
          this.items[i].no = i + 1;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
