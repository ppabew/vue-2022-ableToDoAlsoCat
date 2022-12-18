Vue.component('comp-board', {
  template: `<div>Message Board</div>`
})

Vue.component('comp-form', {
  template: `<div>
   Form<textarea v-model="message"></textarea>
    </div>`,
  data: function () {
    return {message: ''}
  }
})

// eslint-disable-next-line no-undef
new Vue({
  el: '#app',
  data: {
    current: 'comp-board'
  }
})
