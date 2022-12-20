// eslint-disable-next-line no-undef
var app = new Vue({
  el: '#app',
  data: {
    checkList: ['사과', '배', '바나나'],
    selectedList: [],
    flag: true
  },
  computed: {
    allSelected: {
      get: function () {
        console.log('get 호출')
        return this.checkList.length === this.selectedList.length
      },
      set: function (e) {
        console.log('set 호출')
        console.log(e)
        this.selectedList = e ? this.checkList : [];
      }
    },
    testFunction: {
      get: function () {
        this.checkList
        console.log('test get')
      },
      set: function () {
        console.log('test set')
      }
    }
  },

})
