<template>
  <v-app>
    <AppHeader/>
	<v-main class="grey lighten-2">
        <router-view />
    </v-main>
    <AppFooter/>
  </v-app>
</template>

<script>
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'

export default {
  components: {
    AppFooter,
    AppHeader
  },
};
</script>