<template>
  <v-app>    
    <v-img 
      :src="require('static/image/International_Students_Flag.jpeg')"
      gradient="to top right, rgba(100,115,101,.33), rgba(25,32,72,.7)"
      class="mainImg"
      >
      <div class="mainImgDiv">
        <vue-typed-js 
          class="textContent mx-auto"
          
          :strings="[textInfo.centerInformation]">
          <h4 class="typing font"
            style="text-align:center;"
            ></h4>  
        </vue-typed-js>
        <vue-typed-js
          :strings="['Welcome to #TopEnglish']"
          >
          <h4 class="typing font"></h4>
        </vue-typed-js>
        <br/>
        
      </div>         
      <div style="margin-top:350px;">                        
        <v-btn 
          icon
          x-large
          @click="focusInfo"
          >
          <v-icon>keyboard_arrow_down</v-icon>
        </v-btn>
      </div>       
    </v-img>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      class="responsive"

      :clipped-left="clipped"
      dense
      flat
      fixed
      app
    >
    <v-app-bar-nav-icon 
      @click.stop="drawer = !drawer" />
      
      <!-- <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn> 
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn> -->
      <v-toolbar-title v-text="title" />
      <v-spacer />
      
    </v-app-bar>
    <v-main>
      <v-container>
        
        <nuxt />
        <v-divider/>
        <inpire/>
      </v-container>
    </v-main>    
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() + ' ' + textInfo.obsContact }} </span>      
    </v-footer> 
    
  </v-app>
</template>

<script>
import Vue from 'vue'
import VueTypedJs from 'vue-typed-js'
Vue.use(VueTypedJs)

export default {
  data () {
    return {      
      textInfo: {  
        centerInformation: 'APRENDER INGLÊS E GARANTIR UM INTERCÂMBIO EM UM SÓ LUGAR.',  
        welcome: 'We are Top English!',
        weAreTopenglish: '',
        schoolDescription: 'Uma empresa com mais de 20 anos de experiência no mercado. Cuidamos de você em qualquer lugar do mundo',        
        obsContact: ' Dúvidas ou para maiores informações, entre em contato!'    
      },      
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        }
        // {
        //   icon: 'mdi-chart-bubble',
        //   title: 'Inspire',
        //   to: '/inspire'
        // }
      ],
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
  methods: {
    focusInfo() {
      var div = document.getElementById('formCard');
      div.scrollIntoView({behavior: 'smooth'});
      return false;
    },
    typeWriterEffect() {
      
    }
  },
  components:{
  },
  mounted() {
    this.typeWriterEffect();
  }
}
</script>
<style>
@import 'assets/variables.scss';

@media(min-width: 1281px) {
  .responsive{
    display: none;
  }
}

@media(max-width: 768){
  .responsive{
    display: block;
  }
}
 
</style>
