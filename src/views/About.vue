<template>
  <section class="home-about">
    <v-container>
      <v-row class="section__title">
        <v-col class="section__title-text">About Me</v-col>
      </v-row>
      <v-row class="about__contents">
        <v-col md="5" class="about__contents-img">
          <v-img src="../assets/Home_drums.jpg" alt="" class="img-fluid"></v-img>
        </v-col>
        <v-col md="5">
          <div class="about__contents-title">Profile</div>
          <div class="about__contents-text">name : 石橋 滉 (いしばし こう)</div>
          <v-divider></v-divider>
          <div class="about__contents-text">birth : 1997/03/10</div>
          <v-divider></v-divider>
          <div class="about__contents-text">years : 25</div>
          <v-divider></v-divider>
          <div class="about__contents-text">from : 宮城県仙台市</div>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row class="about__contents">
        <v-col md="5" class="about__contents-text">
          <div class="about__contents-title">Qualification</div>
          <div class="about__contents-text">日商簿記検定試験2級</div>
          <v-divider></v-divider>
          <div class="about__contents-text">Oracle Certified Java Programmer,Silver SE8</div>
          <v-divider></v-divider>
          <div class="about__contents-text">Oracle Certified Java Programmer,Silver SE11</div>
          <v-divider></v-divider>
          <div class="about__contents-text">AWS Certified Solutions Architect - Associate</div>
          <v-divider></v-divider>
          <div class="about__contents-text">AWS Certified Developer-Associate</div>
        </v-col>
        <v-col md="5" class="about__contents-img">
          <v-img src="../assets/Home_drums.jpg" alt="" class="img-fluid"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
</script>
<style lang="scss" scoped>
@import '../styles/common/_parts.scss';

.about__contents {
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: center;

  &-img {
    text-align: center;
  }

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
    margin-bottom: 15px;
    text-align: center;
  }
}
</style>