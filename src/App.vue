<template>
  <v-app>
    <v-app-bar app color="indigo" dark>
      <v-container fluid>
        <router-link to="/" tag="v-toolbar-title">ghvideo</router-link>
      </v-container>
    </v-app-bar>
    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    
    <v-card height="150" >
      <v-footer
        absolute
        class="font-weight-medium" color="indigo" dark
      >
        <v-col
          class="text-center"
          cols="12"
        >
        {{ new Date().getFullYear() }} — <strong>gezahorvatvideo.com</strong>
        </v-col>
      </v-footer>
    </v-card>

  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>

v-toolbar-title {
  cursor: pointer;
}

</style>
