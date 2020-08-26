<template>
  <v-container fluid>
    <v-row >
      <v-col v-for="(drzava, index) in items" :key="index">  
        <Country :countryName="drzava.snippet.localized.title" :countryID=drzava.id />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Country from '@/components/Country.vue'
import VideoService from '@/services/VideoService.js'

export default {
  name: 'Home',
  components: {
    Country
  },
  data() {
    return {
      items: []
    }
  },
  created() {
    VideoService.getCountry()
      .then(response => {
        this.items = response.data.items
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  }
}
</script>
