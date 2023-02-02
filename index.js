var input = document.getElementById('input');
var button = document.getElementById('button');


var output = document.getElementById('output');
let database =[
    {
        value: 460.52,
        currency: "Dollar"
    },
]
function convert() {
       var selector =  document.getElementById('money').selectedOptions[0].value;
        var result = input.value / database[selector].value
        output.value = Math.round(result)
    }
button.addEventListener('click',convert);
// document.getElementById('img').src = './symbols/dollars.png'