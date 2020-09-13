<template>
    <div>
        <div class="white--text blue darken-2" id="jumbo">
            <v-container>
                <v-row align="center" class="justify-left">
                    <v-col class="text-left" cols="12">
                        <h1 v-if="items" class="display-1 font-weight-bold mb-4">{{ items[0].snippet.title }}</h1>
                        <p v-if="items">{{ items[0].snippet.description }}</p>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <v-container>
            <v-row no-gutters>
                <v-col cols="12" md="6">
                    <Video :videoID="id"/>
                </v-col>
                <v-col cols="12" md="5" offset-md="1">
                    <v-card class="mx-auto">
                        <v-card-title v-if="countryName">Država: {{ countryName }}</v-card-title>
                        <v-card-subtitle>Videoposnetek</v-card-subtitle>
                        <v-card-actions>
                            <v-btn dark color="orange darken-2" v-if="countryName" :to="{ name: 'country-show', params: { countryName: countryName }}">
                                <v-icon dark left>mdi-arrow-left</v-icon>Nazaj
                            </v-btn>
                            <v-btn dark color="orange darken-2" v-if="!countryName" :to="{ name: 'Home'}">
                                <v-icon dark left>mdi-arrow-left</v-icon>Nazaj
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import Video from '@/components/Video.vue'
import VideoService from '@/services/VideoService.js'

export default {
    components: {
        Video,
    },
    props: {
        id: String,
        countryName: String
    },
    data() {
        return {
            items: null
        }
    },
created() {
    VideoService.getVideoInfo(this.id)
      .then(response => {
        this.items = response.data.items
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  }
}
</script>

<style scoped>

</style>