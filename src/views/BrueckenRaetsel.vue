<template>
  <v-app class="d-flex">
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
          <v-btn color="success" height="60px" to="/SolutionPage">Upload</v-btn>
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
      this.imageUrl = ''
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
