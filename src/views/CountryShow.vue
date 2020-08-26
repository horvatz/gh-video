<template>
    <v-container fluid>
        <div>
            <h1>{{ countryName }}</h1>
            <p>a</p>
            <v-btn to="/">Nazaj</v-btn>
        </div>
        <v-row>
            <v-col v-for="(mesto, index) in city" :key="index">  
                <City :cityID="mesto" :countryName="countryName" />
            </v-col>  
        </v-row>
  </v-container>
</template>

<script>

import City from '@/components/City.vue'
import VideoService from '@/services/VideoService.js'
import { mapGetters } from 'vuex'

export default {
    components: {
        City
    },
    props: {
        countryName: String,
    },
    data() {
        return {
            city: [],
            
        }
    },
    created() {
            VideoService.getVideoList(this.getCountryId(this.countryName))
            .then(response => {
                this.city = response.data.items
            })
            .catch(error => {
                console.log('There was an error:', error.response)
            })    
    },
    computed: mapGetters([
        'getCountryId'
    ])
}
</script>

<style lang="scss" scoped>

</style>