import Vue from 'vue'
import Vuex from 'vuex'
import VideoService from '@/services/VideoService.js'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    countries: []
  },
  mutations: {
    SET_COUNTRIES (state, countries) {
      state.countries = countries
    }
  },
  actions: {
    addCountries ({ commit }){
      VideoService.getCountry()  
        .then(response => {
          commit('SET_COUNTRIES', response.data.items)
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    }
  },
  getters: {
    getCountryNames: state => { // Plus description
      let items = {}
      state.countries.forEach(country => {
        items[country.snippet.localized.title] = country.snippet.localized.description
      });
      return items
    },
    getCountryId: (state) => (countryName) => {
      let foundId = null
      state.countries.forEach(country => {
        if(country.snippet.localized.title == countryName) {
          foundId = country.id
        }
      });
      return foundId
    }
  },
  modules: {
  }
})
