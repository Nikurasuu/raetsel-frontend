<template>
  <v-app-bar :elevation="0" color="teal-darken-4" class="pa-3">
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
    <v-list flat dense nav class="py-1">
      <v-list-item-group color="primary" mandatory>
        <v-list-item v-for="item in items" :key="item.title" dense router :to="item.route">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-title>{{ item.title }}</v-list-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        {
          title: 'MainPage',
          route: '/'
        },
        {
          title: 'BrueckenRaetsel',
          route: '/BrueckenRaetsel'
        },
        {
          title: 'TBD',
          route: '/TBD'
        }
      ]
    }
  }
}
</script>
