<template>
    <v-container fluid>
        <div>
            <h1>{{ countryName }}</h1>
            <p>{{ countryID }}</p>
            <v-btn to="/">Nazaj</v-btn>
        </div>
        <v-row>
            <v-col v-for="(mesto, index) in city" :key="index">  
                <City :cityID="mesto" :countryInfo="countryInfo" />
            </v-col>  
        </v-row>
  </v-container>
</template>

<script>

import City from '@/components/City.vue'
import VideoService from '@/services/VideoService.js'

    export default {
        components: {
            City
        },
        props: {
            countryName: String,
            countryID: String
        },
        data() {
            return {
                city: [],
                countryInfo: {
                    countryName: this.countryName,
                    countryID: this.countryID
                }
            }
        },
        created() {
            VideoService.getVideoList(this.countryID)
                .then(response => {
                    this.city = response.data.items
        })
        .catch(error => {
            console.log('There was an error:', error.response)
        })
  }
}
</script>

<style lang="scss" scoped>

</style>