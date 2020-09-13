<template>
    <div>
        <v-card
        min-width="344"
        height="222"
        dark
        color="#1f7087"
        align="center"
        class="d-flex flex-column"
        >
            <v-card-title class="justify-center">{{ cityID.snippet.title }}</v-card-title>
            <v-card-text>{{ cityID.snippet.description }}</v-card-text>
            <v-spacer></v-spacer>
            <v-card-actions class="justify-center buttons">
                <v-btn :to="{ name: 'video-show', params: { id: cityID.contentDetails.videoId, countryName: countryName } }">
                    <v-icon dark left>mdi-movie</v-icon>
                    Na posnetek
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: 'City',
        props: {
            cityID: Object,
            countryName: String
        }
    }
</script>

<style scoped>
.buttons {
    margin-bottom: 20px;
}
</style>