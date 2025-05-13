<template>
  <v-app class="d-flex">
    <div>
      <v-row>
        <NavUI />
      </v-row>
    </div>
    <div>
      <main>
        <RouterView />
      </main>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      currentUser: null,
      group: null
    }
  },

  methods: {
    getCurrentUser() {
      if (currentUser) {
        return currentUser
      } else return false
    }
  }
}
</script>
