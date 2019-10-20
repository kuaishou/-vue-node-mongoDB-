import Vue from 'vue'
// import VueResource from 'vue-resource'
import axios from 'axios'
import router from './router/index'
import store from './store/index'
import '../static/js/animation.js'
import '../static/js/tween.js'
// import '../static/live2d/live2d_something.js'
// import '../static/live2d/live2d.js'
import '../static/css/normalize.css'
import '../static/css/public.css'
import '../static/css/font/iconfont.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// Vue.use(VueResource)
Vue.prototype.$axios = axios
Vue.use(ElementUI)
Vue.use(mavonEditor)
router.afterEach(function (transition) {
  // console.log(transition)
  setTimeout(() => {
    // eslint-disable-next-line no-use-before-define
    var _hmt = _hmt || [];
    (function () {
      // 每次执行前，先移除上次插入的代码
      document.getElementById('baiduCount') && document.getElementById('baiduCount').remove()
      var hm = document.createElement('script')
      hm.src = 'https://hm.baidu.com/hm.js?31e3ea93fc79bba66183ee4706f977c3'
      var s = document.getElementsByTagName('script')[0]
      s.parentNode.insertBefore(hm, s)
    })()
  }, 0)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  data () {
    return {
    }
  },
  router,
//   axios,
  store
  // watch:{
  //   '$route'(to,from){
  //      console.log(to)
  //    }
  // }
})
