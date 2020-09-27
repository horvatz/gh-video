<template>
  <div>
    <div class="white--text blue darken-2" id="jumbo">
      <v-container>
        <v-row align="center">
          <v-col class="text-left" cols="12">
            <h1 class="display-1 font-weight-bold mb-4">Galerija</h1>
            <p>
              Spodaj so nahajajo moje umetniške slike narisane z oljno tehniko.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container>
      <div>
        <v-btn dark color="orange darken-2" to="/">
          <v-icon dark left>mdi-arrow-left</v-icon>Nazaj
        </v-btn>
      </div>
      <v-row>
        <v-col cols="12" md="4" offset-md="4">
          <v-card elevation="2">
            <v-row>
              <v-col cols="6">
                <v-card-title>Geza Horvat</v-card-title>
                <v-card-subtitle>Avtor umetniških del</v-card-subtitle>
                <v-card-text
                  >Spodnja umetniška dela so nastala izpod rok Geza
                  Horvata.</v-card-text
                >
              </v-col>
              <v-col cols="2"> </v-col>
              <v-col cols="4">
                <v-img
                  lazy-src="https://picsum.photos/id/11/10/6"
                  max-width="250"
                  :src="require(`@/assets/avtor.jpg`)"
                ></v-img>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <v-card>
          <v-container fluid>
            <v-row>
              <v-col
                v-for="(n, i) in 69"
                :key="i"
                class="d-flex child-flex"
                cols="6"
              >
                <v-card flat tile class="d-flex">
                  <v-img
                    :src="require(`@/assets/umetniske/slika${n}.jpg`)"
                    class="grey lighten-2"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Gallery",
};
</script>
<style scoped>
</style>