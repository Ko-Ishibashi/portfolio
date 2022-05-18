<template>
  <div>
  <v-container v-if="$vuetify.breakpoint.xs" fluid fill-height class="bg">
    <v-row>
      <v-col class="bg-text">
        <h3 class="text-h3 font-weight-thin mb-4">
            Welcome !
        </h3>
        <h5 class="subheading">
            If you read this, you will understand most of me.
        </h5>
      </v-col>
    </v-row>
  </v-container>
  <v-container v-else fluid fill-height class="bg">
    <v-row>
      <v-col class="bg-text">
        <h2 class="text-h2 font-weight-thin mb-4">
            Welcome !
        </h2>
        <h3 class="subheading">
            If you read this, you will understand most of me.
        </h3>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<style  lang="scss" scoped>
.bg {
  background: url("../assets/welcome.png");
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  &-text {
    color: white;
    text-align: center;
  }
}
</style>