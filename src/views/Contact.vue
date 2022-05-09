<template>
  <v-container>
    <v-row class="section__title , mb-8">
        <v-col class="section__title-text">Contact</v-col>
    </v-row>
    <v-card width="600" class="mx-auto mt-5">
      <v-card-title class="justify-center">
        <h4>Form</h4>
      </v-card-title>
      <v-card-text>
      <v-form>
        <v-text-field label="Name"></v-text-field>
        <v-text-field label="E-mail"></v-text-field>
        <v-text-field label="message"></v-text-field>
        <v-btn class="mr-4">
          Send
        </v-btn>
      </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style lang="scss" scoped>
@import '../styles/common/_parts.scss';
</style>