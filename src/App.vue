<template>

    <v-row>
      <v-bottom-nav v-if="getCurrentUser()"
          absolute
          value="value"
          active.sync="value"
          shift
          color="red"
        >
        
        <router-link to="/" class="nav-link">
          <v-btn flat color="blue" dark height="60px" width="200px">
            Home
          </v-btn>
        </router-link>
        <router-link to="/ZehnBruecken" class="nav-link">
          <v-btn flat color="blue" dark height="60px" width="200px">
            10-Bruecken Löser
          </v-btn>
        </router-link>
        
        <router-link to="/Login" class="nav-link justify-end">
          <v-btn flat color="red" dark height="60px" width="200px">
            LOGIN
          </v-btn>
        </router-link>

        </v-bottom-nav>
    </v-row>
  <RouterView />
</template>


<style scoped>

</style>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

const currentUser : string = "donk"

function getCurrentUser (): boolean {
    if (currentUser) {
      return true
    }
    return false
  }

</script>
