$.ajax({ //Ajax request for pizza.json
    url: 'pizza.json',
    dataType: 'json',
    type: 'get',
    cache: false,
    success: function (pizzaData) {

        for (var i = 0; i < 3; i++) { //for loop that goes to 3

            $("#getAllPizzas").append('<div class="desc" id="desc' + i + '">'); //Create a div desc+i
            $("#desc" + i).append('<div class="pizza_details" id="pizza_details' + i + '">'); //Ceate a div with id pizza_details+i

            $("#pizza_details" + i).append('<img src="' + pizzaData[i].picture + '" />'); //append to pizza_details+i

            $("#desc" + i).append('<ul> <li><span>Namn</span> : ' + pizzaData[i].name + '</li>'); //append to desc+i
            $("#desc" + i).append('<li><span>Pris</span> : ' + pizzaData[i].price + '</li> '); //append to desc+i
            $("#desc" + i).append('<li><span>Innehåll</span> : ' + pizzaData[i].content + '</li>'); //öäå funkar inte i innehåll

        }
    }
});