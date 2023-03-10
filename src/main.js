// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// ========================
// Store
// ========================
import store from './store'

// ========================
// Routes
// ========================
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter ({
  mode: 'history',
  routes
})

// ========================
// Resource
// ========================
import VueResource from 'vue-resource'

Vue.use(VueResource)

// ========================
// Plugin Events
// ========================
import VueEvents from './plugins/events'

Vue.use(VueEvents)

/* eslint-disable no-new */
new Vue({
  store,
  router,
  el: '#app',
  template: `
    <div id="app">
      <transition name="fade" mode="out-in">
        <router-view class="view"></router-view>
      </transition>
    </div>`,    
  components: { App }
})
