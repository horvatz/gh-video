<template>
  <v-card>
  <v-img
      class="white--text align-end"
      height="200px"
      :src="require(`@/assets/${countryName}.png`)"
    >
  </v-img>
    <v-card-title>{{ countryName }}</v-card-title>
    <v-card-text>{{ countryDesc }}</v-card-text>
    <v-card-actions>
      <router-link
          class="event-link"
          :to="{ name: 'country-show', params: { countryName: countryName } }"
        >
      <v-btn text>
        Klik
      </v-btn>
      </router-link>
    </v-card-actions>
  </v-card>
</template>

<script>
    export default {
        name: 'Country',
        props: {
          countryName: String,
          countryDesc: String
        }
    }
</script>

<style lang="scss" scoped>

</style>