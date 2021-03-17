// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
Vue.config.productionTip = false


const firebaseConfig = {
  apiKey: "AIzaSyAqJXnnvA9eIH4JavYkHssvJ7240Ka_h6A",
      authDomain: "wecan-t-waet.firebaseapp.com",
      projectId: "wecan-t-waet",
      storageBucket: "wecan-t-waet.appspot.com",
      messagingSenderId: "494635076040",
      appId: "1:494635076040:web:22b8bbf800a1e7dbf098fd",
      measurementId: "G-S30Z5RM8S3"
};
firebase.initializeApp(firebaseConfig);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },

  template: '<App/>'
})
