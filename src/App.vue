<template>
  <v-app class="d-flex">
    <div>
      <v-row>
        <v-app-bar :elevation="0" color="teal-darken-4" class="pa-5">
          <template v-slot:prepend>
            <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          </template>

          <v-app-bar-title>Application Bar</v-app-bar-title>

          <v-btn icon>
            <v-icon>mdi-account</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" temporary class="pt-10">
          <v-list :items="items"></v-list>
        </v-navigation-drawer>
      </v-row>
    </div>
    <div style="padding-top: 60px">
      <v-row class="pa-10 ma-10 d-flex justify-center align-center">
        <v-col cols="5">
          <v-file-input
            v-model="image"
            type="file"
            class="input"
            label="File input"
            chips
            prepend-icon="mdi-camera"
            hint="Rätsel-Bild"
            accept="image/*"
            @update:modelValue="onFileChange"
          >
          </v-file-input>
        </v-col>
        <v-col cols="3">
          <v-btn color="success" height="60px">Upload</v-btn>
        </v-col>
      </v-row>
    </div>
    <v-row class="d-flex justify-center">
      <p>Preview</p>
    </v-row>
    <v-row class="fill-height justify-center">
      <v-col cols="10">
        <v-img :src="imageUrl" style="border: 1px dashed #ccc; min-height: 250px" />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      currentUser: null,
      drawer: false,
      group: null,
      items: [
        {
          title: 'MainPage',
          value: '/MainPage'
        },
        {
          title: 'Bruecken-Raetsel',
          value: '/BrueckenRaetsel'
        },
        {
          title: 'TBD',
          value: '/TBD'
        }
      ],
      image: undefined,
      imageUrl: ''
    }
  },

  methods: {
    getCurrentUser() {
      if (currentUser) {
        return currentUser
      } else return false
    },
    onFileChange(file) {
      console.log(typeof file)
      if (!file) {
        return
      }
      this.previewFile(file)
    },
    previewFile(file) {
      if (file) {
        this.imageUrl = URL.createObjectURL(file)
      }
    }
  }
}
</script>
