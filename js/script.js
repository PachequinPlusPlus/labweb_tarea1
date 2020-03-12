
var app = new Vue({
    el: '#app',
    data : {
        message : 'hola vue!'
    }
})


var ifv = new Vue({
    el: "#ifv",
    data: {
        seen: true
    }
})

var mustache = new Vue({
    el : "#must",
    data : {
        rawHtml : '<span style="color:red"> This should be red. </span>'
    }
})


var vm = new Vue({
    el : "#vm",
    data : {
        message : ""
    }
})


var example3 = new Vue({
    el : "#example3",
    methods: {
        di : function(msg){
            alert(msg)
        }
    }
})


var example1 = new Vue({
    el : "#ex1",
    data : {
        items : [
            {message : 'Foo'},
            {message : 'Bar'}
        ]
    }
})
