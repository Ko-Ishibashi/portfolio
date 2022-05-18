<template>
  <v-container mb-12>
    <v-row class="section__title">
        <v-col class="section__title-text">My Career</v-col>
    </v-row>
    <v-row
      align-content="center"
      justify="center"
      class = "mb-8"
    >
      <v-col cols="10" class="sub__title-text"><h2>Work</h2></v-col>
        <v-col cols="10">
          <div v-for="item in career" v-bind:key="item.period">
            <h5>{{ item.period }} &emsp;{{ item.work }}</h5>
          </div>
        </v-col>
    </v-row>
    <v-row
      align-content="center"
      justify="center"
    >
      <v-col cols="10" class="sub__title-text"><h2>Skill</h2></v-col>
      <v-col cols="10" md="5" lg="5" xl="5">
        <v-card color="#22577E" outlined tile>
          <v-card-title class="white--text , justify-center">- Language -</v-card-title>
              <v-card-text class="white--text">Java&emsp;★★★★★<br>&emsp;開発経験：1年</v-card-text>
              <v-card-text class="white--text">Python&emsp;★★★★☆<br>&emsp;開発経験：8ヶ月</v-card-text>
              <v-card-text class="white--text">JavaScript&emsp;★★★☆☆<br>&emsp;開発経験：6ヶ月</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="10" md="5" lg="5" xl="5">
        <v-card color="#22577E" outlined tile>
          <v-card-title class="white--text , justify-center">- Database -</v-card-title>
            <v-card-text class="white--text">Oracle&emsp;★★★★☆<br>&emsp;開発経験：1年</v-card-text>
            <v-card-text class="white--text">Postgres&emsp;★★★★☆<br>&emsp;開発経験：1年</v-card-text>
            <v-card-text class="white--text">Mongo&emsp;★★★☆☆<br>&emsp;開発経験：8ヶ月</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row
      align-content="center"
      justify="center"
     >
      <v-col cols="10" md="5" lg="5" xl="5">
        <v-card color="#22577E" class="fill-height" outlined tile>
          <v-card-title class="white--text , justify-center">- OS -</v-card-title>
            <v-card-text class="white--text">Windows&emsp;★★★★☆<br>&emsp;開発経験：1年</v-card-text>
            <v-card-text class="white--text">Linux&emsp;★★★★☆<br>&emsp;開発経験：8ヶ月</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="10" md="5" lg="5" xl="5">
        <v-card color="#22577E" outlined tile>
          <v-card-title class="white--text , justify-center">- Front -</v-card-title>
            <v-card-text class="white--text">HTML&emsp;★★★★☆<br>&emsp;開発経験：1年</v-card-text>
            <v-card-text class="white--text">CSS&emsp;★★★☆☆<br>&emsp;開発経験：6ヶ月</v-card-text>
            <v-card-text class="white--text">Jquery&emsp;★★★☆☆<br>&emsp;開発経験：6ヶ月</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row
      align-content="center"
      justify="center"
     >
      <v-col cols="10" md="5" lg="5" xl="5">
        <v-card color="#22577E" class="fill-height" outlined tile>
          <v-card-title class="white--text , justify-center">- Others -</v-card-title>
            <v-card-text class="white--text">Git&emsp;★★★★☆<br>&emsp;開発経験：1年</v-card-text>
            <v-card-text class="white--text">AWS&emsp;★★☆☆☆<br>&emsp;個人学習：3ヶ月</v-card-text>
             <v-card-text class="white--text">Vue.js&emsp;★★☆☆☆<br>&emsp;開発経験：6ヶ月</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="10" md="5" lg="5" xl="5">
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
@import '../styles/common/_parts.scss';
</style>

<script>
export default {
  data(){
    return{
      career:[
        {period: '2021/02 - 2021/04',work: 'プログラミング研修'},
        {period: '2021/05 - 2021/05',work: '災害情報WEB管理システム'},
        {period: '2021/06 - 2021/09',work: 'ガス会社在庫管理システム'},
        {period: '2021/10 - 2022/07',work: '通信回線管理システム'},
      ],
    }
  }
};
</script>