<template>
 <div>
        <v-card class="mx-auto" id="video">
            <iframe v-if="cookie" width="660" height="543" :src="yt + videoID" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h2 class="text-center">Potrebno je sprejeti piškotke!</h2>
        </v-card>
    </div>
</template>

<script>

    export default {
        
        props: {
            videoID: String
        },
        data() {
            return {
                yt: "https://www.youtube-nocookie.com/embed/",
                cookie: false
            }
        },
        mounted() {
            if (localStorage['cookie:accepted']) {
                this.cookie = localStorage['cookie:accepted']
            }
        }
    }
</script>

<style scoped>

#video {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
}

iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>