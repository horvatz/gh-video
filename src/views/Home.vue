<template>
  <v-container fluid>
    <v-row >
      <v-col v-for="(desc, country, index) in getCountryNames" :key="index">  
        <Country :countryName="country" :countryDesc="desc"/>
      </v-col>
    </v-row>
  </v-container>
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
