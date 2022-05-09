<template>
  <v-container>
    <v-row class="section__title , mb-8">
        <v-col class="section__title-text">Hobby</v-col>
    </v-row>
    <v-carousel
      cycle
      show-arrows-on-hover
      class="mb-8"
    >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      >
        <v-row
          class="fill-height , white--text"
          align="center"
          justify="center"
          height="auto"
        >
        <div class="text-h2">
          {{ item.text }}
        </div>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<style lang="scss" scoped>
@import '../styles/common/_parts.scss';
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