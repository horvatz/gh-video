<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      app
    >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          Geza Horvat Video
        </v-list-item-title>
        <v-list-item-subtitle>
          Popotniški filmi
        </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list
        nav
        dense
      >
          <v-list-item link to="/">

            <v-list-item-icon>
              <v-icon>mdi-flag</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Države</v-list-item-title>
            </v-list-item-content>
            
          </v-list-item>

          <v-list-item link to="/gallery">
            
            <v-list-item-icon>
              <v-icon>mdi-image</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Umetniške slike</v-list-item-title>
            </v-list-item-content>
            
          </v-list-item>

          <v-list-item link to="about">
            
            <v-list-item-icon>
              <v-icon>mdi-help</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>O strani</v-list-item-title>
            </v-list-item-content>
            
          </v-list-item>

      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      color="blue darken-4"
      dark
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link to="/" class="text-decoration-none white--text">
        <v-toolbar-title >Geza Horvat Video</v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <v-btn icon to="/">
        <v-icon>mdi-flag</v-icon>
      </v-btn>

      <v-btn icon to="/gallery">
        <v-icon>mdi-image</v-icon>
      </v-btn>

      <v-btn icon to="/about">
        <v-icon>mdi-help</v-icon>
      </v-btn>
    </v-app-bar>
   
    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      

        <!-- If using vue-router -->
        <router-view></router-view>
      
    </v-main>

    
    <v-card height="150" >
      <v-footer
        absolute
        class="font-weight-medium" color="blue darken-4" dark
      >
        <v-col
          class="text-center"
          cols="12"
        >
        {{ new Date().getFullYear() }} — <strong>gezahorvatvideo.com</strong>
        </v-col>
        <cookie-law v-on:accept="$router.push({ name: 'Home' })" buttonText="Sprejmi">
          <div slot="message">
            Za boljše delovanje spletna stran uporablja piškotke. <router-link to="/legal">Več informacij</router-link>
          </div>
        </cookie-law>
      </v-footer>
    </v-card>

  </v-app>
</template>

<script>
import CookieLaw from 'vue-cookie-law'
export default {
  name: 'App',
  components: {
    CookieLaw
  },

  data: () => ({
    drawer: null
  }),
  watch: {
    '$route' (to) {
      document.title = to.meta.title || 'GezaHorvatVideo'
    }
  },
};
</script>

<style scoped>

</style>
