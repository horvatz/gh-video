<template>
  <div>
    <v-parallax dark height="400" src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4">Geza Horvat Video</h1>
          <h4 class="subheading">Popotniški filmi iz 35 različnih držav sveta.</h4>
        </v-col>
      </v-row>
    </v-parallax>
    <v-container>
      <v-row >
        <v-col cols="12" md="4" v-for="(desc, country, index) in getCountryNames" :key="index">  
          <Country :countryName="country" :countryDesc="desc"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Country from '@/components/Country.vue'
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
    
  }, 
  mounted() {
    this.$store.dispatch('addCountries')
  },
  computed: mapGetters([
    'getCountryNames'
  ])
}
</script>
