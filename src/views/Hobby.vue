<template>
  <v-container>
    <v-row class="section__title , mb-8">
        <v-col class="section__title-text">Hobby</v-col>
    </v-row>
    <v-row
      align-content="center"
      justify="center"
    >
    <v-col cols="12" md="6" lg="6" xl="6">
    <v-carousel cycle hide-delimiters show-arrows-on-hover class="mb-8">
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      >
        <v-row
          class="fill-height , white--text"
          align="end"
          justify="center"
          height="auto"
        >
        <div class="text-h2">
          {{ item.text }}
        </div>
        </v-row>
      </v-carousel-item>
    </v-carousel>
    </v-col>
    <v-col cols="12" md="4" lg="4" xl="4" align="center">
      <div class="hobby__contents-title"><v-icon color="#22577E">mdi-fish</v-icon>&nbsp;Diving</div>
      <div class="hobby__contents-text">1aaaaaaaaaaaaaaaaaaaa</div>
      <div class="hobby__contents-title"><v-icon color="#22577E">mdi-palm-tree</v-icon>&nbsp;Trip</div>
      <div class="hobby__contents-title"><v-icon color="#22577E">mdi-music</v-icon>&nbsp;Drums</div>
      <div class="hobby__contents-title"><v-icon color="#22577E">mdi-dog</v-icon>&nbsp;Dog</div>
    </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
@import '../styles/common/_parts.scss';

.hobby__contents {
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: center;

  &-title{
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 15px;
    color: #22577E;
  }

  &-text {
    font-size: 15px;
    margin-top: 15px;
    margin-bottom: 35px;
    text-align: center;
  }
}
</style>

<script>
export default{
  data () {
    return {
      items: [
        {src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',text: '1'},
        {src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',text: '2'},
        {src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',text: '3'},
        {src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',text: '4'},
      ],
    }
  }
};
</script>