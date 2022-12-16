Vue.component('my-component', {
  template: '<p><comp-child></comp-child></p>'
})

Vue.component('comp-child', {
  template: '<p>{{val}}</p>',
  props: ['val']
})

// eslint-disable-next-line no-undef
var app = new Vue({
  el: '#app',
  data: {
  }
})
