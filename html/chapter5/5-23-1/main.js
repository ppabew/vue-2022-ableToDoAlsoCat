Vue.component('my-component', {
  template: '<p><comp-child></comp-child></p>'
})

Vue.component('comp-child', {
  template: '<p id="child" class="child">{{val}}</p>',
  props: ['val']
})

var bus = new Vue({
  data: {
    count: 0
  }
})

Vue.component('component-a', {
  template: '<p><button v-on:click="clickButton">클릭</button></p>',
  methods: {
    clickButton: function () {
      bus.$emit('bus-event')
    }
  }
})

Vue.component('component-b',{
  template: '<p>bus: {{bus.count}}</p>',
  computed: {
    bus: function () {
      return bus.$data
    }
  },
  created: function () {
    bus.$on('bus-event', function () {
      this.count++
    })
  }
})

// eslint-disable-next-line no-undef
var app = new Vue({
  el: '#app',
  data: {
  }
})
