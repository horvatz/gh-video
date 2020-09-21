<template>
  <div>
    <v-parallax dark height="400" :src="require(`@/assets/Cover.jpg`)">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4">Geza Horvat Video</h1>
          <h4 class="subheading">Popotniški filmi iz 35 različnih držav sveta in umetniška dela.</h4>
          
          <div id="gumbi">
          <v-btn @click="$vuetify.goTo('#drzave')" dark color="orange darken-2" to="/">
            <v-icon left>mdi-earth</v-icon>Potovanja
          </v-btn>
          <v-btn dark color="orange darken-2" to="/gallery">
              <v-icon dark left>mdi-image</v-icon>Umetniška dela
          </v-btn>
          </div>

        </v-col>
      </v-row>
    </v-parallax>
    <v-container id="drzave">
      <v-row >
        <v-col cols="12" md="4" v-for="(drzava, index) in getCountryNames" :key="index">  
          <Country :countryName="drzava.ime" :countryDesc="drzava.opis"/>
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

<style scoped>
#gumbi a {
  margin: 10px;
}

#gumbi {
  margin-top: 20px;
}
</style>
