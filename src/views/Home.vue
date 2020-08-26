<template>
  <v-container fluid>
    <v-row >
      <v-col v-for="(country, index) in getCountryNames" :key="index">  
        <Country :countryName="country" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Country from '@/components/Country.vue'
import VideoService from '@/services/VideoService.js'
// import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

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
  }, 
  mounted() {
    this.$store.dispatch('addCountries')
  },
  computed: mapGetters([
    'getCountryNames'
  ])
}
</script>
