Vue.component('my-component', {
  template: '<div class="my-component">\
    <p>이름.{{name}} HP.{{hp}}</p>\
    <p>이름 <input v-model="localName"></p>\
    <p>HP <input size="5" v-model.number="localHp"> </p>\
    </div>',
  props: {
    name: String,
    hp: Number
  },
  computed: {
    localName: {
      get: function () {
        return this.name
      },
      set: function (val) {
        this.$emit('update:name', val)
      }
    },
    localHp: {
      get: function () {
        return this.hp
      },
      set: function (val) {
        this.$emit('update:hp', val)
      }
    }
  }
})


// eslint-disable-next-line no-undef
new Vue({
  el: '#app',
  data: {
    name: '슬라임',
    hp: 100
  },
})
