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

    <v-footer app>
      <!-- -->
    </v-footer>
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
