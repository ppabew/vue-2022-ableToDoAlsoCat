Vue.component('my-calendar', {
  model: {
    // 현재 값을 value가 아니라 current로 할당하고 싶은 경우
    prop: 'current',
    // 이벤트를 change로 사용하고 싶은 경우
    event: 'change'
  },
  // props에서 설정하기
  props: {
    current: String
  },
  created: function () {
    this.$emit('change', '2018-01-01')
  }
})


Vue.component('my-component', {
  template: '<div class="my-component">\
  <p>이름.{{ name }} HP.{{ hp }}</p>\
  <p>이름 <input v-model="localName"></p>\
  <p>HP <input size="5" v-model.number="localHp"></p>\
  </div>',
  props: {
    name: String,
    hp: Number
  },
  computed: {
    // 산출 속성의 세터와 게터를 통해 v-model 사용하기
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


new Vue({
  el: '#app',
  data: {
    name: '슬라임',
    hp: 100
  }
})
