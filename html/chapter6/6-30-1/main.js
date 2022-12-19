new Vue({
  el: '#app',
  data: {
    order: false,
    list: [
      { id: 1, name: '사과', price: 1000 },
      { id: 2, name: '바나나', price: 2000 },
      { id: 3, name: '딸기', price: 3000 }
    ]
  },
  computed: {
    // order 값에 따라 리스트의 순서를 반전하는 산출 속성
    sortedList: function () {
      // Lodash의 orderBy 메서드 사용하기
      return _.orderBy(this.list, 'price', this.order ? 'desc' : 'asc')
    }
  }
})
