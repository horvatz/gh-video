<template>
    <div>
        <v-card
        max-width="344"
        class="mx-auto"
        >
            <v-card-title>{{ cityID.snippet.title }}</v-card-title>
            <v-card-text>{{ cityID.snippet.description }}</v-card-text>
            <v-card-actions>
                <router-link
                    class="video-show"
                    :to="{ name: 'video-show', params: { id: cityID.contentDetails.videoId, countryName: countryName } }"
                >
                <v-btn text>
                Klik
                </v-btn>
                </router-link>
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

</style>