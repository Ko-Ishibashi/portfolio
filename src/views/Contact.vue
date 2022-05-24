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
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          label="Name"
          v-model="name"
          :rules="nameRules"
        ></v-text-field>
        <v-text-field
          label="E-mail"
          v-model="email"
          :rules="emailRules"
        ></v-text-field>
        <v-text-field
          label="message"
          v-model="message"
          :rules="messageRules"
        ></v-text-field>
        <v-btn class="mr-4" @click="submit">
          Send
        </v-btn>
        <v-btn @click="clear">
          clear
        </v-btn>
      </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style lang="scss" scoped>
@import '../styles/common/_parts.scss';
</style>

<script>
export default {
  data: () => ({
    valid: true,
    name: null,
    email: null,
    message: null,
    nameRules: [
      value => !!value || '名前は必須です。',
      value => (value || '').length <= 20 || '20文字以内で入力してください。',
    ],
    emailRules: [
      value => !!value || 'メールアドレスは必須です。',
      value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'メールアドレスの形式が正しくありません。'
      },
    ],
    messageRules: [
      value => !!value || 'メッセージは必須です。',
      value => (value || '').length <= 400 || '400文字以内で入力してください。',
    ],
  }),
  mounted(){
    //エラーをリセット
    this.$refs.form.resetValidation()
  },
  methods: {
    submit() {
      if(this.$refs.form.validation()){
        //送信処理
      }
    },
    clear () {
      this.$refs.form.reset()
    },
  },
}
</script>