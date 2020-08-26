<template>
    <v-container fluid>
        <h1 v-if="items">{{ items[0].snippet.title }}</h1>
        <p v-if="items">{{ items[0].snippet.description }}</p>
        <v-row no-gutters>
            <v-col cols="12" md="7">
                <Video :videoID="id"/>
            </v-col>
            <v-col cols="12" md="4" offset-md="1">
                <v-card class="mx-auto">
                    <v-card-title>Rusija</v-card-title>
                    <v-card-subtitle>Videoposnetek</v-card-subtitle>
                    <v-card-actions>
                        <v-btn v-if="countryName" :to="{ name: 'country-show', params: { countryName: countryName }}">Nazaj</v-btn>
                        <v-btn v-if="!countryName" :to="{ name: 'Home'}">Nazaj</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
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