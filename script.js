var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Hello Vue.js!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  });
  var app6 = new Vue({
    el: '#app-6',
    data: {
      name: 'name',
      email:'name@email.com',
      age:18
    }
  });
  var app7 = new Vue({
    el:'#v-model-multiple-checkboxes',
    data:{
        checkedNames: []
    }
  });
  Vue.component('list-component', {
    props: ['data'],
    template: '<p>{{ data }}</p>'
  })
  var app = new Vue({
    el: '#app',
    data: {
      itemsList: [
        'Sample 1',
        'Sample 2',
        'Sample 3',
      ]
    }
  });
  function addItem(){
    const data = prompt('Enter any text here');
    if(data){
      if(data.trim() != ''){
        app.itemsList.push(data);
      }
    } 
  }