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
          class="fill-height , font-italic , white--text"
          align="end"
          justify="center"
          height="auto"
        >
        <div class="body">
          {{ item.text }}
        </div>
        </v-row>
      </v-carousel-item>
    </v-carousel>
    </v-col>
    <v-col cols="12" md="4" lg="4" xl="4" align="center">
      <div class="hobby__contents-title"><v-icon color="#22577E">mdi-fish</v-icon>&nbsp;Diving</div>
      <div class="hobby__contents-text">PADI OPEN WATER DIVER <br>中学生の頃からいろいろな海に潜っています</div>
      <div class="hobby__contents-title"><v-icon color="#22577E">mdi-palm-tree</v-icon>&nbsp;Trip</div>
      <div class="hobby__contents-text">海外旅行が好きです<br>スペイン・パリ・パラオ・セブ・バリ...others</div>
      <div class="hobby__contents-title"><v-icon color="#22577E">mdi-music</v-icon>&nbsp;Drums</div>
      <div class="hobby__contents-text">高校生の頃にバンドを組んでドラムをしていました</div>
      <div class="hobby__contents-title"><v-icon color="#22577E">mdi-dog</v-icon>&nbsp;Meru</div>
      <div class="hobby__contents-text">うちの犬が世界一かわいいです</div>
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
        {src: require('../assets/miyakojima.jpg') , text: 'Miyakojima : Sea turtle'},
        {src: require('../assets/champs_elysees.jpg') , text: 'France : Champs Elysees'},
        {src: require('../assets/drums.jpg') , text: 'Sendai Hook in 2016'},
        {src: require('../assets/meru.jpg') , text: 'Ishibashi MerumeruPrincessⅠ'},
      ],
    }
  }
};
</script>