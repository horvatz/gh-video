<template>
    <div>
        <div class="white--text blue darken-2" id="jumbo">
        <v-container>
            <v-row align="center" justify="left">
                <v-col class="text-left" cols="12">
                <h1 class="display-1 font-weight-bold mb-4">{{ countryName }}</h1>
                </v-col>
            </v-row>
        </v-container>
        </div>
        <v-container>
            <div>
                <v-btn to="/">
                <v-icon dark left>mdi-arrow-left</v-icon>Nazaj
                </v-btn>
            </div>
            <v-row>
                <v-col cols="12" md="4" v-for="(mesto, index) in city" :key="index">  
                    <City :cityID="mesto" :countryName="countryName" />
                </v-col>  
            </v-row>
    </v-container>
    </div>
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

<style scoped>
#jumbo {
    height: 100px;
}
</style>