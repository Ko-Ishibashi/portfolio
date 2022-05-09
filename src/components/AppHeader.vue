<template>
  <div>
  <!--<v-navigation-drawer app v-model="drawer" color="#4790BB#FFD69E" clipped>-->
  <v-navigation-drawer app v-model="drawer" color="#22577E" clipped>
    <v-container>
      <v-list-item class="white--text">
        <v-list-item-content>
          <v-list-item-title class="title">
            Menu
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item class="white--text" v-for="toolbar_item in toolbar_list" :key="toolbar_item.name" :to="toolbar_item.to">
          <v-list-item-icon>
            <v-icon color="white">{{ toolbar_item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ toolbar_item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-container>
  </v-navigation-drawer>
  <!--<v-app-bar color="#5B9DA6" dark app clipped-left>-->
  <v-app-bar color="#21A6A6" dark app clipped-left>
    <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
    <v-toolbar-title style="cursor: pointer" @click="$router.push('/')" class="text-h5 , font-weight-bold">Portfolio</v-toolbar-title>
    <v-toolbar-items v-if="!$vuetify.breakpoint.xs">
      <v-list-item v-for="toolbar_item in toolbar_list" :key="toolbar_item.name" style="margin-left:10px">
      <v-btn text
        :to="toolbar_item.to"
        color="white"
      >
        <v-icon color="white">{{ toolbar_item.icon }}</v-icon>
         {{ toolbar_item.name }}
      </v-btn>
     </v-list-item>
    </v-toolbar-items>
  </v-app-bar>
  </div>
</template>

<script>
export default {
  data(){
    return{
      drawer: null,
      toolbar_list:[
        {name: 'About Me',icon: 'mdi-account',to: '/about'},
        {name: 'Career',icon: 'mdi-note-text',to: '/career'},
        {name: 'Hobby',icon: 'mdi-dolphin',to: '/hobby'},
        {name: 'Contact',icon: 'mdi-mail',to: '/contact'},
      ],
    }
  }
};
</script>